import { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";

export default function TableauEmbed({ view, label }) {
  const vizRef = useRef(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const viz = vizRef.current;
    if (!viz) return undefined;

    let timeoutId;
    const onInteractive = () => {
      window.clearTimeout(timeoutId);
      setStatus("ready");
    };
    const onLoadError = () => {
      window.clearTimeout(timeoutId);
      setStatus("error");
    };

    viz.addEventListener("firstinteractive", onInteractive);
    viz.addEventListener("vizloaderror", onLoadError);
    timeoutId = window.setTimeout(() => {
      setStatus((current) => current === "loading" ? "slow" : current);
    }, 22000);
    viz.setAttribute("src", view.url);

    return () => {
      window.clearTimeout(timeoutId);
      viz.removeEventListener("firstinteractive", onInteractive);
      viz.removeEventListener("vizloaderror", onLoadError);
    };
  }, [view.url]);

  const showNotice = status === "error" || status === "slow";

  return (
    <div className={"tableau-embed" + (status === "ready" ? " tableau-embed--ready" : "")}>
      {status === "loading" ? (
        <div className="embed-notice embed-notice--loading" role="status">
          <span className="loading-ring" />
          <span>Connecting to Tableau Public…</span>
        </div>
      ) : null}
      {showNotice ? (
        <div className="embed-notice embed-notice--fallback" role={status === "error" ? "alert" : "status"}>
          <span className="fallback-icon"><Icon name="diagonal" /></span>
          <strong>{status === "error" ? "This view could not be embedded." : "The Tableau view is taking longer to load."}</strong>
          <span>Open the published {label} directly to keep exploring.</span>
          <a className="button button--small" href={view.url} target="_blank" rel="noreferrer">
            Open in Tableau Public <Icon name="diagonal" size={16} />
          </a>
        </div>
      ) : null}
      <tableau-viz
        ref={vizRef}
        toolbar="bottom"
        hide-tabs=""
        aria-label={label}
      />
    </div>
  );
}
