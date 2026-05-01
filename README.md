# tuomovalkila.dev

Personal portfolio and CV website. Live at **[tuomovalkila.dev](https://tuomovalkila.dev)**.

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, React Router v7 |
| Backend | FastAPI, Python 3.13, Resend, hCaptcha, slowapi |
| Infra | Docker, nginx, Railway |

The frontend is a single-page React app served by nginx. The backend is a FastAPI service that handles contact form submissions — it verifies hCaptcha tokens and sends email via Resend. Both services are containerised and deployed separately on Railway.

## Project structure

```
my-website/
├── website-frontend/          # React + Vite SPA
├── website-backend/           # FastAPI contact form API
├── docker-compose.yml         # Production-like build
└── docker-compose.dev.yml     # Dev mode with hot reload
```

## Local development

### Prerequisites

- Docker and Docker Compose

### 1. Configure environment variables

Backend — copy the example and fill in your values:

```bash
cp website-backend/.env.example website-backend/.env
```

Frontend — optional for local dev (hCaptcha test key works out of the box):

```bash
cp website-frontend/.env.example website-frontend/.env.local
```

### 2. Start dev servers

```bash
docker compose -f docker-compose.dev.yml up
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3000 |

Both services hot-reload on file changes.

### 3. Production build (optional)

To test the nginx-served production build locally:

```bash
docker compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:8080 |
| Backend | http://localhost:3000 |

## Environment variables

### Backend (`website-backend/.env`)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Address that receives contact form submissions |
| `HCAPTCHA_SECRET` | Secret key from [hcaptcha.com](https://hcaptcha.com) |

### Frontend (`website-frontend/.env.local`)

| Variable | Description |
|---|---|
| `VITE_HCAPTCHA_SITE_KEY` | Public site key from hCaptcha (use `10000000-ffff-ffff-ffff-000000000001` for local testing) |
| `VITE_API_URL` | Backend base URL (leave empty in dev — proxied automatically) |

## Deployment

Both services are deployed as separate Docker containers on [Railway](https://railway.app).

Set all environment variables in each service's Variables tab in the Railway dashboard. `VITE_API_URL` and `VITE_HCAPTCHA_SITE_KEY` are baked into the frontend at build time via Docker build args — set them as Railway build variables, not runtime variables.