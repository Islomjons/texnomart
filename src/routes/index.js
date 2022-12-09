import React from "react"
import { Route } from "react-router-dom"
import Home from "./home/Home";
import Pdp from "./pdp/Pdp";

let index = () => {
    return (
       <>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/pdp/:id">
            <Pdp />
        </Route>
       </>
    )
}

export default index