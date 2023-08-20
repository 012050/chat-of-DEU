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
    let [nav, setNav] = useState(0); //하단 네비게이션 바

    let language = useSelector((state) => state.language.value); //선택 언어
    let dispatch = useDispatch(); //redux dispatch

    //텍스트 언어 데이터
    const languages = [ 
        {
            country: "ko",
            title:[
                "학식",
                "시설정보",
                "번역",
                "학사일정"
            ]
        },
        {
            country: "en",
            title:[
                "meals",
                "Building information",
                "Translator",
                "School Schedule",
            ]
           
        },
        {
            country: "ja",
            title:[
                "学食",
                "施設情報",
                "翻訳",
                "学校日程"


            ]
            
        },
        {
            country: "vi",
            title:[
                "Bữa ăn",
                "Thông tin về tòa nhà",
                "Dịch",
                "Lịch học tập"
            ]
            
        },
        {
            country: "zh-CN",
            title:[
                "餐食",
                "建筑信息",
                "翻译",
                "学术日程"

            ]
            
        },
    ]

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); //기본값: 한국어

    let theme = createTheme({ //색상 테마
        palette: {
            primary: {
                main: '#303030', // 주 색상
            },
        },
    });

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Header languageSelection={languageSelection}/>

                {/* 하단 네비게이션 바 */}
                <BottomNavigation
                    className="navBar"
                    showLabels
                    value={nav}
                    onChange={(event, newValue) => {
                        setNav(newValue); //하단 네비게이션 바 설정
                    }}
                >
                    <BottomNavigationAction label={selectedLanguage.title[0]} component={Link} to="/" color="primary" />
                    <BottomNavigationAction label={selectedLanguage.title[1]} component={Link} to="/building" color="primary" />
                    <BottomNavigationAction label={selectedLanguage.title[2]} component={Link} to="/translation" color="primary" />
                    <BottomNavigationAction label={selectedLanguage.title[3]} component={Link} to="/calendar" color="primary" />
                </BottomNavigation>

                {/* 페이지 라우팅 */}
                <Routes>
                    <Route path="/" element={<Menu/>} />
                    <Route path="/building" element={<Building/>} />
                    <Route path="/translation" element={<Translation/>} />
                    <Route path="/calendar" element={<SchoolSchedule/>} />
                </Routes>
                
            </ThemeProvider>
        </div>
    );

/**
 * 언어 선택
 * @param {lang} lang 선택 언어
 */
    function languageSelection(lang){
        dispatch(setLanguage(lang.code));
        const number = languages.findIndex((element => element.country === lang.code))
        setSelectedLanguage(languages[number])
    }
}

export default App;
