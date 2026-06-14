import workshopDiscussion from "../assets/images/workshop-discussion.jpeg";
import researchPresentation from "../assets/images/research-presentation.jpeg";
import mindanaoLandscape from "../assets/images/mindanao-landscape.jpg";

import "../styles/style.css";
import "../styles/research-details.css";
import "../styles/research-team.css";

function About() {
  return (
    <>
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h1>About MifPaPRi</h1>

              <p>
                The Mindanao Institute for Peace and Policy Research (MifPaPRi)
                is a research institute based in the Southern Philippines
                focused on peacebuilding, youth engagement, and policy-relevant
                research in post-conflict and conflict-affected contexts.
              </p>

              <p>
                MifPaPRi works with communities, civil society organisations,
                and academic partners to produce grounded research that reflects
                everyday experiences of conflict, recovery, and social change in
                Mindanao and comparable settings. Its work is anchored in the
                belief that research should be context-sensitive, ethically
                grounded, and connected to real-world policy and practice.
              </p>

              <p>
                The Institute provides research-focused services, including
                training workshops on research design and methods, academic
                writing workshops and writeshops, and mentorship programs that
                support early-career researchers, particularly those based in
                Mindanao. These initiatives aim to strengthen local research
                capacity and support scholars in developing and publishing their
                work.
              </p>

              <p>
                MifPaPRi also collaborates with international scholars and
                institutions interested in Mindanao-related contexts. Through
                these partnerships, it draws locally-grounded expertise,
                facilitates collaborative research platforms, and contributes to
                capacity-building efforts that promote ethical, context-sensitive,
                and policy-engaged research.
              </p>
            </div>

            <div className="about-images">
              <div className="image-top-right">
                <img src={workshopDiscussion} alt="Workshop discussion" />
              </div>

              <div className="image-middle-right">
                <img src={researchPresentation} alt="Research presentation" />
              </div>

              <div className="image-bottom-left">
                <img src={mindanaoLandscape} alt="Mindanao landscape" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="research-team-section">
        <div className="container">
          <div className="research-team-box">
            <div className="section-header">
              <h2>Research Team</h2>

              <div className="header-line">
                <span></span>
                <i className="fas fa-leaf"></i>
                <span></span>
              </div>

              <p>
                Meet the researchers and collaborators leading MIFPAPRI&apos;s
                efforts in evidence-based peacebuilding and policy research.
              </p>
            </div>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-icon">
                  <i className="fas fa-user-check"></i>
                </div>

                <div>
                  <h3>Principal Investigator</h3>
                  <h4>Dr. Primitivo III Cabanes Ragandang</h4>
                  <p>Mindanao State University–Iligan Institute of Technology</p>
                </div>
              </div>

              <div className="team-card">
                <div className="team-icon">
                  <i className="fas fa-user-shield"></i>
                </div>

                <div>
                  <h3>Co-Principal Investigator</h3>
                  <h4>Dr. Vanja Petričević</h4>
                  <p>Florida Gulf Coast University</p>
                </div>
              </div>

              <div className="team-card">
                <div className="team-icon">
                  <i className="fas fa-users"></i>
                </div>

                <div>
                  <h3>Research Assistants</h3>
                  <ul>
                    <li>Rholaisa Mamailao</li>
                    <li>Elaiza May Flores</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="team-message">
              <div className="message-icon">
                <i className="fas fa-handshake"></i>
              </div>

              <p>
                MIFPAPRI looks forward to working with local communities, civil
                society organizations, policymakers, and international partners
                throughout the duration of the project as part of its commitment
                to promoting evidence-based peacebuilding and policy research in
                Mindanao and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-grid">
            <div className="approach-icon">
              <i className="fas fa-users"></i>
            </div>

            <div className="approach-content">
              <h2>Our Approach</h2>

              <p>
                MifPaPRi emphasizes grounded, field-based research that centers
                local knowledge and lived experience. It prioritizes
                collaboration, ethical engagement, and the translation of
                research into meaningful insights for policy and practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;