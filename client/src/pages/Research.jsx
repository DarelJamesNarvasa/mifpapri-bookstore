import researchImage from "../assets/images/MIfPaPRi-Hosts-International.jpg";

function Research() {
  return (
    <section className="research-detail-section">
      <div className="container">
        <article className="research-detail-card">
          <div className="research-detail-header">
            <span className="research-badge">
              International Research Project
            </span>

            <h1>
              MIfPaPRi Hosts International Research Project on Former Young
              Combatants
            </h1>
          </div>

          <img
            src={researchImage}
            alt="Former Young Combatants Research Project"
            className="research-main-image"
          />

          <div className="research-article-content">
            <p>
              The Mindanao Institute for Peace and Policy Research (MIfPaPRi)
              serves as the host institution for the international research
              project “From Conflict to Peace: Reintegration Trajectories of
              Former Young Combatants in Post-Conflict Southern Philippines and
              Bosnia and Herzegovina.” The project has received funding support
              from the{" "}
              <a
                href="https://fba.se/en/news-media/news/fba-research-grants-2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                Folke Bernadotte Academy of Sweden
              </a>
              , one of Europe&apos;s leading institutions working on peace,
              security, and conflict prevention.
            </p>

            <p>
              The study examines how former young combatants rebuild their lives
              after armed conflict and how communities, institutions, memory, and
              digital information environments shape their reintegration
              experiences. Bringing together the cases of the Bangsamoro region
              in the Southern Philippines and Bosnia and Herzegovina, the project
              seeks to generate practical lessons that can strengthen
              youth-responsive reintegration and peacebuilding efforts in
              post-conflict societies.
            </p>

            <p>
              The project is particularly interested in understanding how young
              people transition from conflict to civilian life, how communities
              support or hinder this process, and how peacebuilding initiatives
              can better respond to the needs and aspirations of former
              combatants. Findings from the research will contribute to policy
              discussions, practitioner resources, community engagement
              initiatives, and academic scholarship on youth, peace, and
              security.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Research;