import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Courses from "./Courses";
import Home from "./Home";
import Register from "./Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/register" component={Register}></Route>
      </Switch>
    </BrowserRouter>
  );
}
