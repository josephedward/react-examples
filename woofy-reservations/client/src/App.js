import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Reservations from "./pages/Reservations";
import Detail from "./pages/ReservationDetail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import WoofyMap from "./pages/WoofyMap";
import Home from "./pages/Home";
import WpBlog from "./pages/WpBlog";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "./pages/ProfilePage"
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";


function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Router history={history}>
        <div>
          <Nav />
          <Switch>
          
            <Route exact path="/" component={Home} /> 
            <Route exact path="/reservations" component={Reservations} />
            <Route exact path="/reservations/:id" component={Detail} />
            <Route exact path="/woofymap" component={WoofyMap} />
            <Route exact path="/wpblog" component={WpBlog} />
            <PrivateRoute exact path="/userprofile" component={ProfilePage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
