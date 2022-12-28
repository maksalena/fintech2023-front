import React, {useState} from "react";
import ShopButton from "./ShopButton";

export default function ShopButtons(props) {
    const [childData, setChildData] = useState({});

    const passData = (data) => {
        setChildData(data);
    };

    let shop = JSON.stringify(props.shops)
    let shopJson = JSON.parse(shop)
    const shops = []
    for (let i = 0; i < shopJson.length; i++) {
        shops.push(<ShopButton info={shopJson[i]} passData={passData}/>)
    }
    return (
        <div className="currencies">
            {shops}
            {props.passData(childData)}
        </div>
    )
}

