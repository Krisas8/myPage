import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";

export default function CarouselPics() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/Snake.gif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Snake Game</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/NBA_memory.gif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>NBA Memory Game</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/Rock_Scissors_Paper.gif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Rock, Scissors, Paper - Game</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/YelpCamp_LandingPage.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>YelpCamp Clone - Sign/Login, Auth</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/YelpCamp_Review.png"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>YelpCamp Campgrounds - Review</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
