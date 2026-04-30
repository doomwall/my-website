import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

type FormStatus = "idle" | "loading" | "success" | "error"

function Email() {
  const contact = useInView()
  const email = useInView()

  const [name, setName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: senderEmail, message }),
      })

      if (!res.ok) throw new Error()

      setStatus("success")
      setName("")
      setSenderEmail("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  const show = "opacity-100 pointer-events-auto"
  const hide = "opacity-0 pointer-events-none"

  return (
    <>
      <div
        id="contact"
        ref={contact.ref}
        style={{ transitionDelay: contact.inView ? "400ms" : "0ms" }}
        className={`flex flex-col items-center justify-center gap-4 ${popUp} ${contact.inView ? visible : hidden}`}
      >
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <p className="text-gray-600">Feel free to reach out via email!</p>
      </div>

      <div
        ref={email.ref}
        style={{ transitionDelay: email.inView ? "600ms" : "0ms", paddingBottom: "100px" }}
        className={`flex flex-col items-center justify-center gap-4 ${popUp} ${email.inView ? visible : hidden}`}
      >
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">Name</FieldLabel>
              <Input
                id="form-name"
                type="text"
                placeholder="Evil Rabbit"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Email</FieldLabel>
              <Input
                id="form-email"
                type="email"
                placeholder="john@example.com"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
              />
              <FieldDescription>
                I will never share your email with anyone. I promise.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="form-message">Message</FieldLabel>
              <Textarea
                id="form-message"
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minLength={10}
                required
              />
            </Field>
            {status === "error" && (
              <p className="text-destructive text-sm">
                Something went wrong. Please try again.
              </p>
            )}
            <div className="relative h-10">
              <div className={`absolute inset-0 flex items-center transition-opacity duration-500 ${status === "idle" || status === "error" ? show : hide}`}>
                <Button type="submit">Submit</Button>
              </div>
              <div className={`absolute inset-0 flex items-center transition-opacity duration-500 ${status === "loading" ? show : hide}`}>
                <Badge variant="outline" className="px-2 py-1">
                  Sending...
                  <Spinner data-icon="inline-end" />
                </Badge>
              </div>
              <div className={`absolute inset-0 flex items-center transition-opacity duration-500 ${status === "success" ? show : hide}`}>
                <p className="text-green-600 font-medium">Message sent! I'll get back to you soon.</p>
              </div>
            </div>
          </FieldGroup>
        </form>
      </div>
      <div>
        <hr />
      </div>
    </>
  )
}

export default Email
