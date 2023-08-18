import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Menu from "../src/page/Menu";
import Facility from "../src/page/Facility";

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Menu/>} />
                <Route path="/facility" element={<Facility/>} />
            </Routes>
        </>
    );
}

export default App;
