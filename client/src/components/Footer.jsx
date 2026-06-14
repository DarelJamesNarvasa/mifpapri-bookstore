import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>Mindanao Institute for Peace and Policy Research</p>
            <p>Based in Mindanao, Southern Philippines</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/what-we-do">What We Do</Link></li>
              <li><Link to="/activities">Activities</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href="mailto:info@mindanaoinsitute.org">
                info@mindanaoinsitute.org
              </a>
            </p>
            <p>Mindanao, Philippines</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 Mindanao Institute for Peace and Policy Research. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;