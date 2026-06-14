import { Link } from "react-router-dom";

import getInvolvedHero from "../assets/images/get-involved-hero.jpg";
import partnerWithUs from "../assets/images/partner-with-us.jpg";
import joinOurActivities from "../assets/images/join-our-activities.jpeg";
import collaborateOnResearch from "../assets/images/collaborate-on-research.jpg";

function GetInvolved() {
  return (
    <>
      <section className="get-involved-hero">
        <div className="hero-image">
          <img src={getInvolvedHero} alt="Get Involved" />
        </div>

        <div className="hero-content-overlay">
          <div className="container">
            <h1>Get Involved</h1>
            <p>
              We welcome individuals and institutions who are interested in
              research, collaboration, and capacity-building in peace and policy
              work.
            </p>
          </div>
        </div>
      </section>

      <section className="ways-section">
        <div className="container">
          <div className="ways-grid">
            <div className="way-card">
              <div className="way-image">
                <img src={partnerWithUs} alt="Partner with Us" />
              </div>

              <div className="way-icon">
                <i className="fas fa-handshake"></i>
              </div>

              <h3>Partner with Us</h3>

              <p>
                We are open to partnerships with academic institutions, civil
                society organisations, and development actors working on
                research, training, and community-based initiatives.
              </p>
            </div>

            <div className="way-card">
              <div className="way-image">
                <img src={joinOurActivities} alt="Join Our Activities" />
              </div>

              <div className="way-icon">
                <i className="fas fa-users"></i>
              </div>

              <h3>Join Our Activities</h3>

              <p>
                Students, early-career researchers, and practitioners are
                invited to participate in our workshops, writeshops, and
                research programs.
              </p>
            </div>

            <div className="way-card">
              <div className="way-image">
                <img
                  src={collaborateOnResearch}
                  alt="Collaborate on Research"
                />
              </div>

              <div className="way-icon">
                <i className="fas fa-globe"></i>
              </div>

              <h3>Collaborate on Research</h3>

              <p>
                We work with local and international scholars interested in
                Mindanao-related contexts, offering opportunities for joint
                research, field engagement, and knowledge exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Make an Impact?</h2>
          <p>
            We&apos;d love to hear from you. Send us a message to learn more
            about how you can get involved with MifPaPRi.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default GetInvolved;