import SectionIntro from "./SectionIntro.jsx";
import Icon from "./Icon.jsx";

const focusAreas = [
  { icon: "chart", label: "Performance", text: "Compare sales patterns across categories, manufacturers and regions." },
  { icon: "battery", label: "Technology", text: "Explore battery chemistry, capacity, charging and vehicle range." },
  { icon: "globe", label: "Geography", text: "See how the market is distributed across manufacturing locations and regions." },
];

export default function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="page-shell">
        <div className="about-layout">
          <SectionIntro
            eyebrow="01 / PROJECT OVERVIEW"
            title={<>A market in motion.<br /><span>Signals worth exploring.</span></>}
            description="EV Insights brings the project’s existing interactive Tableau views into a focused, responsive experience."
          />
          <div className="about-copy">
            <p className="about-copy__lead">
              The shift to electric mobility is changing the way people think about vehicles, energy and infrastructure.
            </p>
            <p>
              This project organizes the analysis around the questions that matter: which segments are moving, how manufacturers compare, and how battery choices relate to range, price and use.
            </p>
            <a className="text-link" href="#analysis">See what you can explore <Icon name="arrow" size={17} /></a>
          </div>
        </div>
        <div className="focus-grid">
          {focusAreas.map((item, index) => (
            <article className="focus-card" key={item.label}>
              <div className="focus-card__top"><span>0{index + 1}</span><Icon name={item.icon} size={22} /></div>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
