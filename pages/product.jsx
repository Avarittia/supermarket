import Link from "next/link";
import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import Datamapping from "../components/Datamapping";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import StoreContext from "../context/StoreContext";

const product = () => {
  const { products, loading } = useContext(StoreContext);



  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <>
        <Container
          fluid
          className="py-4 px-0"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <Container className="">
            <Link
              style={{
                fontSize: "1rem",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#3399cc",
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
        <Container>
          <Row className="px-0 g-5 mx-0">
            <Col lg={4} md={12} sm={12} className="px-5 g-3">
              <Sidebar />
            </Col>

            <Col lg={8} md={12} sm={12} className="p-0">
              <select
                className="form-select ms-auto"
                id="floatingSelect"
                aria-label="Floating label select example"
                style={{ width: "300px", borderRadius: "0", marginTop:"1.5rem" }}
                onChange={(e) => {
                  const selectedProducts = e.target.value;
                  setProductPerPage(selectedProducts);
                }}
              >
                <option value="9" defaultValue={9}>
                  items on page: 9
                </option>
                <option value="32">items on page: 32</option>
                <option value="64">items on page: 64</option>
                <option value="107">Display all items</option>
              </select>
              <Datamapping products={currentProduct} loading={loading} />
              <Pagination
                productPerPage={productPerPage}
                totalProducts={products.length}
                paginate={paginate}
              />
            </Col>
          </Row>
        </Container>
      </>
    </>
  );
};

export default product;
