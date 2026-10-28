import Icon from "./Icon.jsx";

const bars = [34, 51, 43, 71, 58, 82, 65, 92, 74, 100, 83, 68, 88, 58, 75, 46, 63, 38];

export default function Hero() {
  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="status-dot" /> ELECTRIC MOBILITY / MARKET INTELLIGENCE</div>
        <h1 id="hero-title">
          The EV market,
          <span> in a clearer</span>
          <span className="hero-title__accent">light<span className="hero-period">.</span></span>
        </h1>
        <p className="hero-description">
          Explore the performance, technology and geography shaping electric vehicle markets — through the project’s live Tableau dashboard and story.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#dashboard">Explore dashboard <Icon name="arrow" /></a>
          <a className="button button--quiet" href="#story">Read the story <Icon name="diagonal" size={18} /></a>
        </div>
        <div className="hero-meta">
          <span className="hero-meta__rule" />
          <span>INTERACTIVE DATA, MADE EXPLORABLE</span>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="art-orbit art-orbit--one" />
        <div className="art-orbit art-orbit--two" />
        <div className="art-glow" />
        <div className="art-topline"><span>LIVE VIEW</span><span>01 — 07</span></div>
        <div className="art-frame">
          <div className="art-frame__heading">
            <div><span className="art-label">MARKET SIGNALS</span><strong>Electric mobility</strong></div>
            <span className="art-badge"><Icon name="bolt" size={13} /> EV</span>
          </div>
          <div className="art-chart">
            <div className="art-chart__grid"><i /><i /><i /><i /></div>
            <div className="art-chart__bars">
              {bars.map((height, index) => (
                <span key={index} style={{ height: height + "%", animationDelay: index * 25 + "ms" }} />
              ))}
            </div>
            <div className="art-chart__line"><span /><span /><span /><span /></div>
          </div>
          <div className="art-frame__footer">
            <span><i className="legend-dot legend-dot--orange" /> MARKET MOMENTUM</span>
            <span><i className="legend-dot legend-dot--blue" /> VEHICLE MIX</span>
          </div>
        </div>
        <div className="art-float art-float--left"><span className="art-float__icon"><Icon name="globe" /></span><span>GLOBAL<br /><b>MARKETS</b></span></div>
        <div className="art-float art-float--right"><span className="art-float__icon art-float__icon--green"><Icon name="battery" /></span><span>BATTERY<br /><b>TECHNOLOGY</b></span></div>
        <div className="art-caption">A DATA STORY FOR THE NEXT DRIVE</div>
      </div>
      <div className="hero-bottom-rule" />
    </section>
  );
}
