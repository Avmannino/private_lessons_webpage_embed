// src/App.jsx
import "./App.css";

const CONTACT_EMAIL = "info@wingsarena.com";

export default function App() {
  return (
    <div className="page">
      {/* HERO */}
      <header className="hero" role="banner">
        <div className="container heroInner">
          <p className="eyebrow">Wings Arena</p>

          <h1 className="heroTitle">Private Lessons</h1>

          <p className="heroSub">
            Private coaching for <strong>hockey</strong> and <strong>ice-skating</strong>. Ages{" "}
            <strong>3+</strong>
          </p>

          {/* ✅ Only header button */}
          <div className="heroCtas">
            <a
              className="btn btnPrimary btnWide"
              href={`mailto:${CONTACT_EMAIL}?subject=Private%20Lessons%20Inquiry`}
            >
              Email {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {/* QUICK INFO */}
          <section className="infoGrid" aria-label="Private lessons overview">
            <article className="infoCard">
              <h2 className="cardTitle">Who it’s for</h2>
              <p className="cardText">Kids, teens, and adults — any level.</p>
            </article>

            <article className="infoCard">
              <h2 className="cardTitle">Lesson format</h2>
              <p className="cardText">
                Private or small-group coaching with a <strong>1:1 to 1:4</strong> ratio.
              </p>
            </article>

            <article className="infoCard">
              <h2 className="cardTitle">How to book</h2>
              <p className="cardText">
                Email for <strong>pricing</strong>, <strong>availability</strong>, and scheduling.
              </p>
            </article>
          </section>

          {/* OPTIONS */}
          <section id="options" className="section" aria-label="Lesson options">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Choose your track</h2>
              <p className="sectionSub">
                Both options use the same booking email — just tell us what you’re looking for.
              </p>

              {/* Red connector brackets (desktop only via CSS) */}
              <div className="sectionConnectors" aria-hidden="true">
                <span className="connector connectorLeft" />
                <span className="connector connectorRight" />
              </div>
            </div>

            <div className="twoCol">
              {/* HOCKEY */}
              <article className="optionCard" aria-label="Hockey private lessons">
                <div className="optionTop">
                  <h3 className="optionTitle">Hockey Private Lessons</h3>
                  <p className="optionSub">Skills, skating, puck control, shooting.</p>
                </div>

                <div className="miniBlock">
                  <p className="miniLabel">When</p>
                  <p className="miniText">
                    <strong>Thursdays • 6:30am–7:30am</strong>
                    <br />
                    Through <strong>end of February 2026</strong>
                  </p>
                  <div className="note">Spring schedule availability will be posted soon.</div>
                </div>

                <ul className="miniList" aria-label="Hockey focus areas">
                  <li>Skating fundamentals &amp; edgework</li>
                  <li>Speed, transitions, stopping</li>
                  <li>Puck skills &amp; confidence</li>
                </ul>

                <div className="cardCtas"></div>
              </article>

              {/* ICE SKATING */}
              <article className="optionCard" aria-label="Ice skating private lessons">
                <div className="optionTop">
                  <h3 className="optionTitle">Ice Skating Private Lessons</h3>
                  <p className="optionSub">Comfort on the ice, fundamentals, confidence.</p>
                </div>

                <div className="miniBlock">
                  <p className="miniLabel">When</p>
                  <p className="miniText">
                    <strong>During our general skates</strong>
                  </p>
                </div>

                <ul className="miniList" aria-label="Ice skating focus areas">
                  <li>Balance &amp; posture</li>
                  <li>Forward skating &amp; stopping</li>
                  <li>Turns &amp; control</li>
                </ul>

                <div className="cardCtas"></div>
              </article>
            </div>
          </section>

          {/* BOTTOM CTA (centered + stacked) */}
          <section className="bottomCta" aria-label="Get started">
            <div className="bottomCtaInner">
              <h2 className="bottomTitle">Ready to get started?</h2>
              <p className="bottomSub">
                Email us and we’ll help match you with the right coach and time.
              </p>

              <a
                className="btn btnPrimary btnWide"
                href={`mailto:${CONTACT_EMAIL}?subject=Private%20Lessons%20Inquiry`}
              >
                Email {CONTACT_EMAIL}
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* ✅ Footer is OUTSIDE bottom CTA and sticks to bottom */}
      <footer className="siteFooter">
        © {new Date().getFullYear()} Wings Arena. All rights reserved.
      </footer>
    </div>
  );
}