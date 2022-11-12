import React from "react";
import Bill_Info from "./Bill_Info";

export default function Bills(props) {

    let bill = JSON.stringify(props.bills)
    let billJson = JSON.parse(bill)
    const bills = []
    for (let i = 0; i < billJson.length; i++) {
        bills.push(<Bill_Info info={billJson[i]}/>)
    }
    return (
        <div className="bills">
            <div className="table_header">
                <p className="invoice_ID alignment1">ID счёта</p>
                <p className="date alignment1">Дата</p>
                <p className="bills_currency alignment1">Валюта</p>
                <p className="price alignment1">Цена, $</p>
                <p className="status alignment1">Статус</p>
                <p className="actual_util alignment1">Использование</p>
                <p className="actions alignment1">Действия</p>
            </div>
            {bills}
        </div>
    )
}