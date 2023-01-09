import React, {useEffect, useState} from "react";
import Popup from "./Popup";
import {FaBtc, FaDollarSign, FaEthereum, FaDog, FaGem, FaSquare} from "react-icons/fa";

export default function Wallet(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [sLink, setLink] = useState();
    const [sCurrency, setCurrency] = useState();
    const [sEmail, setEmail] = useState();

    const dollarUrl = `https://www.cbr-xml-daily.ru/daily_json.js`;
    const [rate, setRate] = useState();
    // Side effect
    useEffect(() => {
        fetch(dollarUrl)
            .then((res) => res.json())
            .then((data) => setRate(data.Valute.USD.Value))
    }, [dollarUrl]);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    // TODO: check images for coins
    function currency() {
        if (props.info.currency === "BTC") {
            return  <FaBtc />
        } else if (props.info.currency === "USDT") {
            return <FaDollarSign />
        } else if (props.info.currency === "ETH") {
            return <FaEthereum />
        } else if (props.info.currency === "DOGE") {
            return <FaDog />
        } else if (props.info.currency === "ITC") {
            return <FaEthereum />
        } else if (props.info.currency === "TRX") {
            return <FaGem />
        } else if (props.info.currency === "BUSD") {
            return <FaSquare />
        }
    }

    const publish = () => {
        console.log("Оплата произведена")
    }

    return (
        <div className="currency">
            <div className="info">
                {currency()}
                <div className="simple_info">
                    <p className="label">{props.info.currency}</p>
                    <p className="amount"><b className="quantity">{props.info.amount} </b> ${(props.info.amount * rate).toFixed(2)} </p>
                </div>
            </div>
            <button onClick={togglePopup} className="transfer">ВЫВОД</button>
            {/* TODO: make popup separate page and generate link for it */}
            {isOpen &&
                <Popup
                    content={
                        <div className="container setting">
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
                        </div>}
                    handleClose={togglePopup}
                />}
        </div>
    )
}