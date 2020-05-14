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
        <Route
          path="/dashboard/search"
          exact
          render={(props) => <Dashboard search {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/hot"
          exact
          render={(props) => <Dashboard hot {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/liked"
          exact
          render={(props) => <Dashboard liked {...props}></Dashboard>}
        ></Route>
        <Route
          path="/dashboard/current"
          exact
          render={(props) => <Dashboard current {...props}></Dashboard>}
        ></Route>
        <Redirect to="/dashboard/hot"></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default App;
