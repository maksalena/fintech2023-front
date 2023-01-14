import React, {useEffect, useState} from "react";
import Popup from "./Popup";
import {FaBtc, FaDollarSign, FaEthereum, FaDog, FaGem, FaSquare} from "react-icons/fa";
import Payment from "./Payment";

export default function Wallet(props) {
    const [isOpen, setIsOpen] = useState(false);

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
            {isOpen && <Payment />}
        </div>
    )
}