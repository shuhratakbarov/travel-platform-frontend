import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/client/components/home/Home";
import Tours from "../pages/client/components/tour/Tours";
import Login from "../pages/login/Login";
import Banks from "../pages/client/components/bank/Banks";
import Monuments from "../pages/client/components/historical/Monuments";
import Hotels from "../pages/client/components/hotel/Hotels";
import Hospital from "../pages/client/components/hospital/Hospital";
import Restaurants from "../pages/client/components/restaurant/Restaurants";
import Shops from "../pages/client/components/shop/Shops";
import TransportMain from "../pages/client/components/transport/TransportMain";
import About from "../pages/client/components/about/About";
import Contact from "../pages/client/components/contact/Contact";
import {
        ABOUT,
        BANK, CONTACT,
        HOME,
        HOSPITAL,
        HOTEL,
        LOGIN,
        MONUMENT,
        RESTAURANT,
        SHOP,
        TOUR,
        TRANSPORT
} from "../const/config-client";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={HOME}/>} />
            <Route path={HOME} element={<Home/>} />
            <Route path={TOUR} element={<Tours/>} />
            <Route path={LOGIN} element={<Login/>} />
            <Route path={BANK} element={<Banks/>} />
            <Route path={MONUMENT} element={<Monuments/>} />
            <Route path={HOTEL} element={<Hotels/>} />
            <Route path={HOSPITAL} element={<Hospital/>} />
            <Route path={RESTAURANT} element={<Restaurants/>} />
            <Route path={SHOP} element={<Shops/>} />
            <Route path={TRANSPORT} element={<TransportMain/>} />
            <Route path={ABOUT} element={<About/>} />
            <Route path={CONTACT} element={<Contact/>} />
        </Routes>
    )
}

export default Routers