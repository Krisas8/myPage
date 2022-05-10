import "./projectThree.scss";
import CarouselPics from "./CarouselThree";

export default function ProjectThree() {
  return (
    <div className="project3">
      <div className="header">
        <h4>December 2021</h4>
        <p>Software Testing</p>
      </div>
      <div className="Carousel">
        <CarouselPics />
      </div>
      <div className="projectsToolsPics3">
        <img src="images/postman_logo.png" alt="" />
        <img className="jiraPic" src="images/jira_logo.png" alt="" />
        <img className="trelloPic" src="images/trello_logo.png" alt="" />
      </div>
    </div>
  );
}
