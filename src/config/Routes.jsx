import React from "react";
import { Route, Switch  } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                exact
                component={Catalog}
            />

            

            <Route
                path='/:category/:id'
                exact
                component={Detail}
            />

            <Route
                path='/:category'
                exact
                component={Catalog}
            />

            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;