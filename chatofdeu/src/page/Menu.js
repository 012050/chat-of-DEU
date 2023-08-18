import { useState } from "react";
import "./../css/Menu.css"

function Menu(){
    let [data, setData] = useState([
        {restaurant: "행복 기숙사", meal: ["아침", "점심", "저녁"]},
        {restaurant: "효민 기숙사", meal: ["아침", "점심", "저녁"]},
        {restaurant: "수덕전", meal: ["아침", "점심", "저녁"]},
        {restaurant: "정보공학관", meal: ["아침", "점심", "저녁"]},
        {restaurant: "국제관", meal: ["아침", "점심", "저녁"]},
        {restaurant: "지천관", meal: ["아침", "점심", "저녁"]},
    ])
    return(
        <div className="container">
            <h1>식단</h1>
            {data.map((r, i) => <MealCard i={i} data={data}/>)}
        </div>
    );
}

function MealCard({data, i}){
    return(
        <div className="mealCard">
            <div className="mealDetail">
                <h3>{data[i].restaurant}</h3>
                <p><b>아침</b> : {data[i].meal[0]}</p>
                <p><b>점심</b> : {data[i].meal[1]}</p>
                <p><b>저녁</b> : {data[i].meal[2]}</p>
            </div>
        </div>
    )
}

export default Menu;