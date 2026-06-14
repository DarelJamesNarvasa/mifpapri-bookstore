import heroBg from "../assets/images/hero-mindanao.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>
              Mindanao Institute for Peace and Policy Research, Inc. (MifPaPRi)
            </h1>

            <div className="hero-divider"></div>

            <p>
              Advancing peace and policy research in the Southern Philippines
              through training, writing support, and mentorship for emerging
              scholars, grounded in local expertise and global collaboration.
            </p>

            <div className="cta-buttons">
              <Link to="/activities" className="btn btn-primary">
                JOIN A WORKSHOP
              </Link>

              <Link to="/get-involved" className="btn btn-secondary">
                WORK WITH US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;