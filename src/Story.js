import React, {useState} from "react";
import './coupon.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaCheck, FaList, FaBan} from 'react-icons/fa'

export default function Story(props) {
    const [stat, setStatus] = useState(null);
    const inputs = document.getElementsByClassName("status alignment2"); // id - status
    let item = document.querySelectorAll('.action'); // id - number
    let num = 0

    item.forEach(function(elem, i){
        elem.addEventListener('click', function(){
            num = parseInt(item[i].id) + 1
            setStatus(inputs[num].id)
        });
    });
    return (
        <div className="story">
            <p className="date alignment2">{props.info.date}</p>
            <p className="type alignment2">{props.info.type}</p>
            <p className="price alignment2">{props.info.amount}</p>
            <p className="history_currency alignment2">{props.info.blockchain}</p>
            <p id={props.info.status} className="status alignment2">{props.info.status}</p>
            <div className="alignment2">
                <ContextMenuTrigger mouseButton={0} id="contextMenuS">
                    <button id={props.number} title="Нажмите" className="action">...</button>
                </ContextMenuTrigger>
            </div>
            {/* TODO: make function for changing status */}
            <ContextMenu id="contextMenuS">
                {console.log(stat)}
                {stat === "Active" ?
                    <MenuItem >
                        <FaBan className="ban" />
                        <span>Закрыть счёт</span>
                    </MenuItem> : <></>}
                {stat === "Success" ?
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
