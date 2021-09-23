import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Data from './data';
import Home from './home';
export default function Admin(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Home}></Route>
                <Route exact path = "/moneyball@2607/crypto101" component = {Data}></Route>
            </Switch>
        </BrowserRouter>
    )
}