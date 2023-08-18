import "./../css/Menu.css"

function Menu(){
    return(
        <div className="container">
            <h1>식단</h1>
            <MealCard/>
        </div>
    );
}

function MealCard(){
    return(
        <div className="mealCard">
            <h4>행복기숙사</h4>
        </div>
    )
}

export default Menu;