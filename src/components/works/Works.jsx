import "./works.scss";
import Timeline from "./Timeline";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="worksContainer">
        <div className="projectDescriptionAbove">
          <ProjectOne />
          <ProjectThree />
        </div>
        <div>
          <Timeline />
        </div>
        <div className="projectDescriptionBelow">
          <div className="placeholderDiv"></div>
          <ProjectTwo />
          <div className="placeholderDiv"></div>
          <ProjectFour />
        </div>
      </div>
    </div>
  );
}
