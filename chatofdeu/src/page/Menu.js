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
                <h4>{data[i].restaurant}</h4>
                <p>아침 : {data[i].meal[0]}</p>
                <p>점심 : {data[i].meal[1]}</p>
                <p>저녁 : {data[i].meal[2]}</p>
            </div>
        </div>
    )
}

export default Menu;