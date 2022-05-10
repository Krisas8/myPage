import "./projectFour.scss";
import CarouselPics from "./CarouselFour";

export default function ProjectFour() {
  return (
    <div className="project4">
      <div className="header">
        <h4>Januar 2022</h4>
        <p>React apps</p>
      </div>
      <div className="Carousel">
        <CarouselPics />
      </div>
      <div className="projectsToolsPics4">
        <img src="images/react_logo.png" alt="" />
        <img src="images/sass_logo.png" alt="" />
        <img src="images/materialUi_logo.png" alt="" />
      </div>
    </div>
  );
}
