import "./projectTwo.scss";
import CarouselPics from "./CarouselTwo";

export default function ProjectTwo() {
  return (
    <div className="project2">
      <div className="header">
        <h4>October 2021</h4>
        <p>JS Games and YelpCamp App</p>
      </div>
      <CarouselPics />
      <div className="projectsToolsPics2">
        <img src="images/bootstrap_logo.png" alt="" />
        <img src="images/JS_logo.png" alt="" />
        <img
          className="projectsToolsPicsBigger"
          src="images/nodejs_logo.png"
          alt=""
        />
        <img
          className="projectsToolsPicsBigger"
          src="images/mongo_logo.png"
          alt=""
        />
      </div>
    </div>
  );
}
