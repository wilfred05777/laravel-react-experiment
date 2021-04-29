import React from "react";
import ReactDOM from "react";
import "./fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./dashboard";
import createPosts from "./createPosts";
import EditPosts from "./EditPosts";
import "../../css/app.css";

function Example() {
    return (
        <Router>
            <>
                <Switch>
                    <Router path="/dashboard" exact component={dashboard} />
                    <Router path="/addPosts" exact component={createPosts} />
                    <Router path="/edit/:id" exact component={EditPosts} />
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
