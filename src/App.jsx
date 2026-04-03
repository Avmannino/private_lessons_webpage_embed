import "./App.css";

const CONTACT_EMAIL = "info@wingsarena.com";

// ✅ Wix-safe schedule page link (no anchors needed)
const SCHEDULE_URL = "https://www.wingsarena.com/schedule";

// ✅ Guest Coaches signup link
const GUEST_COACHES_SIGNUP_URL =
  "https://www.signupgenius.com/go/10C0548AEAF2FAAFCCE9-62694396-wings#/";

// ✅ Required documents
const VOLUNTEER_WAIVER_URL = `${import.meta.env.BASE_URL}documents/volunteer-waiver.pdf`;

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
                Both options use the same booking email — just let us know what you’re looking for.
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
                  <p className="miniLabel">When?</p>

                  <p className="miniText">
                    <strong>Spring Availability</strong>
                  </p>

                  <ul
                    className="miniList"
                    aria-label="Spring hockey private lesson availability"
                    style={{ marginTop: "0.5rem" }}
                  >
                    <li>
                      <strong>Mon, Wed, Thurs, Fri</strong> — 6:15am - 7:15am
                    </li>
                    <li>
                      <strong>Mondays</strong> — 2:30pm - 3:30pm
                    </li>
                    <li>
                      <strong>Thursdays</strong> — 3:40pm - 4:40pm
                    </li>
                  </ul>

                  <div className="note" style={{ marginTop: "0.75rem" }}>
                    Guest coaches can sign up using the link below.
                  </div>

                  <a
                    className="btn btnOutline btnCalendar"
                    href={GUEST_COACHES_SIGNUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Guest Coaches Sign Up Here"
                  >
                    Guest Coaches Sign Up Here
                  </a>
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
                  <p className="miniLabel">When?</p>
                  <p className="miniText">
                    <strong>During our Public Skates</strong>
                  </p>

                  <div className="note" style={{ marginTop: "0.75rem" }}>
                    View our public skate schedule using the link below.
                  </div>

                  <a
                    className="btn btnOutline btnCalendar"
                    href={SCHEDULE_URL}
                    target="_top"
                    rel="noopener noreferrer"
                  >
                    View Public Skate Schedule
                  </a>
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

          {/* REQUIREMENTS CARD */}
          <section className="requirementsCard" aria-label="Guest coach and volunteer requirements">
            <div className="requirementsInner">
              <h2 className="bottomTitle">Guest Coach &amp; Volunteer Requirements</h2>

              <div className="requirementItem">
                <p className="requirementText">
                  All <strong>Guest Coaches</strong> must provide a{" "}
                  <strong>Certificate of Insurance</strong> upon arrival for our records.
                </p>
              </div>

              <div className="requirementItem">
                <p className="requirementText">
                  Any <strong>parents or volunteers</strong> who plan to step on the ice during a
                  lesson must complete the volunteer waiver linked below.
                </p>
                <a
                  className="btn btnOutline btnCalendar"
                  href={VOLUNTEER_WAIVER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Complete Volunteer Waiver
                </a>
              </div>
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

              <p className="bottomNote">
                NOTE: A $25 charge applies to each coach and each lesson participant for every
                private lesson at Wings Arena. These charges are separate from, and not included in
                the lesson cost. Please check in at the front desk upon arrival.
              </p>

              <footer className="siteFooter">
                © {new Date().getFullYear()} Wings Arena. All rights reserved.
              </footer>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}