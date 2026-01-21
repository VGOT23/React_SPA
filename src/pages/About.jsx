export default function About() {
  return (
    <section className="card">
      <div className="pageHeader">
        <div>
          <h1 className="title">About</h1>
          <p className="text">
            A lightweight React Single Page App without React Router.
          </p>
        </div>
        <div className="chip chipOutline">v1.0</div>
      </div>

      <div className="aboutGrid">
        <div className="panel">
          <h3 className="panelTitle">Why this project?</h3>
          <p className="panelText">
            To practice component structure, state-based navigation, clean UI and
            responsive layouts — without depending on a routing library.
          </p>
        </div>

        <div className="panel">
          <h3 className="panelTitle">Tech Stack</h3>
          <ul className="bullets">
            <li>React + Vite</li>
            <li>Component-based UI</li>
            <li>CSS responsive grid</li>
            <li>No extra UI libraries</li>
          </ul>
        </div>

        <div className="panel">
          <h3 className="panelTitle">Features</h3>
          <ul className="bullets">
            <li>Home / Profile / About pages</li>
            <li>Responsive layout</li>
            <li>Minimal clean design</li>
            <li>Fast and beginner-friendly</li>
          </ul>
        </div>

        <div className="panel">
          <h3 className="panelTitle">Next upgrades</h3>
          <ul className="bullets">
            <li>Persist selected page in localStorage</li>
            <li>Keyboard navigation</li>
            <li>URL sync without router</li>
          </ul>
        </div>
      </div>

      <div className="divider" />

      <div className="quoteBox">
        <p className="quote">
          “Keep projects small, clean, and finished. That’s how you actually
          learn.”
        </p>
        <p className="quoteAuthor">— simple rule</p>
      </div>
    </section>
  );
}
