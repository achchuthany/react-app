import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RegistrationAddress from "./registrationAddress";
import RegistrationPersonal from "./registrationPersonal";
import RegistrationMenu from "./registrationMenu";
class RegistrationIndex extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Router basename="/registration">
              <RegistrationMenu />
              <Switch>
                <Route path="/personal">
                  <RegistrationPersonal />
                </Route>
                <Route path="/address">
                  <RegistrationAddress />
                </Route>
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegistrationIndex;
