import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      {menuOpen ? (
        <ul>
          <li>
            <a href="#intro" onClick={() => setMenuOpen(!menuOpen)}>
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(!menuOpen)}>
              Tech Skills
            </a>
          </li>
          <li>
            <a href="#works" onClick={() => setMenuOpen(!menuOpen)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#myStory" onClick={() => setMenuOpen(!menuOpen)}>
              My Story
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
              Contact
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
