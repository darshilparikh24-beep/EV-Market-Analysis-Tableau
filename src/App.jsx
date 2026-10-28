import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import AnalyticsFeatures from "./components/AnalyticsFeatures.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Methodology from "./components/Methodology.jsx";
import Navbar from "./components/Navbar.jsx";
import Story from "./components/Story.jsx";
import TechStack from "./components/TechStack.jsx";

const sectionIds = ["about", "dashboard", "story", "analysis"];

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar activeSection={activeSection} />
      <main id="main">
        <Hero />
        <About />
        <Dashboard />
        <Story />
        <AnalyticsFeatures />
        <Methodology />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
