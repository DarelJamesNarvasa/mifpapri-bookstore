import workshop1 from "../assets/images/workshop-1.jpeg";
import workshop2 from "../assets/images/workshop-2.jpg";

function TrainingWorkshop() {
  return (
    <>
      {/* Workshop 1 */}
      <section className="research-detail-section">
        <div className="container">
          <article className="research-detail-card">
            <div className="research-detail-header">
              <span className="research-badge">
                Training and Workshop
              </span>

              <h1>
                MIfPaPRi Joins Regional Dialogue on Research and Civil Society
                Partnerships in Mindanao
              </h1>
            </div>

            <img
              src={workshop1}
              alt="Regional Dialogue on Research and Civil Society Partnerships"
              className="research-main-image"
            />

            <div className="research-article-content">
              <p>
                The Mindanao Institute for Peace and Policy Research, Inc.
                (MIfPaPRi) participated in a regional gathering of scholars,
                researchers, and civil society practitioners in Davao City on
                15–17 April 2026 to discuss research capacity building,
                knowledge production, and collaboration between academic
                institutions and civil society organizations in Mindanao.
              </p>

              <p>
                The event formed part of the British Academy-funded project
                <i>
                  {" "}
                  Building Research and Publication Capacity of Emerging
                  Scholars in the Mindanao Region of Southern Philippines
                </i>
                , implemented by Mindanao State University–Iligan Institute of
                Technology and King's College London in partnership with GIZ
                Civil Peace Service.
              </p>

              <p>
                The discussions highlighted the importance of strengthening
                partnerships between universities and civil society
                organizations to produce research that is both academically
                rigorous and responsive to the needs of local communities.
                Participants also reflected on research ethics, publication
                pathways, indigenous and local knowledge systems, and the role
                of scholarship in promoting peace and development in Mindanao.
              </p>

              <p>
                For MIFPAPRI, the gathering provided an opportunity to engage
                with fellow researchers and practitioners working to advance
                evidence-based policy, peacebuilding, and community-centered
                research across the region.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Workshop 2 */}
      <section className="research-detail-section">
        <div className="container">
          <article className="research-detail-card">
            <div className="research-detail-header">
              <span className="research-badge">
                Training and Workshop
              </span>

              <h1>
                Bridging Research, Practice, and Advocacy: Mindanao Peacebuilders
                Gather for Collaborative Colloquium
              </h1>
            </div>

            <img
              src={workshop2}
              alt="Mindanao Peacebuilders Gather for Collaborative Colloquium"
              className="research-main-image"
            />

            <div className="research-article-content">
              <p>
                The Mindanao Institute for Peace and Policy Research, Inc.
                (MIfPaPRi) participated in the colloquium{" "}
                <strong>
                  "Forging Ties Between Research, Practice, and Advocacy:
                  Shared Agendas of Community-Oriented Peace Projects"
                </strong>
                , held on 6–8 May 2026 at the Mindanao State
                University–Iligan Institute of Technology.
              </p>

              <p>
                Organized through a collaboration between the MSU-IIT Office of
                Research Dissemination and Dr. Bronwyn Mei Wynch of the Bonn
                International Centre for Conflict Studies (BICC), Germany, the
                event was supported by the Deutsche Stiftung Friedensforschung
                (German Foundation for Peace Research).
              </p>

              <p>
                The gathering brought together academics, civil society
                organizations, students, and community representatives from
                across Mindanao to reflect on the relationship between research,
                practice, and advocacy in peacebuilding.
              </p>

              <p>
                The colloquium was guided by a simple but powerful premise:
                <strong>
                  {" "}
                  research is more than knowledge production—it is fundamentally
                  relational.
                </strong>
              </p>

              <p>
                Throughout the three-day event, participants explored how peace
                research can become more responsive to the realities and
                aspirations of communities while strengthening collaboration
                among researchers, practitioners, and local actors.
              </p>

              <p>
                Presentations from civil society organizations, including
                GIZ-SAUP and Balay Mindanaw, provided valuable insights into the
                opportunities and challenges of implementing peacebuilding
                initiatives on the ground.
              </p>

              <p>
                Community perspectives were further highlighted through the
                participation of representatives from the Impahanong Tribal
                Council, whose reflections underscored the importance of
                ensuring that research remains connected to local realities and
                community priorities.
              </p>

              <p>
                The discussions concluded with a shared recognition that
                meaningful peacebuilding requires sustained dialogue among
                researchers, practitioners, and communities.
              </p>

              <p>
                Participants emphasized that continued spaces for exchange and
                collaboration are essential for bridging gaps between research,
                policy, and practice while advancing common goals for peace and
                development in Mindanao.
              </p>

              <p>
                MIFPAPRI is grateful for the opportunity to participate in these
                conversations and remains committed to supporting research that
                is collaborative, community-centered, and responsive to the
                needs of conflict-affected communities.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default TrainingWorkshop;