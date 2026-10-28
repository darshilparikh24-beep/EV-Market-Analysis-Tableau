import { TABLEAU_VIEWS } from "../config/tableau.js";
import Icon from "./Icon.jsx";
import SectionIntro from "./SectionIntro.jsx";
import TableauEmbed from "./TableauEmbed.jsx";

export default function Dashboard() {
  const view = TABLEAU_VIEWS.dashboard;

  return (
    <section className="dashboard-section section-pad" id="dashboard">
      <div className="page-shell">
        <div className="dashboard-heading">
          <SectionIntro
            eyebrow="02 / INTERACTIVE DASHBOARD"
            title={<>Explore the<br /><span>market dashboard.</span></>}
            description={view.description}
          />
          <a className="button button--outline" href={view.url} target="_blank" rel="noreferrer">
            Open full view <Icon name="diagonal" size={18} />
          </a>
        </div>
        <div className="embed-shell">
          <div className="embed-shell__bar">
            <span><i className="status-dot" /> TABLEAU PUBLIC / LIVE DASHBOARD</span>
            <span>INTERACTIVE VIEW</span>
          </div>
          <TableauEmbed view={view} label="Electric vehicle market performance dashboard" />
        </div>
        <p className="embed-footnote">
          The visualization is served by Tableau Public. Use its built-in filters and marks to inspect the underlying views.
        </p>
      </div>
    </section>
  );
}
