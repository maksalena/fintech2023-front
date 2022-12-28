import React from "react";

export default function Story(props) {
    function action() {
        if (props.info.status === "active") {
            console.log("Закрыть счёт")
        } else if (props.info.status === "Completed") {
            console.log("Завершить оплату")
        }
    }

    function actionDb() {
        console.log("Детали транзакции")
    }

    return (
        <div className="story">
            <p className="date alignment2">{props.info.date}</p>
            <p className="type alignment2">{props.info.type}</p>
            <p className="price alignment2">{props.info.amount}</p>
            <p className="history_currency alignment2">{props.info.blockchain}</p>
            <p className="status alignment2">{props.info.status}</p>
            <button onDoubleClick={actionDb} onClick={action} className="action alignment2">...</button>
        </div>
    )
}

//    Троеточие в транзакциях:
// 1. Закрыть счёт (если оплата ещё не произведена)
// 2. Завершить оплату (если уже оплачен)
// 3. Детали транзакции - ссылка будет вести на внешний ...