import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";
import CreateContentModal from './display/CreateContentModal';
import DeleteAccount from './display/DeleteAccount';
interface IProps {
    token: any
    type: string
}
export default function Modal(props: IProps) {
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    function layout() {
        if (props.type === 'create-content') {
            return <CreateContentModal closeModal={closeModal} token={props.token} />
        }
        if (props.type === 'delete-account') {
            return <DeleteAccount closeModal={closeModal} />
        }
        return <CreateContentModal closeModal={closeModal} token={props.token} />
    }
    function button() {
        if (props.type === 'create-content') {
            return <button
                type="button"
                onClick={openModal}
                className="block text-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
                Create
            </button>
        }
        if (props.type === 'delete-account') {
            return <button
                type="button"
                id="delete_account"
                onClick={openModal}
                className="inline-flex justify-center px-4 py-2 text-sm   font-semibold text-red-500 bg-red-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"

            >
                Deleted Account
            </button>
        }
        return <button
            type="button"
            onClick={openModal}
            className="block text-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
            Create
        </button>
    }

    return (
        <>
            <div className="">
                {button()}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 bg-black bg-opacity-50  overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#222222] shadow-xl rounded-2xl">
                               
                                {layout()}

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
