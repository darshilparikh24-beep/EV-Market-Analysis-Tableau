import SectionIntro from "./SectionIntro.jsx";

const technologies = ["React", "Vite", "JavaScript", "HTML5", "CSS3", "Tableau Public", "GitHub Actions", "GitHub Pages"];

export default function TechStack() {
  return (
    <section className="technology-section section-pad" id="technology">
      <div className="page-shell technology-layout">
        <SectionIntro
          eyebrow="06 / BUILT FOR THE WEB"
          title={<>Lightweight by<br /><span>design.</span></>}
          description="A static React application keeps deployment simple and leaves data exploration with the live Tableau views."
        />
        <div className="technology-list" aria-label="Technologies used">
          {technologies.map((technology, index) => (
            <span className="technology-chip" key={technology}>
              <i>{String(index + 1).padStart(2, "0")}</i>{technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
