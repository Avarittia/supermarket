import React from "react";
import { Container } from "react-bootstrap";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineDribbble } from "react-icons/ai";
import { TiSocialVimeoCircular, TiSocialTwitterCircular } from "react-icons/ti";
import card from "../Assets/images/card.png";
import Link from "next/link";
import Image from "next/image";


const Footerbottom = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-between align-items-center py-2 px-5 footer-bottom"
      style={{ backgroundColor: "#333333" }}
    >
      <div
        style={{ fontSize: "2rem" }}
        className="d-flex justify-content-evenly align-items-center"
      >
        <Link style={{ fontSize: "41px", color: "white" }} href="#">
          <RiFacebookCircleLine />
        </Link>
        <Link style={{ fontSize: "47px", color: "white" }} href="#">
          <TiSocialTwitterCircular />
        </Link>
        <Link style={{ fontSize: "41px", color: "white" }} href="#">
          <AiOutlineDribbble />
        </Link>
        <Link style={{ fontSize: "47px", color: "white" }} href="#">
          <TiSocialVimeoCircular />
        </Link>
      </div>
      <div>
        <Image src={card} alt="/" className="img-fluid"/>
      </div>
    </Container>
  );
};

export default Footerbottom;
