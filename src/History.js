import React from "react";
import Story from "./Story";

export default function History(props) {

    let transaction = JSON.stringify(props.transactions)
    let transactionJson = JSON.parse(transaction)
    const stories = []
    for (let i = 0; i < transactionJson.length; i++) {
        if (props.filter !== "All") {
            if (props.filter === transactionJson[i].blockchain)
                stories.push(<Story info={transactionJson[i]}/>)
        } else
            stories.push(<Story info={transactionJson[i]}/>)
    }
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
            {stories}
        </div>

    )
}