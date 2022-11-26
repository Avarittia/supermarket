import Link from "next/link";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container fluid className="px-0">
      <Container
        fluid
        style={{ backgroundColor: "#333333", letterSpacing: "1.2px" }}
        className="px-0 text-light py-2"
      >
        <Container>
          <Row className="align-items-center justify-content-evenly text-center g-5">
            <Col sm={12} md={12} lg={6}>
              SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
              <Link
                href="#"
                style={{
                  color: "#fe9126",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                SHOP NOW
              </Link>
            </Col>
            <Col>
              <FaPhoneAlt /> Order online or call us : (+0123) 234 567
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Row className="align-items-center justify-content-evenly text-center g-4 py-4">
          <Col lg={4} md={6}>
            <h1 style={{ fontWeight: "bold", color: "#fe9126" }}>
              SUPER MARKET
            </h1>
          </Col>
          <Col lg={4} md={6} className="r">
            <Form
              className="d-flex align-items-center justify-content-center"
              style={{ width: "100%" }}
            >
              <Form.Control
                type="text"
                placeholder="Search Products"
                style={{ borderRadius: "0" }}
              />
              <Button
                style={{
                  backgroundColor: "#fe9126",
                  border: "#fe9126",
                  borderRadius: "0",
                }}
                className="ms-2"
              >
                <FaSearch />
              </Button>
            </Form>
          </Col>
          <Col
            lg={4}
            md={12}
            className="d-flex align-items-center justify-content-evenly"
          >
            <Link href="#">
              {" "}
              <Button
                style={{
                  backgroundColor: "#fe9126",
                  border: "#fe9126",
                  borderRadius: "0",
                }}
                className="ms-3"
              >
                SIGN UP
              </Button>
            </Link>
            <Link href="#">
              <Button
                style={{
                  backgroundColor: "#fe9126",
                  border: "#fe9126",
                  borderRadius: "0",
                }}
                className="ms-3"
              >
                SIGN IN
              </Button>
            </Link>
            <Link href="#">
              <Button
                style={{
                  width: "3rem",
                  height: "3rem",
                  position: "relative",
                  backgroundColor: "#fe9126",
                  border: "#fe9126",
                }}
                className="rounded-circle cart"
                variant="outline-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="cart-icon"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  3
                </div>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0 py-3">
        <nav className="">
            <ul className="nav-items mt-3">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">All Products</Link>
                </li>
                <li>
                    <Link href="/">Groceries</Link>
                </li>
                <li>
                    <Link href="/">Packaged Food</Link>
                </li>
                <li>
                    <Link href="/">Daily Necessity</Link>
                </li>
                <li>
                    <Link href="/">Offers</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </nav>
      </Container>
    </Container>
  );
};

export default Navigation;
