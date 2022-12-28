import React from "react";

export default function Bill_Info(props) {
    return (
        <div className="bill">
            <p className="invoice_ID alignment1">{props.info.id}</p>
            <p className="date alignment1">{props.info.date}</p>
            <p className="bills_currency alignment1">{props.info.blockchains}</p>
            <p className="price alignment1">{props.info.price}</p>
            <p className="status alignment1">{props.info.status}</p>
            <p className="actual_util alignment1">{props.info.wallet_type}</p>
            <button className="action alignment1">...</button>
        </div>
    )
}