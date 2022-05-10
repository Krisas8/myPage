import { Grid } from "@material-ui/core";
import ProjectFour from "./ProjectFour";
import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";
import "./worksSmallWindow.scss";

export default function WorksSmall() {
  return (
    <div className="container">
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
    </div>
  );
}
