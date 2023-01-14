import React, {useState} from "react";
import './coupon.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaCheck, FaList, FaBan} from 'react-icons/fa'
import axios from "axios";

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

    const close = () => {
        axios.patch(`http://localhost:8000/api/v1/transactions/${props.idS}`,
            {
                status: "Closed"
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

    const finish = () => {
        axios.patch(`http://localhost:8000/api/v1/transactions/${props.idS}`,
            {
                status: "Finished"
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

    return (
        <div className="story">
            <p className="date alignment2">{props.info.date}</p>
            <p className="type alignment2">{props.info.type}</p>
            <p className="price alignment2">{props.info.amount}</p>
            <p className="history_currency alignment2">{props.info.blockchain}</p>
            <p id={props.info.status} className="status alignment2">{props.info.status}</p>
            <div className="alignment2">
                <ContextMenuTrigger mouseButton={0} id={`contextMenuS${props.number}`}>
                    <button id={props.number} title="Нажмите" className="action">...</button>
                </ContextMenuTrigger>
            </div>
            {/* TODO: make function for changing status */}
            <ContextMenu id={`contextMenuS${props.number}`}>
                {console.log(stat)}
                {stat === "Active" ?
                    <MenuItem onClick={close}>
                        <FaBan className="ban" />
                        <span>Закрыть счёт</span>
                    </MenuItem> : <></>}
                {stat === "Success" ?
                    <MenuItem onClick={finish}>
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
