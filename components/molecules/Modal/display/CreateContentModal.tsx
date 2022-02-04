import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";

interface IProps {
    token: any
    closeModal: any
}

function CreateContentModal(props: IProps) {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function createContent(data: any) {
        const { title, description } = data
        const token = props.token

        // Get the visitor name set in the cookie
        let dataContent = await fetch('/api/content/createContentApi', {
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        })
        // router.push('/undefine')

    }
    return (
        <div >
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-white"
            >
                <button
                    type="button"
                    className="inline-flex mr-6 justify-center px-4 py-2 text-sm   font-semibold text-red-500 bg-red-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={props.closeModal}
                >
                    Cencel
                </button>
                Create Content
            </Dialog.Title>
            <form onSubmit={handleSubmit(createContent)}>
                <div className="mt-5">
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm  text-opacity-50 font-medium text-white dark:text-gray-300">Your title</label>
                        <input  {...register("title")} type="title" id="title" className="bg-[#181818] focus:outline-none border-2 border-white border-opacity-0 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="title content" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="content" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your content</label>
                        <textarea {...register("description")} id="content" rows={4} className="bg-[#181818] focus:outline-none border-2 border-white border-opacity-0 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Leave a comment..."></textarea>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="category" className="block mb-2 text-sm  text-opacity-50 font-medium text-white dark:text-gray-300">Your category</label>
                        <input  {...register("category")} type="category" id="category" className="bg-[#181818] focus:outline-none border-2 border-white border-opacity-0 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="category content" required />
                    </div>
                </div>

                <button className="inline-flex justify-center px-4 py-2 text-sm   font-semibold text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    type="submit" >Create</button>
            </form>

        </div>
    )
}

export default CreateContentModal
