import React, {useState} from "react";
import Popup from "./Popup";
import {FaBtc, FaDollarSign, FaEthereum} from "react-icons/fa";

export default function Wallet(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [sLink, setLink] = useState();
    const [sCurrency, setCurrency] = useState();
    const [sEmail, setEmail] = useState();
    const rate = 70

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function currency() {
        if (props.info.currency === "BTC") {
            return  <FaBtc />
        } else if (props.info.currency === "USDT") {
            return <FaDollarSign />
        } else {
            return <FaEthereum />
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
                    <p className="amount"><b className="quantity">{props.info.amount} </b> ${props.info.amount * rate} </p>
                </div>
            </div>
            <button onClick={togglePopup} className="transfer">ВЫВОД</button>
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