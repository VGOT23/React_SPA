import NavButton from "./Navbutton";

export default function Navbar({ page, setPage }) {
  return (
    <header className="navbar">
      <div className="brand">My SPA</div>

      <nav className="navlinks">
        <NavButton
          label="Home"
          active={page === "home"}
          onClick={() => setPage("home")}
        />
        <NavButton
          label="Profile"
          active={page === "profile"}
          onClick={() => setPage("profile")}
        />
        <NavButton
          label="About"
          active={page === "about"}
          onClick={() => setPage("about")}
        />
      </nav>
    </header>
  );
}
