import { Link } from "react-router-dom";

import activity1 from "../assets/images/activity-1.jpeg";
import davao from "../assets/images/davao.jpeg";
import webinar from "../assets/images/webinar.jpg";
import capacityBuilding from "../assets/images/capacity-building.jpeg";
import upcomingPrograms from "../assets/images/upcoming-programs.jpg";
import additionalActivities from "../assets/images/additional-activities.jpg";

function Activities() {
  return (
    <>
      {/* Header */}
      <section className="activities-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>Activities</h1>
              <p>
                Through workshops, seminars, and capacity-building initiatives,
                MifPaPRi strengthens research and practice for peace and social
                change in Mindanao and beyond.
              </p>
            </div>

            <div className="header-decoration">
              <i className="fas fa-leaf"></i>
              <i className="fas fa-tree"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="activities-list-section">
        <div className="container">
          <div className="activities-grid">

            {/* Activity 1 */}
            <div className="activity-item">
              <div className="activity-left">
                <div className="activity-icon">
                  <i className="fas fa-pen-fancy"></i>
                </div>

                <div className="activity-content">
                  <h3>Research and Writing Workshops</h3>

                  <p>
                    We conduct workshops focused on strengthening research
                    designs, methods, and academic writing skills for students
                    and early-career researchers. These sessions combine
                    interactive exercises and writeshops aimed at supporting
                    participants in developing and publishing research outputs.
                  </p>

                  <p>
                    <Link to="/training-workshop">
                      Click for more.
                    </Link>
                  </p>
                </div>
              </div>

              <div className="activity-right">
                <img
                  src={activity1}
                  alt="Research and Writing Workshops"
                />
              </div>
            </div>

            {/* Activity 2 */}
            <div className="activity-item">
              <div className="activity-left">
                <div className="activity-icon">
                  <i className="fas fa-users"></i>
                </div>

                <div className="activity-content">
                  <h3>
                    Scholars-Practitioners Workshop
                    <br />
                    <span className="date">
                      (April 2026, Davao City)
                    </span>
                  </h3>

                  <p>
                    MifPaPRi participated in a seminar-workshop on
                    scholars-practitioners collaboration, hosted in partnership
                    with GIZ, the British Academy, Mindanao State University –
                    Iligan Institute of Technology, and Eing & Associates.
                  </p>
                </div>
              </div>

              <div className="activity-right">
                <img
                  src={davao}
                  alt="Scholars-Practitioners Workshop"
                />
              </div>
            </div>

            {/* Activity 3 */}
            <div className="activity-item">
              <div className="activity-left">
                <div className="activity-icon">
                  <i className="fas fa-video"></i>
                </div>

                <div className="activity-content">
                  <h3>
                    Webinar: Writing the Review of Related Literature
                    <br />
                    <span className="date">
                      (April 22, 2026)
                    </span>
                  </h3>

                  <p>
                    MifPaPRi organized a webinar focused on approaches to
                    writing the review of related literature. The webinar
                    supported participants in organizing and synthesizing
                    literature and positioning their research more effectively.
                  </p>
                </div>
              </div>

              <div className="activity-right">
                <img
                  src={webinar}
                  alt="Webinar Writing the Review"
                />
              </div>
            </div>

            {/* Activity 4 */}
            <div className="activity-item">
              <div className="activity-left">
                <div className="activity-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>

                <div className="activity-content">
                  <h3>Capacity-Building Activities</h3>

                  <p>
                    MifPaPRi engages in context-sensitive and policy-engaged
                    research, particularly in conflict-affected and
                    post-conflict settings. These activities aim to strengthen
                    both individual and institutional research capacity.
                  </p>
                </div>
              </div>

              <div className="activity-right">
                <img
                  src={capacityBuilding}
                  alt="Capacity Building Activities"
                />
              </div>
            </div>

            {/* Activity 5 */}
            <div className="activity-item">
              <div className="activity-left">
                <div className="activity-icon">
                  <i className="fas fa-calendar-days"></i>
                </div>

                <div className="activity-content">
                  <h3>Upcoming Programs</h3>

                  <p>
                    MifPaPRi is preparing a series of writeshops and research
                    workshops to further support early-career researchers in
                    developing their work.
                  </p>
                </div>
              </div>

              <div className="activity-right">
                <img
                  src={upcomingPrograms}
                  alt="Upcoming Programs"
                />
              </div>
            </div>

            {/* Activity 6 */}
            <div className="activity-item">
              <div className="activity-left">
                <div className="activity-icon">
                  <i className="fas fa-star"></i>
                </div>

                <div className="activity-content">
                  <h3>Additional Activities</h3>

                  <p>
                    Additional activities and collaborations will be announced
                    soon.
                  </p>
                </div>
              </div>

              <div className="activity-right">
                <img
                  src={additionalActivities}
                  alt="Additional Activities"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;