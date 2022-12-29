import React, {useEffect, useState} from "react";
import Popup from "./Popup";
import axios from "axios";
import Main from "./Main";
import ShopButtons from "./ShopButtons";

export default function Icons() {

    const [isOpen, setIsOpen] = useState(false);
    const [shop, setShop] = useState();
    const [childData, setChildData] = useState({});

    const [sName, setName] = useState();
    const [sAddress, setAddress] = useState();
    const [sEmail, setEmail] = useState();
    const [sDescription, setDescription] = useState();

    const passData = (data) => {
        setChildData(data);
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/stores/')
            .then (res => {
                setShop(res.data["stores"])

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const addShop = () => {
        axios.post('http://localhost:8000/api/v1/stores/',
            {
                shop_name: sName,
                address: sAddress,
                email: sEmail,
                description: sDescription
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
            <div className="sidebar">
                <div className="header">
                    <img src='./logo.jpg' alt="logo" className="logo"/>
                    {shop !== undefined ? <ShopButtons shops={shop} passData={passData}/> : <h2>Добавьте магазин</h2>}
                    <button onClick={togglePopup} className="add_shop">Добавить магазин</button>
                </div>
                <div className="footer">
                    <button className="log_out">Выйти</button>
                </div>
                {isOpen &&
                    <Popup
                        content={
                            <div className="container setting">
                                <img src={'./logo.jpg'} className="logo"  alt={"logo"}/>
                                <h3 className="shop_name">Название магазина</h3>
                                <input className="textField" type="text" name="name" placeholder={"Название магазина"} onChange={e => { setName(e.target.value) }} />
                                <h3 className="shop_address">Адрес магазина</h3>
                                <input className="textField" type="text" name="address" placeholder={"Адрес магазина"} onChange={e => { setAddress(e.target.value) }} />
                                <h3 className="shop_email">Почта магазина</h3>
                                <input className="textField" type="email" name="email" placeholder={"Email магазина"} onChange={e => { setEmail(e.target.value) }} />
                                <h3 className="shop_description">Описание магазина</h3>
                                <input className="textField" type="text" name="description" placeholder={"Описание"} onChange={e => { setDescription(e.target.value) }} />
                                <button className="saveButton" onClick={addShop}>Сохранить</button>
                            </div>}
                        handleClose={togglePopup}
                    />}
            </div>
            <Main shopId={childData}/>
        </>
    )
}