import Icon from "./Icon.jsx";
import SectionIntro from "./SectionIntro.jsx";

const features = [
  {
    icon: "chart",
    number: "01",
    title: "Manufacturer sales",
    description: "Compare the sales measures provided for manufacturers in the Tableau dashboard.",
  },
  {
    icon: "gauge",
    number: "02",
    title: "EV pricing",
    description: "Explore vehicle prices alongside range and other specifications in the live views.",
  },
  {
    icon: "globe",
    number: "03",
    title: "Geographical distribution",
    description: "Review manufacturing locations and market regions through the published map and charts.",
  },
  {
    icon: "battery",
    number: "04",
    title: "Battery capacity",
    description: "Inspect battery types, capacity and related performance measures.",
  },
  {
    icon: "bolt",
    number: "05",
    title: "Driving range",
    description: "Compare vehicle range across categories and specifications.",
  },
  {
    icon: "layers",
    number: "06",
    title: "Manufacturer landscape",
    description: "Explore how manufacturers are represented in the vehicle dataset.",
  },
  {
    icon: "gauge",
    number: "07",
    title: "EV efficiency",
    description: "Use the efficiency and range views to investigate differences between vehicles.",
  },
];

export default function AnalyticsFeatures() {
  return (
    <section className="features-section section-pad" id="analysis">
      <div className="page-shell">
        <div className="features-heading">
          <SectionIntro
            eyebrow="04 / ANALYSIS AREAS"
            title={<>One project.<br /><span>Many ways to explore.</span></>}
            description="These cards describe the focus of the published Tableau views. Open the dashboard to inspect its data and filters."
          />
          <a className="text-link" href="#dashboard">Go to dashboard <Icon name="arrow" size={17} /></a>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <a className="feature-card" href="#dashboard" key={feature.number}>
              <div className="feature-card__top">
                <span>{feature.number}</span>
                <Icon name={feature.icon} size={21} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-card__link">Explore in dashboard <Icon name="arrow" size={15} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
