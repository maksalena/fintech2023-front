import React from "react";
import Wallet from "./Wallet";

export default function Wallets(props) {

    let wallet = JSON.stringify(props.wallets)
    let walletJson = JSON.parse(wallet)
    const wallets = []
    for (let i = 0; i < walletJson.length; i++) {
        wallets.push(<Wallet info={walletJson[i]}/>)
    }
    return (
        <div className="currencies">
            {wallets}
        </div>
    )
}