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
    const [selectedImage, setSelectedImage] = useState(null);


    const passData = (data) => {
        setChildData(data);
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/stores/')
            .then (res => {
                setShop(res.data["store"])
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const addShop = () => {
        const bodyFormData = new FormData()
        bodyFormData.append('shop_name', sName)
        bodyFormData.append('address', sAddress)
        bodyFormData.append('email', sEmail)
        bodyFormData.append('description', sDescription)
        bodyFormData.append('logo', selectedImage)

        axios({
            method: "post",
            url: "http://localhost:8000/api/v1/stores/",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
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
                                <div>
                                    {selectedImage && (
                                        <div>
                                            <img alt="not fount" height={"160px"} className="logo" src={URL.createObjectURL(selectedImage)} />
                                        </div>
                                    )}
                                    <input type="file" name="myImage" onChange={(event) => {console.log(event.target.files[0]); setSelectedImage(event.target.files[0]);}}/>
                                </div>
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