import { TABLEAU_VIEWS } from "../config/tableau.js";
import Icon from "./Icon.jsx";
import SectionIntro from "./SectionIntro.jsx";
import TableauEmbed from "./TableauEmbed.jsx";

const prompts = [
  { number: "01", title: "Market momentum", text: "Look across categories and regions to understand how the market is represented." },
  { number: "02", title: "Manufacturer mix", text: "Compare manufacturers using the measures available in the published dashboard." },
  { number: "03", title: "Battery choices", text: "Explore how battery type, capacity and charging relate to vehicle characteristics." },
  { number: "04", title: "Range & value", text: "Review range, price, resale and customer rating views side by side." },
];

export default function Story() {
  const view = TABLEAU_VIEWS.story;

  return (
    <section className="story-section section-pad" id="story">
      <div className="page-shell">
        <div className="story-heading">
          <SectionIntro
            eyebrow="03 / TABLEAU STORY"
            title={<>Follow the<br /><span>market story.</span></>}
            description={view.description}
          />
          <a className="button button--quiet" href={view.url} target="_blank" rel="noreferrer">
            Open published story <Icon name="diagonal" size={18} />
          </a>
        </div>
        <div className="story-layout">
          <div className="story-embed-wrap">
            <div className="embed-shell__bar">
              <span><i className="status-dot" /> TABLEAU PUBLIC / STORY</span>
              <span>CHAPTER VIEW</span>
            </div>
            <TableauEmbed view={view} label="EV market executive story" />
          </div>
          <aside className="story-notes">
            <p className="eyebrow">A GUIDE TO THE VIEWS</p>
            <h3>Questions to<br />take with you.</h3>
            <div className="story-prompt-list">
              {prompts.map((prompt) => (
                <article className="story-prompt" key={prompt.number}>
                  <span>{prompt.number}</span>
                  <div><h4>{prompt.title}</h4><p>{prompt.text}</p></div>
                </article>
              ))}
            </div>
            <p className="story-disclaimer">
              These are prompts for exploring the published views, not additional findings calculated by this website.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
