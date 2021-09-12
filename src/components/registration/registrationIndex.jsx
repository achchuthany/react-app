import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import RegistrationAddress from "./registrationAddress";
import RegistrationPersonal from "./registrationPersonal";
import RegistrationMenu from "./registrationMenu";
const RegistrationIndex = () => {
  let { path } = useRouteMatch();
  return (
    <Container>
      <RegistrationMenu />
      <Switch>
        <Redirect exact from={path} to={`${path}/personal`} />
        <Route path={`${path}/personal`}>
          <RegistrationPersonal />
        </Route>
        <Route path={`${path}/address`}>
          <RegistrationAddress />
        </Route>
      </Switch>
    </Container>
  );
};

export default RegistrationIndex;
