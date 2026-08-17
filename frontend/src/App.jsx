import { useState } from "react"
import { Button } from "#components/ui/button"
import { Input } from "#components/ui/input"
import { Label } from "#components/ui/label"
import { Textarea } from "#components/ui/textarea"
import "./App.css"

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

function SiteHeader({ page, onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="site-brand"
          onClick={() => onNavigate("home")}
        >
          Arthur Vartanyan
        </button>
        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                page === item.id ? "site-nav__link is-active" : "site-nav__link"
              }
              onClick={() => onNavigate(item.id)}
              aria-current={page === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

function HomePage({ onNavigate }) {
  return (
    <section className="hero" aria-label="Home">
      <div className="hero__media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
        <div className="hero__veil" />
      </div>
      <div className="hero__content">
        <p className="hero__brand reveal reveal--1">Arthur Vartanyan</p>
        <p className="hero__lede reveal reveal--3">
          A personal corner of the web for work, writing, music, ramblings, and getting in touch.
        </p>
        <div className="hero__actions reveal reveal--4">
          <Button size="lg" onClick={() => onNavigate("about")}>
            About me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hero__ghost"
            onClick={() => onNavigate("contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page about" aria-labelledby="about-title">
      <div className="page__inner">
        <p className="page__kicker reveal reveal--1">About</p>
        <h1 id="about-title" className="page__title reveal reveal--2">
          Hello, my name is Arthur Vartanyan.
        </h1>
        <div className="about__grid">
          <div className="about__copy reveal reveal--3">
            <p>
              I am currently a senior backend software engineer at SoFi. In the past I was
              a backend engineer at expedia and prior to that, a full stack contractor at Microsoft.
              I have been doing software engineering in a professional capacity since 2019 and have
              a bachelor's degree in Math and a master's degree in Computer Science.
            </p>
            <p>
              Outside of work, I enjoy self-development both professionally and personally.
              I like to expand my skillset as evidenced by learning front-end engineering and
              deploying websites manually. This website is evidence of that and also serves as
              my own personal page for fun stuff and potential blog posts later on.
            </p>
            <p>
              In my free time, I enjoy music and have been taking singing lessons for 5 years, and
              recently have started learning the saxophone, music production, and taking dance classes.
              I also am currently a blue belt in brazilian jiu jitsu and have been doing various striking
              sports (kickboxing, muay thai) for a decade now.
            </p>
          </div>
          <aside className="about__aside reveal reveal--4">
            <h2 className="about__aside-title">Focus</h2>
            <ul className="about__list">
              <li>Backend Software Engineering</li>
              <li>Music</li>
              <li>Combat Sports</li>
            </ul>
            <h2 className="about__aside-title">Currently</h2>
            <p className="about__aside-text">
              Exploring personal projects, music, having a good time, and open to interesting collaborations.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
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
      const response = await fetch("/send-email", {
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
          Say hello, ask a question, or share an idea. 
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
      </div>
    </section>
  )
}

function App() {
  const [page, setPage] = useState("home")

  function navigate(next) {
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="site" data-page={page}>
      <SiteHeader page={page} onNavigate={navigate} />
      <main key={page} className="site-main">
        {page === "home" && <HomePage onNavigate={navigate} />}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© {new Date().getFullYear()} Varta</span>
          <button type="button" onClick={() => navigate("contact")}>
            Get in touch
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
