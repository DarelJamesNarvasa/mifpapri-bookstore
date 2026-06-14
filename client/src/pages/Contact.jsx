function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for your message! We will get back to you soon."
    );
  };

  return (
    <>
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch with Mindanao Institute for Peace and Policy Research
        </p>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>

                <div className="contact-content">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@mindanaoinsitute.org">
                      info@mindanaoinsitute.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>

                <div className="contact-content">
                  <h3>Contact Number</h3>
                  <p>
                    <a href="tel:+63975237778">
                      +63 975 237 778
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-facebook"></i>
                </div>

                <div className="contact-content">
                  <h3>Facebook</h3>
                  <p>
                    <a
                      href="https://facebook.com/mindanaoinsitute"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mindanao Institute for Peace and Policy Research
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>

                <div className="contact-content">
                  <h3>Location</h3>
                  <p>Mindanao, Southern Philippines</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>

                <div className="contact-content">
                  <h3>Office Hours</h3>
                  <p>
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    (Philippine Standard Time)
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2>Send us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">
                      Organization
                    </label>

                    <input
                      type="text"
                      id="organization"
                      name="organization"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Contact Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject *
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interested">
                    I am interested in...
                  </label>

                  <select
                    id="interested"
                    name="interested"
                  >
                    <option value="">
                      -- Select an option --
                    </option>

                    <option value="partnership">
                      Partnership Opportunities
                    </option>

                    <option value="workshops">
                      Joining Workshops
                    </option>

                    <option value="collaboration">
                      Research Collaboration
                    </option>

                    <option value="mentorship">
                      Mentorship Program
                    </option>

                    <option value="general">
                      General Inquiry
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;