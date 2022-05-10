import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import MyStory from "./components/myStory/MyStory";
import Contact from "./components/contact/Contact";
import ReactionTester from "./components/reactionTester/ReactionTester";
import "./app.scss";
import { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import WorksSmallWindow from "./components/works/worksSmallWindow";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const checkRender = () => {
    if (width < 1100) {
      setSmall(true);
    } else setSmall(false);
  };

  useEffect(() => {
    checkRender();
    function handleResize() {
      setWidth(window.innerWidth);
      checkRender();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {small ? <WorksSmallWindow /> : <Works />}
        <ReactionTester />
        <MyStory />
        <Contact />
      </div>
    </div>
  );
}

export default App;
