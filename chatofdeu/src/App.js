    import React from "react";
    import { Routes, Route, useNavigate, Link } from "react-router-dom";

    import "./App.css";
    import Menu from "../src/page/Menu";
    import Facility from "../src/page/Facility";

    import Box from "@mui/material/Box";
    import BottomNavigation from "@mui/material/BottomNavigation";
    import BottomNavigationAction from "@mui/material/BottomNavigationAction";
    import RestoreIcon from "@mui/icons-material/Restore";
    import FavoriteIcon from "@mui/icons-material/Favorite";
    import LocationOnIcon from "@mui/icons-material/LocationOn";

function App() {
    let [value, setValue] = React.useState(0);
    let navigate = useNavigate();
    
    return (
    <>
        <div class="header">
        <div class="title">Menu</div>
        </div>

        <BottomNavigation
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
        {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/facility" element={<Facility />} />
        </Routes>
    </>
    );
    }

    export default App;
