import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import "./../css/Menu.css"


/**
 * @returns 학식 식단 페이지
 */
function Menu() {
    //텍스트 언어 데이터
    const restaurantName = [
        {
            country: "ko",
            restaurant: [
                "효민 기숙사",
                "행복 기숙사",
                "수덕전",
                "정보공학관",
            ],
            mealTime:[
                "아침",
                "점심",
                "저녁"
            ]
        },
        {
            country: "en",
            restaurant: [
                "Hyomin dorm",
                "Haengbok dorm",
                "SuDeokjeon",
                "Information Engineering Building",
            ],
            mealTime:[
                "BKFST",
                "Lunch",
                "Dinner"
            ]
        },
        {
            country: "ja",
            restaurant: [
                "ヒョミン寮",
                "ヘンボック寮",
                "スドックゼン",
                "情報工学館",
            ],
            mealTime:[
                "朝ごはん",
                "昼ごはん",
                "晩ごはん"
            ]
        },
        {
            country: "vi",
            restaurant: [
                "Ký túc xá Hiếu Mẫn",
                "Ký túc xá hạnh phúc",
                "Tu Đức điện",
                "Nhà Khoa học thông tin",
            ],
            mealTime:[
                "Sáng",
                "Trưa",
                "Tối"
            ]
        },
        {
            country: "zh-CN",
            restaurant: [
                "孝敏宿舍",
                "幸福宿舍",
                "修德殿",
                "信息工程馆",
            ],
            mealTime:[
                "早上",
                "中午",
                "晚上"
            ]
        },
    ]

    let language = useSelector((state) => state.language.value); //선택 언어
    let dispatch = useDispatch(); //redux dispatch

    const [translatedData, setTranslatedData] = useState(restaurantName[0]) //선택 언어 설정

    //식단 데이터
    let [data, setData] = useState([
      ["<no data>", "<no data>", "<no data>"],
      ["<no data>", "<no data>", "<no data>"],
      ["<no data>", "<no data>", "<no data>"],
    ]);

    //데이터 요청
    useEffect(() => {
        //선택 언어 설정
        const selectedLanguage = restaurantName.findIndex((element => element.country === language))
        setTranslatedData(restaurantName[selectedLanguage])

        //식단 데이터 요청
        axios.post('http://localhost:8080/translation/food', {}, {params:{
            data: `${language}`,
          }}) 
          .then((res) => {
            let responseData = res.data.restaurant[0];
            let temp = [responseData[4], responseData[5], responseData[6], responseData[7]]
            setData(temp)
          })
          .catch((error) => {
            console.log(error);
          });

    }, [language])

    return (
        <div className="container">
            {data.map((r, i) => <MealCard i={i} data={data} translatedData={translatedData}/>)}
        </div>
    );
}
/**
 * 
 * @param {array} data 식단 데이터
 * @param {number} i 반복 인덱스
 * @param {object} translatedData 현재 언어
 * @returns 
 */
function MealCard({ data, i, translatedData }) {
    return (
        <div className="mealCard">
            <div className="mealDetail">
                <h3>{translatedData.restaurant[i]}</h3>
                <p><b>{translatedData.mealTime[0]}</b> : {data[i][0] === null ? "<no data>" : data[i][0]}</p>
                <p><b>{translatedData.mealTime[1]}</b> : {data[i][1] === null ? "<no data>" : data[i][1]}</p>
                <p><b>{translatedData.mealTime[2]}</b> : {data[i][2] === null ? "<no data>" : data[i][2]}</p>
            </div>
        </div>
    )
}

export default Menu;