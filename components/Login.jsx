import Link from "next/link";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { useSignin } from "../context/useSignin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin, error, isLoading } = useSignin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(email, password);
  };

  return (
    <Container fluid className="px-0">
      <Container
        fluid
        className="py-4 px-0"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Container className="">
          <Link
            href="/"
            style={{
              fontSize: "1rem",
              textDecoration: "none",
              fontWeight: "bold",
              color: "#3399cc",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>
              <FaHome />
            </span>{" "}
            <span className="px-1 pt-1">Home</span>
          </Link>
          {"/"}
          <span className="px-2" style={{ fontSize: "1rem" }}>
            Login
          </span>
        </Container>
      </Container>
      <Container className="d-flex justify-content-center text-align-center">
        <section className="mt-5">
          <form onSubmit={handleSubmit} className="">
            <h2 style={{ color: "#fe9126", fontWeight: "500" }}>Sign In</h2>
            {error && <div className="errmsg">{error}</div>}
            <label htmlFor="email" style={{ fontWeight: "500" }}>
              Email:
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-100"
              style={{ height: "40px" }}
              placeholder="Email Adress"
              id="email"
            />
            <label htmlFor="password" style={{ fontWeight: "500" }}>
              Password:
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-100"
              placeholder="Password"
              style={{ height: "40px" }}
              id="password"
              autoComplete="off"
            />
            <button
              className="w-100 login-btn"
              style={{
                backgroundColor: "#3399cc",
                border: "none",
                height: "40px",
                color: "white",
              }}
              disabled={isLoading}
            >
              Sign In
            </button>
            <Link
              href="#"
              style={{
                fontWeight: "500",
                color: "#3399cc",
                textDecoration: "none",
                fontSize: "500",
              }}
              to="/forgetpassword"
            >
              Forgot Password ?
            </Link>
            Don't have an Account ?{" "}
            <Link
              href="/register"
              style={{
                color: "#3399cc",
                textDecoration: "none",
                fontSize: "500",
              }}
            >
              Sign Up
            </Link>
          </form>
        </section>
      </Container>
    </Container>
  );
};

export default Login;
