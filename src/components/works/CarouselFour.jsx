import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";

export default function CarouselPics() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/RollTheDice.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Roll the dice - Game</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/Homepage.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>My Homepage</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/react_logo_follow_soon.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>More Following soon</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
