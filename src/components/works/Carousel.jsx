import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";

export default function CarouselPics() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/bbc_front_page_clone.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BBC front page Clone</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/Bootstrap_exercise.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Landing page - Bootstrap exercise</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/museum_of_candy_4.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Landing page - Bootstrap exercise 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
