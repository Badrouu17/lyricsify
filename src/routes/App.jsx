import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./../components/Dashboard";
import SmallDevices from "./../components/smallDevices";

const App = () => {
  return (
    <React.Fragment>
      <div className="app-content">
        <Switch>
          <Route
            path="/search"
            exact
            render={(props) => <Dashboard search {...props}></Dashboard>}
          ></Route>
          <Route
            path="/liked"
            exact
            render={(props) => <Dashboard liked {...props}></Dashboard>}
          ></Route>
          <Route
            path="/current"
            exact
            render={(props) => <Dashboard current {...props}></Dashboard>}
          ></Route>
          <Route
            path="/"
            exact
            render={(props) => <Dashboard hot {...props}></Dashboard>}
          ></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
      <SmallDevices></SmallDevices>
    </React.Fragment>
  );
};

export default App;
