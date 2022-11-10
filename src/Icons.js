import React from "react";

export default function Icons() {
    return (
        <div className="sidebar">
            <div className="header">
                <img src='./logo.jpg' alt="logo" className="logo"/>
                <button className="add_shop">Добавить магазин</button>
            </div>
            <div className="footer">
                <button className="account_settings">Настройки</button>
                <button className="log_out">Выйти</button>
            </div>
        </div>
    )
}