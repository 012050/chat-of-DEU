import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import "./../css/Menu.css"



function Menu() {
    const restaurantName = [
        {
            country: "kr",
            restaurants: [
                "행복 기숙사",
                "효민 기숙사",
                "수덕전",
                "정보공학관",
                "국제관",
            ],
            mealTime:[
                "아침",
                "점심",
                "저녁"
            ]
        },
        {
            country: "en",
            restaurants: [
                "Haengbok dorm",
                "Hyomin dorm",
                "SuDeokjeon",
                "Information Engineering Building",
                "International Building",
            ],
            mealTime:[
                "BKFST",
                "Lunch",
                "Dinner"
            ]
        },
        {
            country: "jp",
            restaurants: [
                "ヘンボック寮",
                "ヒョミン寮",
                "スドックゼン",
                "情報工学館",
                "国際館",
            ],
            mealTime:[
                "朝ごはん",
                "昼ごはん",
                "晩ごはん"
            ]
        },
        {
            country: "vi",
            restaurants: [
                "Ký túc xá hạnh phúc",
                "Ký túc xá Hiếu Mẫn",
                "Tu Đức điện",
                "Nhà Khoa học thông tin",
                "Nhà Quốc tế",
            ],
            mealTime:[
                "Sáng",
                "Trưa",
                "Tối"
            ]
        },
        {
            country: "zh-CN",
            restaurants: [
                "幸福宿舍",
                "孝敏宿舍",
                "修德殿",
                "信息工程馆",
                "国际馆",
            ],
            mealTime:[
                "早上",
                "中午",
                "晚上"
            ]
        },
    ]

    let language = useSelector((state) => state.language.value); //언어 정보
    let dispatch = useDispatch();

    const [translatedData, setTranslatedData] = useState(restaurantName[0])

    let [data, setData] = useState([
        { restaurant: "행복 기숙사", meal: ["아침", "점심", "저녁"] },
        { restaurant: "효민 기숙사", meal: ["아침", "점심", "저녁"] },
        { restaurant: "수덕전", meal: ["아침", "점심", "저녁"] },
        { restaurant: "정보공학관", meal: ["아침", "점심", "저녁"] },
        { restaurant: "국제관", meal: ["아침", "점심", "저녁"] },
    ])

    // axios.post('http://minimalist.iptime.org:8080/translation/food', {
    //     data: `${language}`,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setData(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });


    useEffect(() => {
        const selectedLanguage = restaurantName.findIndex((element => element.country === language))
        setTranslatedData(restaurantName[selectedLanguage])
    }, [language])

    return (
        <div className="container">
            {data.map((r, i) => <MealCard i={i} data={data} translatedData={translatedData}/>)}
        </div>
    );
}
/**
 * 
 * @param data 식단 데이터
 * @param i 반복 인덱스
 * @returns 
 */
function MealCard({ data, i, translatedData }) {
    return (
        <div className="mealCard">
            <div className="mealDetail">
                <h3>{translatedData.restaurants[i]}</h3>
                <p><b>{translatedData.mealTime[0]}</b> : {data[i].meal[0]}</p>
                <p><b>{translatedData.mealTime[1]}</b> : {data[i].meal[1]}</p>
                <p><b>{translatedData.mealTime[2]}</b> : {data[i].meal[2]}</p>
            </div>
        </div>
    )
}

export default Menu;