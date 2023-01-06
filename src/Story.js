import React from "react";
import './coupon.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaCheck, FaList, FaBan} from 'react-icons/fa'

export default function Story(props) {

    return (
        <div className="story">
            <p className="date alignment2">{props.info.date}</p>
            <p className="type alignment2">{props.info.type}</p>
            <p className="price alignment2">{props.info.amount}</p>
            <p className="history_currency alignment2">{props.info.blockchain}</p>
            <p className="status alignment2">{props.info.status}</p>
            <div className="alignment2">
                <ContextMenuTrigger mouseButton={0} id="contextmenus">
                    <button title="Нажмите правой кнопкой мыши" className="action">...</button>
                </ContextMenuTrigger>
            </div>
            <ContextMenu id="contextmenus">
                {props.info.status === "Active" ?
                    <MenuItem >
                        <FaBan className="ban" />
                        <span>Закрыть счёт</span>
                    </MenuItem> : <></>}
                {props.info.status === "Success" ?
                    <MenuItem >
                        <FaCheck className="done"/>
                        <span>Завершить оплату</span>
                    </MenuItem> : <></>}
                <MenuItem >
                    <FaList className="watchlist"/>
                    <span>Детали транзакции</span>
                </MenuItem>
            </ContextMenu>
        </div>
    )
}

//    Троеточие в транзакциях:
// 1. Закрыть счёт (если оплата ещё не произведена)
// 2. Завершить оплату (если уже оплачен)
// 3. Детали транзакции - ссылка будет вести на внешний ...