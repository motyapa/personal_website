export default function AboutPage() {
  return (
    <section className="page about" aria-labelledby="about-title">
      <div className="page__inner">
        <p className="page__kicker reveal reveal--1">About</p>
        <h1 id="about-title" className="page__title reveal reveal--2">
          Hi! My name is Arthur Vartanyan.
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
            <h2 className="about__aside-title">Interests</h2>
            <ul className="about__list">
              <li>Singing</li>
              <li>Saxophone</li>
              <li>Music Production</li>
              <li>Brazilian Jiu Jitsu</li>
              <li>Kickboxing</li>
              <li>Reading</li>
              <li>Software Development</li>
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
