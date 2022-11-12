import React, {useEffect, useState} from "react";
import Wallets from "./Wallets";
import axios from "axios";
import Bills from "./Bills";
import History from "./History";

export default function Main() {
    const [wallet, setWallet] = useState();
    const [bill, setBill] = useState();
    const [transaction, setTransaction] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/wallet')
            .then (res => {
                setWallet(res.data["wallets"])

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    useEffect( () => {
        axios.get('http://localhost:8000/api/v1/account')
            .then( res => {
                setBill(res.data["bills"])
            })
            .catch( err => {
                console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/transactions')
            .then (res => {
                setTransaction(res.data["transactions"])

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className="main_page">
            {/* Wallets */}
            <div className="container">
                <div className="buttons">
                    <button className="wallets active">Кошельки</button>
                    <button className="settings">Настройки</button>
                </div>
                {wallet !== undefined ? <Wallets wallets={wallet}/> : <></> }
            </div> {/* /.container */}

            {/* Bills */}
            <div className="container">
                <div className="bills_info">
                    <p className="list_of_bills">Список счетов</p>
                    <button className="add_bill">СОЗДАТЬ СЧЁТ</button>
                </div>
                {bill !== undefined ? <Bills bills={bill}/> : <></> }
            </div> {/* /.container */}

            {/* History */}
            <div className="container">
                <div className="transactions">
                    <div className="history_selector">
                        <p className="history_of_transaction">История транзакций</p>
                        <select className="selector">
                            <option className="variant">USDT</option>
                            <option className="variant">ETH</option>
                        </select>
                    </div>
                    <button className="download_csv">Скачать .cvs</button>
                </div>
                {transaction !== undefined ? <History transactions={transaction}/> : <></> }
            </div> {/* /.container */}
        </div>
    )
}