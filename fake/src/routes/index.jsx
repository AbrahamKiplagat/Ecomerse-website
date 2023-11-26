import React,{Suspense} from "react";
import LogIn from "../components/LogIn"
import {Outlet,BrowserRouter, Route,Routes,Navigate} from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart"
import NavbarHOC from "../components/NavbarHOC"


function Navs(){
    const auth = localStorage.getItem("token");

    function PrivateRoute(){
        return auth ?(<Outlet/>):(<Navigate to="/"/>)
    }
    return(
        <Suspense fallback={<div>Loading.....</div>}>
            <BrowserRouter>
            <Routes>
                {/* <Route path="/" element ={<LogIn/>}/> */}
                {/* <Route element={<PrivateRoute/>}> */}
                    <Route path="/" element={
                        <NavbarHOC><Home/></NavbarHOC>
                    }/>
                    <Route path="/cart" element={
                        <NavbarHOC><Cart/></NavbarHOC>
                    }/>
                {/* </Route> */}
            </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default Navs;