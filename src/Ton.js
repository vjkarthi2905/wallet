import React, { useState, useEffect } from "react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";

export default function Ton() {
    const [tonConnected, setTonConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);

    const userFriendlyAddress = useTonAddress();
    const [tonConnectUI] = useTonConnectUI();


    const connectTonWallet = async () => {
        try {
            if (!userFriendlyAddress) {
                console.log("Connecting wallet...");
                await tonConnectUI.connectWallet();
            } else {
                console.log("Wallet already connected:", userFriendlyAddress);
                setWalletAddress(userFriendlyAddress);
                setTonConnected(true);
            }
        } catch (error) {
            console.error("Error connecting to TON wallet:", error);
        }
    };

    const disconnectTonWallet = async () => {
        try {
            console.log("Disconnecting wallet...");
            await tonConnectUI.disconnect();
            setWalletAddress(null);
            setTonConnected(false);
        } catch (error) {
            console.error("Error disconnecting TON wallet:", error);
        }
    };

    useEffect(() => {
        console.log("Address updated:", userFriendlyAddress);

        if (userFriendlyAddress) {
            setWalletAddress(userFriendlyAddress);
            setTonConnected(true);
        } else {
            setTonConnected(false);
        }
    }, [userFriendlyAddress]);

    return (
        <div className="flex flex-col items-center">

            <div className="flex justify-center gap-16 h-40 w-[40%] border border-black m-4">
                <button
                    className={`h-10 w-50 px-10 mt-16 border border-black rounded-3xl bg-green ${tonConnected ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                    onClick={connectTonWallet}
                    disabled={tonConnected}
                >
                    Connect Ton Wallet
                </button>

                <button
                    className={`h-10 w-50 px-10 mt-16 border border-black rounded-3xl ${!tonConnected ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                    onClick={disconnectTonWallet}
                    disabled={!tonConnected}
                >
                    Disconnect Ton Wallet
                </button>
            </div>

            <div className="flex justify-center h-20 w-[40%] border border-black m-4">
                <p className="py-6 text-center">
                    {tonConnected ? walletAddress : "Not Connected"}
                </p>
            </div>
        </div>
    );
}
