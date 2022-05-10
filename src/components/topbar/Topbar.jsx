import "./topbar.scss";
import ComputerIcon from "@material-ui/icons/Computer";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a
            href="#intro"
            className="logo"
            onClick={() => setMenuOpen(menuOpen ? !menuOpen : "")}
          >
            kri
            <ComputerIcon className="logoIcon" />
            dev
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <KeyboardHideIcon className="hamburgerIcon" />
            {!menuOpen ? <span className="more">MORE</span> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
