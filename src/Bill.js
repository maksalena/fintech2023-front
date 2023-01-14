import React, {useState} from "react";
import './coupon.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaCheck, FaList, FaBan} from 'react-icons/fa'
import axios from "axios";

export default function Bill(props) {
    const [stat, setStatus] = useState(props.info.status);
    const inputs = document.getElementsByClassName("status alignment1"); // id - status
    let item = document.querySelectorAll('.action'); // id - number
    let num = 0

    item.forEach(function(elem, i){
        elem.addEventListener('click', function(){
            num = parseInt(item[i].id) + 1
            setStatus(inputs[num].id)
        });
    });

    function performAction(e, data) {
        if (data.s === 'Active') {
            axios.patch(`http://localhost:8000/api/v1/invoices/${props.idS}`,
                {
                    status: "completed"
                })
                .then(function (response) {
                    console.log(response);
                    window.location.reload();
                })
                .catch(function (error) {
                    alert("Что-то пошло не так, попробуйте позже")
                    console.log(error);
                });
        } else if (data.s === 'Success') {
            axios.patch(`http://localhost:8000/api/v1/invoices/${props.idS}`,
                {
                    status: "completed"
                })
                .then(function (response) {
                    console.log(response);
                    window.location.reload();
                })
                .catch(function (error) {
                    alert("Что-то пошло не так, попробуйте позже")
                    console.log(error);
                });
        }

    }

    return (
        <div className="bill">
            <p className="invoice_ID alignment1">{props.info.id}</p>
            <p className="date alignment1">{props.info.date}</p>
            <p className="bills_currency alignment1">{props.info.blockchains.join(' ')}</p>
            <p className="price alignment1">{props.info.price}</p>
            <p id={props.info.status} className="status alignment1">{props.info.status}</p>
            <p className="actual_util alignment1">{props.info.invoice_type}</p>
            <div className="alignment1">
                <ContextMenuTrigger mouseButton={0} id={`contextMenuB${props.number}`}>
                    <button id={props.number} title="Нажмите" className="action">...</button>
                </ContextMenuTrigger>
            </div>
            {/* TODO: make function for changing status */}
            <ContextMenu id={`contextMenuB${props.number}`}>
                {console.log(stat)}
                {stat === "active" ?
                    <MenuItem data={{s: 'Active'}} onClick={performAction}>
                        <FaBan className="ban" />
                        <span>Закрыть счёт</span>
                    </MenuItem> : <></>}
                {stat === "completed" ?
                    <MenuItem data={{s: 'Success'}} onClick={performAction}>
                        <FaCheck className="done"/>
                        <span>Завершить оплату</span>
                    </MenuItem> : <></>}
                <MenuItem data={{s: 'Description'}} onClick={performAction}>
                    <FaList className="watchlist"/>
                    <span>Детали транзакции</span>
                </MenuItem>
            </ContextMenu>
        </div>
    )
}