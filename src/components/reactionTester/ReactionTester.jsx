import "./ReactionTester.scss";
import UnderConstruction from "./underConstruction.jpg";

export default function ReactionTester() {
  return (
    <div className="reactionTester" id="works">
      <img
        className="underConstruction"
        src={UnderConstruction}
        alt="under construction"
      />
    </div>
  );
}
