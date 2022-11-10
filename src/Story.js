import React from "react";

export default function Story(props) {
    return (
        <div className="story">
            <p className="date alignment2">{props.info.date}</p>
            <p className="type alignment2">{props.info.type}</p>
            <p className="price alignment2">{props.info.amount}</p>
            <p className="history_currency alignment2">{props.info.currency}</p>
            <p className="status alignment2">{props.info.status}</p>
            <button className="action alignment2">...</button>
        </div>
    )
}