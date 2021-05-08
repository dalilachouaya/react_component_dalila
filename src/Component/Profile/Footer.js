import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <footer className="m-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-4">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Checkpoint-React-Component By DALILA CH--
              <b>
                || All Rights Reserved
              </b>
            </p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
