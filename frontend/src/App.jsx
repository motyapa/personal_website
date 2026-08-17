import { useState } from "react"
import "./App.css"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ResumePortfolioPage from "./pages/ResumePortfolioPage"

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume & Portfolio" },
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
        {page === "resume" && <ResumePortfolioPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© {new Date().getFullYear()}Arthur Vartanyan</span>
          <button type="button" onClick={() => navigate("contact")}>
            Get in touch
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
