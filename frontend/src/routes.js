import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Login from './pages/Login'

import Dashboard from './pages/Dashboard'

import New from './pages/New'


export default function Routes() {
    // route retorna todas as rotas de uma vez 
    // switch serve para garantir que uma rota sera exibida por vez
    return (
        <BrowserRouter>  
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    )
}

