import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";

const helloWorld = () => <div>Hello World!</div>;
const helloReact = () => <div>Hello React!</div>;

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/react" component={helloReact} />
          <Route path="/" component={helloWorld} />
        </Switch>
        <br />
        <h5>Complex Micro-FrontEnd in React</h5>
        <Link to="/react">**Hello React</Link>
        <br />
        <Link to="/">Hello World</Link>
      </Router>
    </div>
  );
};
