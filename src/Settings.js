import React, {useCallback, useEffect, useState} from "react";
import Main from "./Main";
import axios from "axios";

export default function Settings(props) {
    const [activeComponent, setActiveComponent] = useState("show_settings");
    const [shop, setShop] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const [sName, setName] = useState();
    const [sAddress, setAddress] = useState();
    const [sEmail, setEmail] = useState();
    const [sDescription, setDescription] = useState();

    let shopName
    let shopAddress
    let shopEmail
    let shopDescription
    let shopLogo

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/stores/${props.shopId}`)
            .then (res => {
                setShop(res.data["store"])

            })
            .catch(err => {
                console.log(err)
            })

    }, [props.shopId])

    const modifyActiveComponent = useCallback(
        newActiveComponent => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );

    const updateShop = () => {
        axios.patch(`http://localhost:8000/api/v1/stores/${props.shopId}`,
            {
                shop_name: sName,
                address: sAddress,
                email: sEmail,
                description: sDescription,
                logo: selectedImage
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }

    if (shop !== undefined) {
        shopName = shop.shop_name
        shopAddress = shop.address
        shopEmail = shop.email
        shopDescription = shop.description
        shopLogo = shop.logo
    }

    return (
        <>
            {activeComponent === "show_main" && <Main shopId={props.shopId}/>}
            {activeComponent === "show_settings" &&
                <div className={"main_page"}>
                    <div className="container">
                        <div className="buttons">
                            <button onClick={() => modifyActiveComponent("show_main")}
                                    className="wallets">Кошельки
                            </button>
                            <button onClick={() => modifyActiveComponent("show_settings")}
                                    className="settings active">Настройки
                            </button>
                        </div>
                    </div>
                    <div className="container setting">
                        <div>
                            {selectedImage && (
                                <div>
                                    <img alt="not fount" height={"160px"} className="logo" src={URL.createObjectURL(selectedImage)} />
                                </div>
                            )}
                            <input defaultValue={shopLogo} type="file" name="myImage" onChange={(event) => {console.log(event.target.files[0]); setSelectedImage(event.target.files[0]);}}/>
                        </div>
                        <h3 className="shop_name">Название магазина</h3>
                        <input className="textField" type="text" name="name" defaultValue={shopName} onChange={e => { setName(e.target.value) }} />
                        <h3 className="shop_address">Адрес магазина</h3>
                        <input className="textField" type="text" name="address" defaultValue={shopAddress} onChange={e => { setAddress(e.target.value) }} />
                        <h3 className="shop_email">Почта магазина</h3>
                        <input className="textField" type="email" name="email" defaultValue={shopEmail} onChange={e => { setEmail(e.target.value) }} />
                        <h3 className="shop_description">Описание магазина</h3>
                        <input className="textField" type="text" name="description" defaultValue={shopDescription} onChange={e => { setDescription(e.target.value) }} />
                        <button className="saveButton" onClick={updateShop}>Сохранить</button>
                    </div>
                </div>
            }
        </>
    )
}