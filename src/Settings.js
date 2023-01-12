import React, {useCallback, useEffect, useState} from "react";
import Main from "./Main";
import axios from "axios";
export default function Settings(props) {
    const [activeComponent, setActiveComponent] = useState("show_settings");
    const [selectedImage, setSelectedImage] = useState(null);
    const [downloadedImage, setDownloadedImage] = useState(null);
    const [sName, setName] = useState();
    const [sAddress, setAddress] = useState();
    const [sEmail, setEmail] = useState();
    const [sDescription, setDescription] = useState();

    useEffect(() => {

        axios.get(`http://localhost:8000/api/v1/stores/${props.shopId}`)
            .then (res => {
                setName(res.data["store"].shop_name)
                setAddress(res.data["store"].address)
                setEmail(res.data["store"].email)
                setDescription(res.data["store"].description)
                getImage()
            })
            .catch(err => {
                console.log(err)
            })

    }, [props.shopId])

    const getImage = () => {
        axios.get(`http://localhost:8000/api/v1/stores/${props.shopId}/photo`, {
            responseType: "arraybuffer"
        })
            .then((res) => {
                const base64 = btoa(
                    new Uint8Array(res.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                )
                setDownloadedImage(base64)
            })
    }

    const modifyActiveComponent = useCallback(
        newActiveComponent => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );

    function updateShop() {
        if (selectedImage != null) {
            const bodyFormData = new FormData()
            bodyFormData.append('shop_name', sName)
            bodyFormData.append('address', sAddress)
            bodyFormData.append('email', sEmail)
            bodyFormData.append('description', sDescription)
            bodyFormData.append('logo', selectedImage)

            axios.put(
                `http://localhost:8000/api/v1/stores/${props.shopId}`,
                bodyFormData,
                { headers: { "Content-Type": "multipart/form-data" } }
            )
                .then(function (response) {
                    console.log(response);
                    window.location.reload();
                })
                .catch(function (error) {
                    alert("Данные некорректны, попробуйте ещё раз")
                    console.log(error);
                });
        } else {
            axios.patch(
                `http://localhost:8000/api/v1/stores/${props.shopId}`,
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
                            {!selectedImage && (
                                <div>
                                    <img alt="not fount" height={"160px"} className="logo" src={`data:;base64,${downloadedImage}`} />
                                </div>
                            )}
                            {selectedImage && (
                                <div>
                                    <img alt="not fount" height={"160px"} className="logo" src={URL.createObjectURL(selectedImage)} />
                                </div>
                            )}
                            <input type="file" name="myImage" onChange={(event) => {console.log(event.target.files[0]); setSelectedImage(event.target.files[0]);}}/>
                        </div>
                        <h3 className="shop_name">Название магазина</h3>
                        <input className="textField" type="text" name="name" defaultValue={sName} onChange={e => {  setName(e.target.value) }} />
                        <h3 className="shop_address">Адрес магазина</h3>
                        <input className="textField" type="text" name="address" defaultValue={sAddress} onChange={e => { setAddress(e.target.value) }} />
                        <h3 className="shop_email">Почта магазина</h3>
                        <input className="textField" type="email" name="email" defaultValue={sEmail} onChange={e => { setEmail(e.target.value) }} />
                        <h3 className="shop_description">Описание магазина</h3>
                        <input className="textField" type="text" name="description" defaultValue={sDescription} onChange={e => { setDescription(e.target.value) }} />
                        <button className="saveButton" onClick={updateShop}>Сохранить</button>
                    </div>
                </div>
            }
        </>
    )
}