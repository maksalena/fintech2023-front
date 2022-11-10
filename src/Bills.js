import React from "react";

export default function Bills() {
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
            <div className="bill">
                <p className="invoice_ID alignment1">123456</p>
                <p className="date alignment1">11.08.22, 5:07:47</p>
                <p className="bills_currency alignment1">USDT ETH</p>
                <p className="price alignment1">500</p>
                <p className="status alignment1">Отклонено</p>
                <p className="actual_util alignment1">11.08.22, 5:07:47</p>
                <button className="action alignment1">...</button>
            </div> {/* /.bill */}
            <div className="bill">
                <p className="invoice_ID alignment1">123456</p>
                <p className="date alignment1">11.08.22, 5:07:47</p>
                <p className="bills_currency alignment1">USDT</p>
                <p className="price alignment1">1000</p>
                <p className="status alignment1">Успешно</p>
                <p className="actual_util alignment1">11.08.22, 5:07:47</p>
                <button className="action alignment1">...</button>
            </div> {/* /.bill */}
            <div className="bill">
                <p className="invoice_ID alignment1">123456</p>
                <p className="date alignment1">11.08.22, 5:07:47</p>
                <p className="bills_currency alignment1">ETH</p>
                <p className="price alignment1">300</p>
                <p className="status alignment1">Активно</p>
                <p className="actual_util alignment1">11.08.22, 5:07:47</p>
                <button className="action alignment1">...</button>
            </div> {/* /.bill */}
            <div className="bill">
                <p className="invoice_ID alignment1">123456</p>
                <p className="date alignment1">11.08.22, 5:07:47</p>
                <p className="bills_currency alignment1">USDT ETH</p>
                <p className="price alignment1">5000</p>
                <p className="status alignment1">Отклонено</p>
                <p className="actual_util alignment1">11.08.22, 5:07:47</p>
                <button className="action alignment1">...</button>
            </div> {/* /.bill */}
        </div>
    )
}