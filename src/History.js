import React from "react";

export default function History(props) {
    console.log(props.transactions["date"])
    let test = props.transactions["date"]
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
                <p className="date alignment2">{test}</p>
                <p className="type alignment2">Платёж</p>
                <p className="price alignment2">100</p>
                <p className="history_currency alignment2">USDT</p>
                <p className="status alignment2">Выполнена</p>
                <button className="action alignment2">...</button>
            </div> {/* /.story */}
            <div className="story">
                <p className="date alignment2">11.08.22, 5:07:47</p>
                <p className="type alignment2">Платёж</p>
                <p className="price alignment2">100</p>
                <p className="history_currency alignment2">USDT</p>
                <p className="status alignment2">Выполнена</p>
                <button className="action alignment2">...</button>
            </div> {/* /.story */}
            <div className="story">
                <p className="date alignment2">11.08.22, 5:07:47</p>
                <p className="type alignment2">Платёж</p>
                <p className="price alignment2">100</p>
                <p className="history_currency alignment2">USDT</p>
                <p className="status alignment2">Выполнена</p>
                <button className="action alignment2">...</button>
            </div> {/* /.story */}
            <div className="story">
                <p className="date alignment2">11.08.22, 5:07:47</p>
                <p className="type alignment2">Платёж</p>
                <p className="price alignment2">100</p>
                <p className="history_currency alignment2">USDT</p>
                <p className="status alignment2">Выполнена</p>
                <button className="action alignment2">...</button>
            </div> {/* /.story */}
        </div>
    )
}