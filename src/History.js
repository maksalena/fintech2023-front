import React from "react";

export default function History(props) {
    let transaction = JSON.stringify(props.transactions)
    let transactionJson = JSON.parse(transaction)

    console.log(transactionJson[0])
    return (
        <div className="history">
            <div className="table_header">
                <p className="date alignment2">Дата</p>
                <p className="type alignment2">Тип</p>
                <p className="price alignment2">Количество</p>
                <p className="history_currency alignment2">Валюта</p>
                <p className="status alignment2">Статус</p>
                <p className="actions alignment2">Действия</p>
            </div>
            <div className="story">
                <p className="date alignment2">{transactionJson[0].date}</p>
                <p className="type alignment2">{transactionJson[0].type}</p>
                <p className="price alignment2">{transactionJson[0].amount}</p>
                <p className="history_currency alignment2">{transactionJson[0].currency}</p>
                <p className="status alignment2">{transactionJson[0].status}</p>
                <button className="action alignment2">...</button>
            </div>
            <div className="story">
                <p className="date alignment2">{transactionJson[1].date}</p>
                <p className="type alignment2">{transactionJson[1].type}</p>
                <p className="price alignment2">{transactionJson[1].amount}</p>
                <p className="history_currency alignment2">{transactionJson[1].currency}</p>
                <p className="status alignment2">{transactionJson[1].status}</p>
                <button className="action alignment2">...</button>
            </div>
            {/*<div className="story">*/}
            {/*    <p className="date alignment2">{transactionJson[2].date}</p>*/}
            {/*    <p className="type alignment2">{transactionJson[2].type}</p>*/}
            {/*    <p className="price alignment2">{transactionJson[2].amount}</p>*/}
            {/*    <p className="history_currency alignment2">{transactionJson[2].currency}</p>*/}
            {/*    <p className="status alignment2">{transactionJson[2].status}</p>*/}
            {/*    <button className="action alignment2">...</button>*/}
            {/*</div>*/}
        </div>
    )
}