import React from "react";
import './Reset.scss'
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../containers/Header";
import MainPage from "../containers/MainPage";
import RegisterUser from "../containers/RegisterUser";
import Basket from "../containers/Basket";
import AboutPhone from "../containers/AboutPhone";
import Profile from "../containers/Profile";

import Footer from "./Footer";



const App = () => {

    return (
        <>
            <Header />
            <Switch>
                <Route path={'/'} component={MainPage} exact />
                <Route path={'/login'} component={RegisterUser} />
                <Route path={'/basket'} component={Basket} />
                <Route path={'/aboutPhone'} component={AboutPhone} />
                <Route path={'/profile'} component={Profile} />
                <Redirect to={'/'} />
            </Switch>
            <Footer />
        </>
    )
}
export default App;