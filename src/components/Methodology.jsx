import SectionIntro from "./SectionIntro.jsx";

const steps = [
  ["01", "Data source", "The Tableau workbook includes an EV_Market_Data extract with vehicle, manufacturer, battery, range, price, sales and rating fields."],
  ["02", "Preparation", "Data preparation belongs to the source workbook. This website does not transform or duplicate the extract."],
  ["03", "Exploration", "Use the published dashboard filters and views to inspect comparisons and patterns in the available fields."],
  ["04", "Visualization", "The Tableau workbook contains the charts, measures, filters and geographic view presented to visitors."],
  ["05", "Story", "The separate published Tableau Story organizes selected views into a guided narrative."],
  ["06", "Web integration", "The React site embeds both public views and provides direct links when visitors want a larger view."],
  ["07", "Deployment", "GitHub Actions builds the static site and deploys the generated files to GitHub Pages."],
];

export default function Methodology() {
  return (
    <section className="methodology-section section-pad" id="methodology">
      <div className="page-shell methodology-layout">
        <div className="methodology-sticky">
          <SectionIntro
            eyebrow="05 / PROJECT METHOD"
            title={<>From source<br /><span>to exploration.</span></>}
            description="A clear view of how the dashboard and website fit together."
          />
          <div className="methodology-note">
            <span className="note-mark">i</span>
            <p>The site presents the existing Tableau work. It does not claim to reproduce the workbook’s calculations.</p>
          </div>
        </div>
        <div className="methodology-steps">
          {steps.map(([number, title, text]) => (
            <article className="method-step" key={number}>
              <span className="method-step__number">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <span className="method-step__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
