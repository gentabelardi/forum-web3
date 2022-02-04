import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";

interface IProps {
    closeModal: any
}
function DeleteAccount(props: IProps) {
    function disableButton(type: any) {
        if (type === 'disable') {
            return <div

                className="inline-flex w-full cursor-not-allowed mr-6 justify-center px-4 py-2 text-sm   font-semibold text-red-500 bg-red-700 bg-opacity-10 border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
                Delete Account
            </div>
        }
        return <button
            type="button"
            className="inline-flex w-full mr-6 justify-center px-4 py-2 text-sm   font-semibold text-red-500 bg-red-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
            Delete Account
        </button>
    }
    return (
        <div>
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-white"
            >
                <button
                    type="button"
                    className="inline-flex mr-6 justify-center px-4 py-2 text-sm   font-semibold text-white bg-blue-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={props.closeModal}
                >
                    Cencel
                </button>
                Create Content
            </Dialog.Title>

            <div className="">
                <div className="flex py-10 flex-col items-center w-full">
                    <h1 className="text-lg  text-center  font-medium leading-6 text-white"> &#128546; Are you sure delete account?</h1>
                    <p className="text-md  text-center text-opacity-50 font-medium leading-6 text-white">Please input 
                        <span className="text-white text-opacity-100"> 'genta.ganteng'</span>
                    </p>
                    <input type="confirm" id="confirm" className="bg-[#181818] mt-10 focus:outline-none border-2 border-white border-opacity-0 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="genta.ganteng" required />

                </div>
                {disableButton('disable')}
            </div>
        </div>
    )
}

export default DeleteAccount
