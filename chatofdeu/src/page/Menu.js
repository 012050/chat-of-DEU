import { useEffect, useState } from "react";
import "./../css/Menu.css"

const restaurantName = [
    {
        country: "KR",
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
        country: "EN",
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
        country: "JP",
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
        country: "VN",
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
        country: "CN",
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

function Menu(props) {
    const [translatedData, setTranslatedData] = useState(restaurantName[0])
    let [data, setData] = useState([
        { restaurant: "행복 기숙사", meal: ["아침", "점심", "저녁"] },
        { restaurant: "효민 기숙사", meal: ["아침", "점심", "저녁"] },
        { restaurant: "수덕전", meal: ["아침", "점심", "저녁"] },
        { restaurant: "정보공학관", meal: ["아침", "점심", "저녁"] },
        { restaurant: "국제관", meal: ["아침", "점심", "저녁"] },
    ])
    useEffect(() => {
        const selectedLanguage = restaurantName.findIndex((element => element.country === props.language))
        setTranslatedData(restaurantName[selectedLanguage])
    }, [props.language])
    return (
        <div className="container">
            {data.map((r, i) => <MealCard i={i} data={data} translatedData={translatedData}/>)}
        </div>
    );
}

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