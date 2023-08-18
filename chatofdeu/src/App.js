    import React from "react";
    import { Routes, Route, useNavigate, Link } from "react-router-dom";

    import "./App.css";
    import Menu from "../src/page/Menu";
    import Facility from "../src/page/Facility";

    import BottomNavigation from "@mui/material/BottomNavigation";
    import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function App() {
    let [value, setValue] = React.useState(0);
    let navigate = useNavigate();
    
    return (
        <div className="App">
        <div class="header">
            <div class="title">DF&S</div>
        </div>

        <BottomNavigation
            className="navBar"
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label="학식" component={Link} to="/" />
            <BottomNavigationAction label="시설 정보" component={Link} to="/facility" />
        </BottomNavigation>
        <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/facility" element={<Facility />} />
        </Routes>
    </div>
    );
    }

    export default App;
