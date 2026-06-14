import { Link } from "react-router-dom";

import serviceResearch from "../assets/images/service-research.jpeg";
import serviceTraining from "../assets/images/service-training.jpeg";
import mentorship from "../assets/images/mentorship.jpeg";
import collaborativeResearch from "../assets/images/collaboraive-research.jpg";

function WhatWeDo() {
  return (
    <>
      <section className="what-we-do-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>What We Do</h1>
              <p>
                We advance peace and policy research in the Southern Philippines
                through research, training, mentorship, and collaboration—grounded
                in local expertise and committed to real-world impact.
              </p>
            </div>

            <div className="header-decoration">
              <i className="fas fa-leaf"></i>
              <i className="fas fa-tree"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            <Link to="/research" className="service-card-link">
              <div className="service-card">
                <div className="service-image">
                  <img src={serviceResearch} alt="Research" />
                </div>

                <div className="service-icon">
                  <i className="fas fa-microscope"></i>
                </div>

                <h3>Research</h3>

                <p>
                  We conduct field-based research on conflict, youth engagement,
                  and social change in post-conflict and conflict-affected
                  contexts. Our research produces grounded insights grounded in
                  everyday experiences in Mindanao and comparable settings.
                </p>

                <p>Click to explore.</p>
              </div>
            </Link>

            <Link to="/training-workshop" className="service-card-link">
              <div className="service-card">
                <div className="service-image">
                  <img src={serviceTraining} alt="Training and Workshops" />
                </div>

                <div className="service-icon">
                  <i className="fas fa-chalkboard-user"></i>
                </div>

                <h3>Training and Workshops</h3>

                <p>
                  We deliver practical workshops on research design and methods,
                  including how to develop research questions, ethical
                  considerations in field work, data collection and analysis
                  techniques, and writing workshops and writeshops that advance
                  researchers&apos; writing skills.
                </p>

                <p>Click to explore.</p>
              </div>
            </Link>

            <Link to="/mentorship" className="service-card-link">
              <div className="service-card">
                <div className="service-image">
                  <img src={mentorship} alt="Mentorship and Capacity Building" />
                </div>

                <div className="service-icon">
                  <i className="fas fa-handshake"></i>
                </div>

                <h3>Mentorship and Capacity Building</h3>

                <p>
                  We provide one-on-one mentoring for early and mid-career
                  researchers, particularly those based in Mindanao. Through
                  guided support in research development, we help researchers
                  navigate the publishing process and strengthen their work.
                </p>

                <p>Click to explore.</p>
              </div>
            </Link>

            <Link to="/collaborative-research" className="service-card-link">
              <div className="service-card">
                <div className="service-image">
                  <img
                    src={collaborativeResearch}
                    alt="Collaborative Research Support"
                  />
                </div>

                <div className="service-icon">
                  <i className="fas fa-network-wired"></i>
                </div>

                <h3>Collaborative Research Support</h3>

                <p>
                  We work in international research partnerships with researchers
                  and institutions with interest in Mindanao-related contexts by
                  providing locally grounded expertise. We facilitate
                  collaborative research platforms and policy-engaged approaches.
                </p>

                <p>Click to explore.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-people-group"></i>
              </div>

              <h4>
                Our work is grounded in everyday, intensely, locally rooted
                relationships and deep commitment to the communities we serve.
              </h4>

              <p>
                We believe that strong research, when rooted in local realities
                and shared through collaboration, creates lasting impact.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-globe"></i>
              </div>

              <h4>
                Grounded in local realities. Connected to the world. Committed
                to impact.
              </h4>

              <p>
                Our approach combines deep local knowledge with global
                perspectives to drive meaningful change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;