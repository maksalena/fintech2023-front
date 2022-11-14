import React, {useState} from "react";
import Popup from "./Popup";

export default function Icons() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="sidebar">
            <div className="header">
                <img src='./logo.jpg' alt="logo" className="logo"/>
                <button onClick={togglePopup} className="add_shop">Добавить магазин</button>
            </div>
            <div className="footer">
                <button className="account_settings">Настройки</button>
                <button className="log_out">Выйти</button>
            </div>
            {isOpen && <Popup
                content={<>
                    <b>Popup</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Test button</button>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}