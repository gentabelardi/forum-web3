import React, { useState } from 'react'
import { ethers } from "ethers"
import { useRouter } from 'next/router'
import Link from 'next/link';
declare global {
    interface Window {
        ethereum: any;
    }
}
export default function connect() {
    const [loginState, setLoginState] = useState("Sign in with your wallet");
    const router = useRouter()



    const login = async () => {
        setLoginState("Connect with your wallet....")
        if (!window.ethereum) {
            setLoginState("No Wallet...")
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", [])

        const signer = provider.getSigner()
        const walletAddr = await signer.getAddress()
        setLoginState("Generate nonce .....")

        let response = await fetch('/api/auth/nonce', {
            method: 'POST',
            body: JSON.stringify({
                walletAddr,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { nonce } = await response.json()
        setLoginState("Please sign the nonce .....")
        const signature = await signer.signMessage(nonce)
        response = await fetch('/api/auth/wallet', {
            method: 'POST',
            body: JSON.stringify({
                walletAddr,
                nonce,
                signature
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const { user, token } = await response.json()
        if (user) {
            setLoginState("Success login ....")
            router.push('/')
        } else {
            setLoginState("Can't login ....")

        }
    }
    return <div className=" w-full py-10">
        <section className=" container px-2 lg:w-2/5 mx-auto">
            <div className="">
                <h1 className="text-white  font-bold text-4xl">
                    Sign in with your wallet
                </h1>
                <p className="text-white mt-3 text-opacity-50 font-medium text-lg">Sign in with one of available wallet providers or create a new wallet.</p>

            </div>
        </section>
        <section className=" container space-y-2 mt-5 px-2 lg:w-2/5	 mx-auto">
            <div className="w-full flex flex-col items-center ">
                <button onClick={login} type="button" className="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-3 text-center mr-2 mb-2  w-full">Connect with metamask</button>
                <Link href="/about">
                    <a className="text-gray-500 border-4 px-2 rounded-lg border-blue-600 border-opacity-0 focus:border-blue-600 mt-3 hover:text-blue-500  font-medium text-lg">
                        About us &#128568;
                    </a>
                </Link>
            </div>

        </section>

    </div>
}