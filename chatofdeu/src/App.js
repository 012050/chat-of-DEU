import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Menu from "../src/page/Menu";
import Facility from "../src/page/Facility";
import { func } from "prop-types";

function App() {
  return (
    <>
      <div class="header">
        <div class="title">Menu</div>
      </div>
        <Navi/>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
    </>
  );
}

function Navi() {
  return (
    <div className="navBar">
      <div class="indicators">
        <div id="i1">
          <div class="navi-indicator" id="ni1"></div>
        </div>
        <div id="i2">
          <div class="navi-indicator" id="ni2"></div>
        </div>
      </div>
      <div class="navi">
        <div class="navi-item1">
          <button class="nav-button" id="startersbutton">
            <div class="navi-icon">
              <i class="fas fa-seedling"></i>
            </div>
            <div class="navi-text">Starters</div>
          </button>
        </div>
        <div class="navi-item2">
          <button class="nav-button" id="mainsbutton">
            <div class="navi-icon">
              <i class="fas fa-pizza-slice"></i>
            </div>
            <div class="navi-text">Mains</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
