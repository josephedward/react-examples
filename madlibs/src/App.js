import React from "react";
import { BrowserRouter as Router, Switch, Route, 
    // Link
 } from "react-router-dom";
// import Calculator from "./Calculator";
// import Test from "../Test"
import Libmad from "./Libmad";


export default function App(){
return(
    <Router>
        <Switch>
            {/* <Route exact path="/calculator" component={Calculator}/> */}
            <Route exact path="/libmad" component={Libmad}/>
            {/* <Route exact path="/test" component={Test}/> */}
        </Switch>
    </Router>)
}