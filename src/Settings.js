import React, {useCallback, useState} from "react";
import Main from "./Main";

export default function Settings() {
    const [activeComponent, setActiveComponent] = useState("show_settings");

    const modifyActiveComponent = useCallback(
        newActiveComponent => {
            setActiveComponent(newActiveComponent);
        },
        [setActiveComponent]
    );

    return (
        <>
            {activeComponent === "show_main" && <Main />}
            {activeComponent === "show_settings" &&
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
            }
        </>
    )
}