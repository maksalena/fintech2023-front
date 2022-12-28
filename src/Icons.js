import React, {useEffect, useState} from "react";
import Popup from "./Popup";
import axios from "axios";
import Main from "./Main";
import ShopButtons from "./ShopButtons";

export default function Icons() {

    const [isOpen, setIsOpen] = useState(false);
    const [shop, setShop] = useState();
    const [childData, setChildData] = useState({});

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

    const sentRequest = () => {
        axios.post('http://localhost:8000/api/v1/stores/',
            {
            shopName: 'Fred',
            address: 'address',
            email: 'mail',
            description: 'descr',
            logo: 'logo.png',
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
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
                {isOpen && <Popup
                    content={<>
                        <b>Popup</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={sentRequest}>Test button</button>
                    </>}
                    handleClose={togglePopup}
                />}
            </div>
            <Main shopId={childData}/>
        </>
    )
}