import "./myStory.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import MyStoryText from "./MyStoryText";

export default function MyStory() {
  return (
    <div className="myStory" id="myStory">
      <div className="innerContent">
        <div className="myStoryLeft">
          <div className="story">
            <h2>“Paths are made by walking”</h2>
            <div className="storyParagraph">
              <p>
                <MyStoryText />
              </p>
            </div>
          </div>
        </div>
        <div className="myStoryRight">
          <div className="rightContent">
            <div className="containerIcons">
              <ArrowBackIosNewIcon className="iconstar1" />
              <ArrowBackIosNewIcon className="iconstar2" />
              <ArrowBackIosNewIcon className="iconstar3" />
              <ArrowBackIosNewIcon className="iconstar4" />
              <ArrowBackIosNewIcon className="iconstar5" />
              <ArrowBackIosNewIcon className="iconstar6" />
            </div>
            <div className="containerPic1">
              <div className="picOne"></div>
            </div>

            <div className="containerPic2">
              <div className="picTwo"></div>
            </div>
            <div className="containerBBall">
              <SportsBasketballIcon className="bBall" />
              <SportsBasketballIcon className="bBall" />
              <SportsBasketballIcon className="bBall" />
              <SportsBasketballIcon className="bBall4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
