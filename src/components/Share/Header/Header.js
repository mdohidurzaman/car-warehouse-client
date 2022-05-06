import React from "react";
import logo from "../../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              {user ? (
                <Nav>
                  <Nav.Link as={Link} to="/manageitems">
                    Mansge Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myitems">
                    My Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add">
                    Add Item
                  </Nav.Link>

                  <button
                    className="btn btn-link text-black text-decoration-none"
                    onClick={handleSignOut}
                  >
                    Signout
                  </button>
                </Nav>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
