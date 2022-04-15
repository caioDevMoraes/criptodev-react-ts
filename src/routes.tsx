import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Err from "./views/Err"
import Home from "./views/Home"
import Contact from "./views/Contact"

const Router: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <Err/> }/>
                <Route path="/" element={ <Home/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router