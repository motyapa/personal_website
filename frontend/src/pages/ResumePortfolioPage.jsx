import { Button } from "#components/ui/button"

const EXPERIENCE = [
  {
    company: "SoFi",
    role: "Senior Software Engineer",
    period: "May 2024 - Present",
    summary:
      "Building backend systems for servicing, underwriting, and money transfers.",
    highlights: [
      "Drove cross-service data-enrichment efforts for inbound/outbound ACH/wire/exchange-network across intl/domestic transfers, " +
      "tracing data across several repositories and teams, validating data requirements across all of the transfer workflows.",

      "Led design and implementation of underwriting components for school-specific interest rate discounts, enabling" +
      "differentiated student pricing and contributing to $370MM in yearly revenue.",

      "Led development of underwriting components for multi-year loan approvals, enabling students to access funds" +
      "throughout their program without reapplying",
    ],
  },
  {
    company: "Expedia",
    role: "Software Engineer 2",
    period: "Dec 2021 - May 2024",
    summary:
      "Developed backend services to unify checkout experiences across Expedia's platforms (vrbo, booking, expedia).",
    highlights: [
      "Developed a Kotlin/Java eCommerce booking service (5,000+ users/day, $200K/day, 99.9% uptime) and led" +
      "migration of Hotels.com to the booking service; its reliability and extensibility drove adoption as the primary" +
      "checkout platform across multiple brands within the organization."
    ],
  },
  {
    company: "Wipro",
    role: "Project Engineer",
    period: "April 2019 - Nov 2021",
    summary:
      "Created, maintained, and upgraded a full-stack internal website for minting 5x5 codes.",
    highlights: [
      "Developed a full-stack application using JavaScript, C#, and SQL to enable Microsoft Employees to efficiently" +
      "request new 5x5 gift card tokens, automating creation of over 50 million redeemable gift cards per month."
    ],
  },
]

const EDUCATION = [
  { degree: "M.S. Computer Science", school: "Georgia Tech" },
  { degree: "B.S. Mathematics", school: "University of Washington" },
]

const SKILLS = [
  "Backend engineering",
  "Distributed systems",
  "API design",
  "Python",
  "Java",
  "Cloud infrastructure",
]

const PROJECTS = [
  {
    title: "Personal website",
    description:
      "This site — designed, built, and deployed by hand as a learning project in front-end engineering.",
    highlights: [
      "Deployed and managed production hosting end to end.",
      "Configured DNS and custom domain configs"
    ],
    tags: ["React", "Vite", "Python", "FastAPI"],
  },
  {
    title: "Music scale generator",
    description:
      "A website to generate various music exercises/scales. Note - initial request may be slow as it is hosted for free" +
        "on render. https://scale-generator-frontend.onrender.com/",
    highlights: [
        "Cross-section between music theory and software development.",
        "Researched various music-writing libraries and implemented backend logic for all scales."
    ],
    tags: ["React", "Vite", "Python", "FastAPI"]
  }
]

export default function ResumePortfolioPage() {
  return (
    <section className="page resume-portfolio" aria-labelledby="resume-title">
      <div className="page__inner">
        <p className="page__kicker reveal reveal--1">Resume & Portfolio</p>
        <h1 id="resume-title" className="page__title reveal reveal--2">
          Work, projects, and skills.
        </h1>
        <p className="page__lede reveal reveal--3">
          A snapshot of professional experience and selected projects. Full resume available on request.
        </p>

        <div className="resume-portfolio__layout">
          <div className="resume-portfolio__main">
            <section className="resume-portfolio__block reveal reveal--3" aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="resume-portfolio__heading">
                Experience
              </h2>
              <ul className="resume-portfolio__timeline">
                {EXPERIENCE.map((item) => (
                  <li key={item.company} className="resume-portfolio__timeline-item">
                    <div className="resume-portfolio__timeline-head">
                      <h3 className="resume-portfolio__role">{item.role}</h3>
                      <span className="resume-portfolio__period">{item.period}</span>
                    </div>
                    <p className="resume-portfolio__company">{item.company}</p>
                    <p className="resume-portfolio__summary">{item.summary}</p>
                    <ul className="resume-portfolio__highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section className="resume-portfolio__block reveal reveal--4" aria-labelledby="portfolio-heading">
              <h2 id="portfolio-heading" className="resume-portfolio__heading">
                Projects/Knick-Knacks
              </h2>
              <ul className="resume-portfolio__projects">
                {PROJECTS.map((project) => (
                  <li key={project.title} className="resume-portfolio__project">
                    <h3 className="resume-portfolio__project-title">{project.title}</h3>
                    <p className="resume-portfolio__project-desc">{project.description}</p>
                    <ul className="resume-portfolio__highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <ul className="resume-portfolio__tags" aria-label="Technologies">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="resume-portfolio__aside reveal reveal--4">
            <section aria-labelledby="education-heading">
              <h2 id="education-heading" className="resume-portfolio__aside-title">
                Education
              </h2>
              <ul className="resume-portfolio__education">
                {EDUCATION.map((item) => (
                  <li key={item.degree}>
                    <p className="resume-portfolio__degree">{item.degree}</p>
                    <p className="resume-portfolio__school">{item.school}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="resume-portfolio__aside-title">
                Skills
              </h2>
              <ul className="about__list">
                {SKILLS.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </section>
  )
}
