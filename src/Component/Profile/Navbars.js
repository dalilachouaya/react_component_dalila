import React from "react";
import { Nav, Navbar } from "react-bootstrap";
function Navbars() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="/Images/logo.png"
            alt="logo"
            style={{ height: "100px", marginLeft: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#dalila">HOME</Nav.Link>
            <Nav.Link href="#address">CONTACT</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navbars;
/***************
 *
 */
