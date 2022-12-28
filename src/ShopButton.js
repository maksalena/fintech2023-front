import React from "react";

export default function ShopButton(props) {
    function displayShop() {
        props.passData(props.info.id);
    }


    return (
        <button onClick={displayShop} className="add_shop">{props.info.shop_name}</button>
    )
}