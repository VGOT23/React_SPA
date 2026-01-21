export default function NavButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`navbtn ${active ? "navbtn-active" : ""}`}
    >
      {label}
    </button>
  );
}
