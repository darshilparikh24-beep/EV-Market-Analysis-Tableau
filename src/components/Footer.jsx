import { GITHUB_REPO_URL } from "../config/tableau.js";
import Icon from "./Icon.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <div>
            <a className="brand brand--footer" href="#home" aria-label="EV Insights home">
              <span className="brand-mark"><Icon name="bolt" size={18} strokeWidth={2.3} /></span>
              <span>EV<span className="brand__muted">INSIGHTS</span></span>
            </a>
            <p className="footer-title">Electric Vehicle Market<br />Performance &amp; Insights</p>
          </div>
          <div className="footer-links">
            <a href="#dashboard">Dashboard <Icon name="diagonal" size={15} /></a>
            <a href="#story">Story <Icon name="diagonal" size={15} /></a>
            {GITHUB_REPO_URL ? (
              <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">GitHub repository <Icon name="diagonal" size={15} /></a>
            ) : (
              <span className="footer-config-note">Set VITE_GITHUB_REPO_URL to link your repository.</span>
            )}
          </div>
          <a className="back-top" href="#home"><span>BACK TO TOP</span><Icon name="arrow" size={17} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EV Insights</span>
          <span>PROJECT WORK / ELECTRIC MOBILITY</span>
        </div>
      </div>
    </footer>
  );
}
