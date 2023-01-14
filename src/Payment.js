import React, {useState} from 'react';
import axios from "axios";

export default function Payment(props) {

    const [sLink, setLink] = useState();
    const [sCurrency, setCurrency] = useState();
    const [sEmail, setEmail] = useState();

    const publish = () => {
        console.log("Оплата произведена")
    }

    return (
        <div className="payment setting">
            <h2>Заказ №</h2>
            <img src={'./logo.jpg'} className="logo"  alt={"logo"}/>
            <p className="textField">rdjhldjkfhdjsnbfjhldsgfsjh</p>
            <h3 className="shop_name">Веб-сайт</h3>
            <input className="textField" type="text" name="name" placeholder={"Ссылка на веб-сайт"} onChange={e => { setLink(e.target.value) }} />
            <h3 className="shop_address">Валюта</h3>
            <select className="textFieldS" onChange={(e) => { setCurrency(e.target.value); }}>
                <option value="BTC" className="variant">BTC</option>
                <option value="USDT" className="variant">USDT</option>
                <option value="ETH" className="variant">ETH</option>
                <option value="DOGE" className="variant">DOGE</option>
                <option value="ITC" className="variant">ITC</option>
                <option value="TRX" className="variant">TRX</option>
                <option value="BUSD" className="variant">BUSD</option>
            </select>
            <h3 className="shop_email">Почта магазина</h3>
            <input className="textField" type="email" name="email" placeholder={"Ваш email"} onChange={e => { setEmail(e.target.value) }} />
            <button className="saveButton" onClick={publish}>Оплатить</button>
        </div>
    )
}