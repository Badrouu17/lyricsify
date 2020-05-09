import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./../components/Dashboard";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/dashboard"
          exact
          render={(props) => <Dashboard {...props}></Dashboard>}
        ></Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default App;
