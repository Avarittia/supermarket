import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <Container
      fluid
      className="py-5 text-light mt-5"
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <Container>
        <Row className="py-5">
          <Col xs={12}  sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Contact</h3>
            <div style={{ color: "#efbe8a" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-3">
                  <FaMapMarkerAlt />{" "}
                  <span
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "500",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                  >
                    1234k Avenue, 4th block, New York City.
                  </span>
                </li>
                <li className="py-3">
                  <GrMail />{" "}
                  <span
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                  >
                    info@example.com
                  </span>
                </li>
                <li className="py-3">
                  <FaPhoneAlt />{" "}
                  <span
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "500",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    Image
                  >
                    +1234 567 567
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col  xs={12} sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Information</h3>
            <div style={{ color: "#efbe8a" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    {" "}
                    About Us
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Short Codes
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                    href="#"
                  >
                    FAQ's
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Special Products
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col  xs={12} sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Category</h3>
            <div style={{ color: "#efbe8a" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Groceries
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Household
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                    href="#"
                  >
                    Personal Care
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Packaged Food
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Beverages
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col  xs={12} sm={12} md={6} lg={3} className="g-2">
            <h3 className="text-start">Profile</h3>
            <div style={{ color: "#efbe8a" }}>
              <ul
                className="d-flex flex-column justify-content-center align-items-start ps-0 py-4"
                style={{ listStyle: "none" }}
              >
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    Store
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  <Link
                    href="#"
                    style={{
                      color: "#AFAFAF",
                      textDecoration: "none ",
                      fontWeight: "bold",
                      paddingLeft: ".9rem",
                      fontSize: "1rem",
                    }}
                    className="footer-link"
                  >
                    My Cart
                  </Link>
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  {/* {user ? (
                    <Link
                      style={{
                        color: "#AFAFAF",
                        textDecoration: "none ",
                        fontWeight: "bold",
                        paddingLeft: ".9rem",
                        fontSize: "1rem",
                      }}
                      className="footer-link"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      style={{
                        color: "#AFAFAF",
                        textDecoration: "none ",
                        fontWeight: "bold",
                        paddingLeft: ".9rem",
                        fontSize: "1rem",
                      }}
                      className="footer-link"
                      onClick={handleClick}
                    >
                      Login
                    </Link>
                  )} */}
                </li>
                <li className="py-2">
                  <FaArrowRight />
                  {/* {user ? null : (
                    <>
                      
                      <href
                        style={{
                          color: "#AFAFAF",
                          textDecoration: "none ",
                          fontWeight: "bold",
                          paddingLeft: ".9rem",
                          fontSize: "1rem",
                        }}
                        className="footer-link"
                      >
                        Create Account
                      </href>
                    </>
                  )} */}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
