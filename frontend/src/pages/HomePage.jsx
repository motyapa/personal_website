import { Button } from "#components/ui/button"

export default function HomePage({ onNavigate }) {
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
