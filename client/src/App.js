import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navbar";
import "bootswatch/dist/lux/bootstrap.min.css";

import Inicio from "./components/inicio";
import ProyectNew from "./components/ProyectNew";
import ProyectList from "./components/ProyectList";
import ProyectFind from "./components/ProyectFind";
import UserList from "./components/UserList";
import UserNew from "./components/UserNew";
import UserDelete from "./components/UserDelete";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/list-proyect" component={ProyectList} />
          <Route exact path="/new-proyect" component={ProyectNew} />
          <Route exact path="/find-proyect" component={ProyectFind} />
          <Route exact path="/list-user" component={UserList} />
          <Route exact path="/new-user" component={UserNew} />
          <Route exact path="/find-user" component={UserDelete} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
