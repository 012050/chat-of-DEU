    import React, { useState } from "react";
    import { Routes, Route, useNavigate, Link } from "react-router-dom";

    import "./App.css";
    import Menu from "../src/page/Menu";
    import Facility from "../src/page/Facility";

    import { createTheme, ThemeProvider } from '@mui/material';
    import BottomNavigation from "@mui/material/BottomNavigation";
    import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LanguageToggle from "./components/LanguageToggle";

function App() {
    let [nav, setNav] = useState(0);
    let [lenguage, setLenguage] = useState("ko"); //언어

    let theme = createTheme({
        palette: {
          primary: {
            main: '#303030', // 원하는 주 색상을 지정합니다.
          },
        },
      });
    
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div class="title">DF&S</div>
                    <LanguageToggle/>
                <BottomNavigation
                    className="navBar"
                    showLabels
                    value={nav}
                    onChange={(event, newValue) => {
                    setNav(newValue);
                    }}
                >
                    <BottomNavigationAction label="학식" component={Link} to="/" color="primary"/>
                    <BottomNavigationAction label="시설 정보" component={Link} to="/facility" color="primary"/>
                </BottomNavigation>
                <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/facility" element={<Facility />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
    }

    export default App;
