import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <iframe
          title="404 Status Doggo"
          src="https://httpstatusdogs.com/img/404.jpg"
          style={{ height: "500px", width: "630px", textAlign: "center" }}
        ></iframe>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
