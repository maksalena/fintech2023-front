import React from "react";

export default function Wallet(props) {
    return (
        <div className="currency">
            <div className="info">
                <img className="pic_currency" src="https://via.placeholder.com/32" alt="pic_of_currency"/>
                <div className="simple_info">
                    <p className="label">{props.info.currency}</p>
                    <p className="amount"><b className="quantity">{props.info.amount} </b> ${props.info.amount * props.info.rate} </p>
                </div>
            </div>
            <button className="transfer">ВЫВОД</button>
        </div>
    )
}