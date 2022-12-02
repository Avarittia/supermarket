import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

const id = () => {
  const router = useRouter();
  const { id } = router.query;

  const url = `https://uat.ordering-farmshop.ekbana.net/api/v4/product/${id}`;

  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(singleProduct);

  useEffect(() => {
    axios
      .get(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
          "Warehouse-Id": "1",
        },
      })
      .then((res) => {
        setLoading(false);
        setSingleProduct(res.data.data);
      });
  }, []);

  if (loading) {
    return <>loading...</>;
  }
  return (
    <>
      <Container className="p-5">
        <Container className="d-flex justify-content-center align-items-center flex-column">
          <div className="border">
            <Image
              src={singleProduct.images[0].imageName}
              width="500"
              height="500"
              className="img-fluid"
              alt="/"
            />
          </div>
          <div>
            <h4 className="py-3">Name: {singleProduct.title}</h4>
            <h4 className="py-3">Category: {singleProduct.categoryTitle}</h4>
            <h4 className="py-3">
              Price: $ {singleProduct.unitPrice[0].sellingPrice}
            </h4>
            <Button
              className="w-100 add-cart-button"
              style={{
                backgroundColor: "#3399cc",
                border: "none",
                borderRadius: "0",
              }}
            >
              Add to Cart
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default id;
