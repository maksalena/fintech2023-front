import React, {useState} from "react";
import './coupon.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaCheck, FaList, FaBan} from 'react-icons/fa'

export default function Bill_Info(props) {
    const inputs = document.getElementsByClassName("status alignment1");

    let item = document.querySelectorAll('.action');
    let num
    let t

    item.forEach(function(elem, i){
        elem.addEventListener('click', function(){
            num = item[i].id
        });
    });
    return (
        <div className="bill">
            <p className="invoice_ID alignment1">{props.info.id}</p>
            <p className="date alignment1">{props.info.date}</p>
            <p className="bills_currency alignment1">{props.info.blockchains.join(' ')}</p>
            <p className="price alignment1">{props.info.price}</p>
            <p id={props.info.status} className="status alignment1">{props.info.status}</p>
            <p className="actual_util alignment1">{props.info.wallet_type}</p>
            <div className="alignment1">
                <ContextMenuTrigger mouseButton={0} id="contextmenub">
                    <button id={props.number} title="Нажмите правой кнопкой мыши" className="action">...</button>
                </ContextMenuTrigger>
            </div>
            <ContextMenu id="contextmenub">
                {setTimeout(() => {
                    t = inputs[num].id
                    console.log(t)
                }, 1000)}
                {t === "Active" ?
                    <MenuItem >
                        <FaBan className="ban" />
                        <span>Закрыть счёт</span>
                    </MenuItem> : <></>}
                {t === "Success" ?
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