import React from "react";
import { Carousel, Container } from "react-bootstrap";
import image1 from "../Assets/images/b1.jpg"
import image2 from "../Assets/images/banner.jpg"
import Image from "next/image";
Image

const Carousel2 = () => {
  return (
    <Container fluid className="px-0 py-5 mt-5">
      <Carousel indicators={true} controls={true} className="mb-5">
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={image2}
            alt="First slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={image1}
            alt="Second slide"
            style={{ height: "500px", objectFit: "cover" }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={image2}
            alt="Third slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carousel2;
