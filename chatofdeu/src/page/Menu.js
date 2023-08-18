import { useState } from "react";
import "./../css/Menu.css"

function Menu(){
    let [meal, setMeal] = useState(["신라면, 김치", "안성탕면, 단무지", "신라면, 계란후라이"]);
    return(
        <div className="container">
            <h1>식단</h1>
            <MealCard meal = {meal}/>
        </div>
    );
}

function MealCard({meal}){
    return(
        <div className="mealCard">
            <h4>행복기숙사</h4>
            <p>아침 : {meal[0]}</p>
            <p>점심 : {meal[1]}</p>
            <p>저녁 : {meal[2]}</p>
        </div>
    )
}

export default Menu;