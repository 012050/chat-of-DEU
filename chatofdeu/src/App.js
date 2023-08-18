    import React from "react";
    import { Routes, Route } from "react-router-dom";

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
    
    return (
    <>
        <div class="header">
        <div class="title">Menu</div>
        </div>

        <Navi /> 
        <Routes>
        {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/facility" element={<Facility />} />
        </Routes>
    </>
    );
    }

    function Navi() {
        let [value, setValue] = React.useState(0);
    return <>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
    </>;
    }

    export default App;
