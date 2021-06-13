//Import dependences
import { Switch, Redirect, Route } from 'react-router-dom';
import {
    home as HomeView,
} from "./views"

import React from 'react';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route path="/home" component={HomeView}/>
        </Switch>
    )
}

export default Routes;