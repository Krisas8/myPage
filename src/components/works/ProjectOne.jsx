import "./projectOne.scss";
import CarouselPics from "./Carousel";

export default function ProjectOne() {
  return (
    <div className="project1">
      <div className="header">
        <h4>July 2021</h4>
        <p>static show pages</p>
      </div>
      <div className="Carousel">
        <CarouselPics />
      </div>
      <div className="projectsToolsPics1">
        <img src="images/html_logo.png" alt="" />
        <img src="images/css_logo.png" alt="" />
        <img src="images/bootstrap_logo.png" alt="" />
        <img src="images/JS_logo.png" alt="" />
      </div>
    </div>
  );
}
