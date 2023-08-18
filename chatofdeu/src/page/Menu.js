import React from "react";
import "./../css/Menu.css";

function Menu() {
  return (
    <>
      hello
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.1/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Rubik:wght@300;700&display=swap"
        rel="stylesheet"
      />

      <div class="container">
        <div class="menu">
          <div class="menu-separator">Separator</div>
          <div class="menu-item">
            <div class="menu-item-name">Food</div>
            <div class="menu-item-description">Food yada yada</div>
            <div class="menu-item-price">17.50</div>
          </div>
          <div class="menu-separator">Separator</div>
          <div class="drink-item">
            <div class="drink-item-name">Drink</div>
            <div class="drink-item-description">3.3dl</div>
            <div class="drink-item-price">4.50</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;