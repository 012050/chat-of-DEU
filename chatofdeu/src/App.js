import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Menu from "../src/page/Menu";
import Building from "../src/page/Building";
import { setLanguage } from "./redux/store.js";

import { createTheme, Modal, ThemeProvider } from '@mui/material';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LanguageToggle from "./components/LanguageToggle";
import Header from "./components/Header";
import Translation from "./page/Translation";
import SchoolSchedule from "./page/SchoolSchedule";


function App() {
    let [nav, setNav] = useState(0);
    const languages = [
        {
            country: "ko",
            title:[
                "학식",
                "시설정보"
            ]
        },
        {
            country: "en",
            title:[
                "meals",
                "Building information"
            ]
           
        },
        {
            country: "ja",
            title:[
                "学食",
                "施設情報"
            ]
            
        },
        {
            country: "vi",
            title:[
                "Bữa ăn",
                "Thông tin về tòa nhà"
            ]
            
        },
        {
            country: "zh-CN",
            title:[
                "餐食",
                "建筑信息"
            ]
            
        },
    ]

    let language = useSelector((state) => state.language.value); //언어 정보
    let dispatch = useDispatch();


    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const languageSelection=(lang)=>{
        dispatch(setLanguage(lang.code));
        // setLanguage(lang.code)
        const number = languages.findIndex((element => element.country === lang.code))
        console.log(lang.code);
        setSelectedLanguage(languages[number])
    }
    let theme = createTheme({
        palette: {
            primary: {
                main: '#303030', // 원하는 주 색상을 지정합니다.
            },
        },
    });

    // useEffect(()=>{
    //     const number = languages.findIndex((element => element.country === language))
    //     setSelectedLanguage(languages[number])
    // },[language])

    return (
        <div className="App">
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
                    <BottomNavigationAction label={selectedLanguage.title[1]} component={Link} to="/translation" color="primary" />
                    <BottomNavigationAction label={selectedLanguage.title[1]} component={Link} to="/calendar" color="primary" />
                </BottomNavigation>
                <Routes>
                    <Route path="/" element={<Menu language={language}/>} />
                    <Route path="/building" element={<Building/>} />
                    <Route path="/translation" element={<Translation/>} />
                    <Route path="/calendar" element={<SchoolSchedule/>} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
