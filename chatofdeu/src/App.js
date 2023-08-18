import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

import "./App.css";
import Menu from "../src/page/Menu";
import Building from "../src/page/Building";

import { createTheme, Modal, ThemeProvider } from '@mui/material';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LanguageToggle from "./components/LanguageToggle";
import Header from "./components/Header";


let theme = createTheme({
    palette: {
        primary: {
            main: '#303030', // 원하는 주 색상을 지정합니다.
        },
    },
});

const languages = [
    {
        country: "KR",
        title:[
            "학식",
            "시설정보"
        ]
    },
    {
        country: "EN",
        title:[
            "meals",
            "Building information"
        ]
       
    },
    {
        country: "JP",
        title:[
            "学食",
            "施設情報"
        ]
        
    },
    {
        country: "VN",
        title:[
            "Bữa ăn",
            "Thông tin về tòa nhà"
        ]
        
    },
    {
        country: "CN",
        title:[
            "餐食",
            "建筑信息"
        ]
        
    },
]


function App() {
    let [nav, setNav] = useState(0);
    let [language, setLanguage] = useState("KR"); //언어
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const languageSelection=(lang)=>{
        setLanguage(lang.code)
        const number = languages.findIndex((element => element.country === lang.code))
        setSelectedLanguage(languages[number])
    }
    

    return (
        <div className="App">
            {/* <ModalForPopup/> */}
            <ThemeProvider theme={theme}>
                <Header languageSelection={languageSelection}/>
                <BottomNavigation
                    className="navBar"
                    showLabels
                    value={nav}
                    onChange={(event, newValue) => {
                        setNav(newValue);
                    }}
                >
                    <BottomNavigationAction label={selectedLanguage.title[0]} component={Link} to="/" color="primary" />
                    <BottomNavigationAction label={selectedLanguage.title[1]} component={Link} to="/building" color="primary" />
                </BottomNavigation>
                <Routes>
                    <Route path="/" element={<Menu language={language}/>} />
                    <Route path="/building" element={<Building/>} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
