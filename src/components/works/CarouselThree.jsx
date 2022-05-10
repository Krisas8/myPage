import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";

export default function CarouselPics() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/postman_access_token.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Postman get access token</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/postman_order_request.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Postman post order</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/jira_roadmap.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Jira Roadmap - Test Project user stories</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/works/Trello.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Trello - Sign up scenarios</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
