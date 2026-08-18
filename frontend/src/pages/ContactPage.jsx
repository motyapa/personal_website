import { useState } from "react"
import { LinkedinLogoIcon } from "@phosphor-icons/react"
import { Button } from "#components/ui/button"
import { Input } from "#components/ui/input"
import { Label } from "#components/ui/label"
import { Textarea } from "#components/ui/textarea"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "#components/ui/item"

const API_URL = import.meta.env.VITE_API_URL

const SOCIALS = [
  {
    label: "GitHub",
    handle: "motyapa",
    href: "https://github.com/motyapa",
    icon: "github-icon",
  },
  {
    label: "LinkedIn",
    handle: "Arthur Vartanyan",
    href: "https://www.linkedin.com/in/arthur-vartanyan-b72946168",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    handle: "Arthur Vartanyan",
    href: "https://www.instagram.com/arthurrvartanyan/",
    icon: "instagram-icon",
  }
]

function SocialIcon({ icon }) {
  if (icon === "linkedin") {
    return <LinkedinLogoIcon className="size-4" aria-hidden="true" />
  }

  return (
    <svg className="size-4" aria-hidden="true">
      <use href={`/icons.svg#${icon}`} />
    </svg>
  )
}

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setSubmitting(true)
    setError("")

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSent(true)
    } catch {
      setError("Something went wrong sending your message. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="page contact" aria-labelledby="contact-title">
      <div className="page__inner page__inner--narrow">
        <p className="page__kicker reveal reveal--1">Contact</p>
        <h1 id="contact-title" className="page__title reveal reveal--2">
          Let&apos;s talk.
        </h1>
        <p className="page__lede reveal reveal--3">
          If you want to reach out to me!
        </p>

        {sent ? (
          <div className="contact__success reveal reveal--4" role="status">
            <p className="contact__success-title">Thanks, {name.trim()}.</p>
            <p>Your message was sent. I&apos;ll get back to you soon.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSent(false)
                setName("")
                setEmail("")
                setMessage("")
                setError("")
              }}
            >
              Send another
            </Button>
          </div>
        ) : (
          <form
            className="contact__form reveal reveal--4"
            onSubmit={handleSubmit}
          >
            <div className="contact__field">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={submitting}
              />
            </div>
            <div className="contact__field">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={submitting}
              />
            </div>
            <div className="contact__field">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={submitting}
              />
            </div>
            {error ? (
              <p className="contact__error" role="alert">
                {error}
              </p>
            ) : null}
            <div className="contact__actions">
              <Button type="submit" size="lg" disabled={submitting}>
                {submitting ? "Sending…" : "Send message"}
              </Button>
            </div>
          </form>
        )}

        <section
          className="contact__socials reveal reveal--4"
          aria-labelledby="socials-title"
        >
          <h2 id="socials-title" className="contact__socials-title">
            Socials
          </h2>
          <p className="contact__socials-lede">
            You can also find me on these social media platforms!
          </p>
          <ItemGroup className="contact__socials-list">
            {SOCIALS.map((social) => (
              <Item
                key={social.label}
                variant="outline"
                render={
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <ItemMedia variant="icon">
                  <SocialIcon icon={social.icon} />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{social.label}</ItemTitle>
                  <ItemDescription>{social.handle}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </section>
      </div>
    </section>
  )
}
