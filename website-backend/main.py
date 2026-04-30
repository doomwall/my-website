import os
import logging
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import aiosmtplib
import httpx
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("CORS_ORIGIN", "http://localhost:5173")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=2000)
    captcha_token: str


async def verify_captcha(token: str) -> bool:
    secret = os.getenv("HCAPTCHA_SECRET")
    if not secret:
        logger.error("HCAPTCHA_SECRET not set")
        return False
    async with httpx.AsyncClient() as client:
        resp = await client.post(
            "https://api.hcaptcha.com/siteverify",
            data={"secret": secret, "response": token},
        )
        return resp.json().get("success", False)


@app.get("/")
def root():
    return "Hello World!"


@app.get("/api/health")
def health():
    logger.info("HEALTH CHECK HIT")
    return {"status": "ok"}


@app.post("/api/contact")
@limiter.limit("5/minute")
async def contact(request: Request, form: ContactForm):
    if not await verify_captcha(form.captcha_token):
        raise HTTPException(status_code=400, detail="Captcha verification failed")

    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    contact_to = os.getenv("CONTACT_TO_EMAIL")

    if not all([smtp_user, smtp_password, contact_to]):
        logger.error("Email config incomplete — set SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL")
        raise HTTPException(status_code=500, detail="Email service unavailable")

    msg = MIMEMultipart()
    msg["From"] = smtp_user
    msg["To"] = contact_to
    msg["Reply-To"] = form.email
    msg["Subject"] = f"Portfolio contact from {form.name}"

    body = f"Name: {form.name}\nEmail: {form.email}\n\nMessage:\n{form.message}"
    msg.attach(MIMEText(body, "plain"))

    try:
        await aiosmtplib.send(
            msg,
            hostname=smtp_host,
            port=smtp_port,
            username=smtp_user,
            password=smtp_password,
            start_tls=True,
        )
        logger.info(f"Contact email sent from {form.email}")
    except Exception as e:
        logger.error(f"Failed to send email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message")

    return {"status": "sent"}
