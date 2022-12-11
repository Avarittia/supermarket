import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import StoreContext from "../context/StoreContext";

const category = () => {
  const { products, loading } = useContext(StoreContext);

  console.log(products);
  const router = useRouter();
  const { category } = router.query;

  const filter = products.filter(
    (items) => items.categorySlug.toLowerCase() === category
  );

  if (loading) {
    return (
      <>
        <Container
          fluid
          className="py-4 px-0"
          style={{ backgroundColor: "#1f1f1f" }}
        >
          <Container className="">
            <Link
              style={{
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#efbe8a",
              }}
              href="#"
            >
              <span style={{ fontSize: "1.2rem" }}>
                <FaHome />
              </span>{" "}
              <span className="px-1 pt-1">Home</span>
            </Link>
            {"/"}
            <span className="px-2" style={{ fontSize: "1rem" }}>
              Products
            </span>
          </Container>
        </Container>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Container
        fluid
        className="py-4 px-0"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <Container className="">
          <Link
            style={{
              fontSize: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#efbe8a",
            }}
            href="#"
          >
            <span style={{ fontSize: "1.2rem" }}>
              <FaHome />
            </span>{" "}
            <span className="px-1 pt-1">Home</span>
          </Link>
          {"/"}
          <span className="px-2" style={{ fontSize: "1rem" }}>
            {category}
          </span>
        </Container>
      </Container>
      <Container>
        <Row fluid className="px-0 g-5">
          <Col lg={4} md={12} sm={12} className="px-5 g-3">
            <Sidebar />
          </Col>

          <Col lg={8} md={12} sm={12} className="p-3">
            <Row>
              {filter.map((items) => {
                return (
                  <Col
                    lg={4}
                    md={6}
                    sm={12}
                    className="g-5 px-4"
                    key={items.id}
                  >
                    <Card
                      style={{
                        height: "350px",
                        gap: "2rem",
                        borderRadius: "0",
                        background: "#3d3d3d",
                        border:"1px solid #bfbfbf"
                      }}
                      className="d-flex flex-column justify-content-center align-items-center py-3 card product-card"
                    >
                      <Link href={"/product/" + items.id}>
                        {" "}
                        <Card.Img
                          variant="top"
                          src={items.images[0].imageName}
                          height="150px"
                          width="150px"
                          style={{
                            objectFit: "cover",
                            width: "150px",
                            background: "#3d3d3d !important",
                            borderRadius:"0"
                          }}
                        />
                      </Link>

                      <Card.Body style={{ width: "100%" }}>
                        <Card.Title
                          className="text-center"
                          style={{ fontSize: ".9rem", fontWeight: "500" }}
                        >
                          {items.title}
                        </Card.Title>
                        <Card.Title
                          className="text-center mb-2"
                          style={{ fontSize: "1.1rem", fontWeight: "500" }}
                        >
                          <span>$</span>
                          <span>{items.unitPrice[0].sellingPrice}</span>
                        </Card.Title>
                        <div className="mt-auto">
                          <Button
                            className="w-100 add-cart-button"
                            style={{
                              backgroundColor: "#5a5959",
                              border: "none",
                              borderRadius: "0",
                            }}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default category;
