import React, {useEffect, useState, useCallback} from "react";
import Wallets from "./Wallets";
import axios from "axios";
import Bills from "./Bills";
import History from "./History";
import Settings from "./Settings";
import Popup from "./Popup";

export default function Main(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [wallet, setWallet] = useState();
    const [bill, setBill] = useState();
    const [transaction, setTransaction] = useState();
    const [filterParam, setFilterParam] = useState("All");

    const [sWalletType, setWalletType] = useState();
    const [sNameOfInvoice, setNameOfInvoice] = useState();
    const [sBlockchains, setBlockchains] = useState();
    const [sCurrency, setCurrency] = useState();
    const [sPrice, setPrice] = useState();

    const current = new Date();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/wallets/${props.shopId}`)
            .then (res => {
                setWallet(res.data["wallet"])

            })
            .catch(err => {
                console.log(err)
            })

    }, [props.shopId])

    useEffect( () => {
        axios.get(`http://localhost:8000/api/v1/invoices/${props.shopId}`)
            .then( res => {
                setBill(res.data["invoice"])
            })
            .catch( err => {
                console.log(err)
        })
    }, [props.shopId])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/transactions/${props.shopId}`)
            .then (res => {
                setTransaction(res.data["transactions"])
            })
            .catch(err => {
                console.log(err)
            })

    }, [props.shopId])

    const [activeComponent, setActiveComponent] = useState("show_main");

    const modifyActiveComponent = useCallback(
        newActiveComponent => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const addBill = () => {
        const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}T${current.getHours()}:${current.getMinutes()}`; // 2022-12-28T17:14
        axios.post('http://localhost:8000/api/v1/invoices/',
            {
                wallet_type: sWalletType,
                name_of_the_invoice: sNameOfInvoice,
                date: date,
                blockchains: sBlockchains,
                currency: sCurrency,
                price: sPrice,
                status: "Success",
                actual_until: date,
                store: props.shopId
            })
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                alert("Данные некорректны, попробуйте ещё раз")
                console.log(error);
            });
    }

    return (
        <>
            {activeComponent === "show_settings" && <Settings shopId={props.shopId}/>}
            {activeComponent === "show_main" &&
                <div className="main_page">
                    {/* Wallets */}
                    <div className="container">
                        <div className="buttons">
                            <button onClick={() => modifyActiveComponent("show_main")}
                                    className="wallets active">Кошельки
                            </button>
                            <button onClick={() => modifyActiveComponent("show_settings")}
                                    className="settings">Настройки
                            </button>
                        </div>
                        {wallet !== undefined ? <Wallets wallets={wallet}/> : <></>}
                    </div>
                    {/* /.container */}

                    {/* Bills */}
                    <div className="container">
                        <div className="bills_info">
                            <p className="list_of_bills">Список счетов</p>
                            <button onClick={togglePopup} className="add_bill">СОЗДАТЬ СЧЁТ</button>
                        </div>
                        {isOpen &&
                            <Popup
                                content={
                                    <div className="container setting">
                                        <img src={'./logo.jpg'} className="logo"  alt={"logo"}/>
                                        <h3 className="shop_name">Тип кошелька</h3>
                                        <input className="textField" type="text" name="name" placeholder={"Тип кошелька"} onChange={e => { setWalletType(e.target.value) }} />
                                        <h3 className="shop_address">Название счёта</h3>
                                        <input className="textField" type="text" name="address" placeholder={"Название счёта"} onChange={e => { setNameOfInvoice(e.target.value) }} />
                                        <h3 className="shop_description">Блокчейн</h3>
                                        <input className="textField" type="text" name="description" placeholder={"Блокчейны через пробел"} onChange={e => { setBlockchains(e.target.value.split(' ')) }} />
                                        <h3 className="shop_description">Валюта</h3>
                                        <input className="textField" type="text" name="description" placeholder={"Валюта"} onChange={e => { setCurrency(e.target.value) }} />
                                        <h3 className="shop_description">Сумма</h3>
                                        <input className="textField" type="text" name="description" placeholder={"Сумма"} onChange={e => { setPrice(e.target.value) }} />
                                        <button className="saveButton" onClick={addBill}>Создать</button>
                                    </div>}
                                handleClose={togglePopup}
                            />}
                        {bill !== undefined ? <Bills bills={bill}/> : <></>}
                    </div>
                    {/* /.container */}

                    {/* History */}
                    <div className="container">
                        <div className="transactions">
                            <div className="history_selector">
                                <p className="history_of_transaction">История транзакций</p>
                                <select className="selector" onChange={(e) => { setFilterParam(e.target.value); }}>
                                    <option value="All" className="variant">All</option>
                                    <option value="BTC" className="variant">BTC</option>
                                    <option value="USDT" className="variant">USDT</option>
                                    <option value="ETH" className="variant">ETH</option>
                                </select>
                            </div>
                            <button className="download_csv">Скачать .cvs</button>
                        </div>
                        {transaction !== undefined ? <History transactions={transaction} filter={filterParam}/> : <></>}
                    </div>
                    {/* /.container */}
                </div>
            }
        </>
    )
}