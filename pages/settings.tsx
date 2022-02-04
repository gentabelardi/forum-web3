import Navbar from "../components/molecules/Navbar";
import cookie from 'cookie'
const array = [1, 2, 3, 4, 5]
import { useForm } from "react-hook-form";
import Modal from "../components/molecules/Modal";

export async function getServerSideProps(ctx: any) {
    const { token } = cookie.parse(ctx.req.headers.cookie || "")

    const req = await fetch("http://localhost:3000/api/users/getUserApi", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + token,
        },
    });
    const res = await req.json();
    return {
        props: {
            token,
            user: res.data,
        },
    };
}
interface IProps {
    token: any;
    user: any
}

export default function search(props: IProps) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    async function handlePpdateAccount(data: any) {
        const { displayName, username, bio } = data
        console.log(data)
        const token = props.token
        let dataContent = await fetch('/api/users/upadetUserApi', {
            method: 'POST',
            body: JSON.stringify({
                displayName,
                username,
                bio
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        })
    }
    return (
        <div className=" w-full">

            <Navbar token={props.token} />

            <section className=" container pt-5 pb-10 space-y-2  px-2 lg:w-2/3 mx-auto">
                <div className="mb-5">
                    <h1 className="text-white lg:w-2/3 font-bold text-2xl">Settings </h1>
                </div>
                <div className="mt-5">
                    <label htmlFor="profile" className="block mb-2 text-sm  text-opacity-50 font-medium text-white dark:text-gray-300">Your Profile</label>
                    <div className="flex  w-full mb-6 grid grid-cols-3 lg:grid-cols-5 gap-2">
                        <div id="profile" className="inline-block radio">
                            <input
                                type="radio"
                                id="A1"
                                name="collection"
                                hidden={true}
                                value="B"
                            />
                            <label
                                htmlFor="A1"
                                className="space-y-2 bg-[#181818] h-24 px-3 py-2 text-center items-center rounded-lg flex flex-col justify-center items-center  font-bold   "
                            >
                                <img className="rounded-full w-16 h-16" src="./dummy/dummy-1.png" alt="user photo" />
                            </label>
                        </div>
                        <div className="inline-block radio">
                            <input
                                type="radio"
                                id="B1"
                                name="collection"
                                hidden={true}
                                value="Basdasdasd"
                            />
                            <label
                                htmlFor="B1"
                                className="space-y-2 bg-[#181818] h-24 px-3 py-2 text-center items-center rounded-lg flex flex-col justify-center items-center  font-bold   "
                            >
                                <img className="rounded-full w-16 h-16" src="./dummy/dummy-2.png" alt="user photo" />
                            </label>
                        </div>


                    </div>
                    <form onSubmit={handleSubmit(handlePpdateAccount)}>
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm  text-opacity-50 font-medium text-white dark:text-gray-300">Your Name</label>
                            <input {...register("displayName")} type="title" id="title" className="bg-[#181818] focus:outline-none border-2 border-white border-opacity-0 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={props.user.displayName} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm  text-opacity-50 font-medium text-white dark:text-gray-300">Your Id Nmae</label>
                            <input {...register("username")} type="title" id="title" className="bg-[#181818] focus:outline-none border-2 border-white border-opacity-0 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={props.user.username} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="content" className="block mb-2 text-sm text-opacity-50 font-medium text-white dark:text-gray-300">Your bio</label>
                            <textarea {...register("bio")} id="content" rows={4} className="bg-[#181818] focus:outline-none border-2 border-white border-opacity-0 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={props.user.bio}></textarea>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex mb-10 justify-center px-4 py-2 text-sm   font-semibold text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"

                        >
                            Save
                        </button>
                    </form>
                    <div className="mt-6">
                        <label htmlFor="delete_account" className="block mb-2 text-sm text-opacity-50 font-medium text-white dark:text-gray-300">Delete Account</label>
                        <Modal token={props.token} type="delete-account"/>

                    </div>
                </div>

            </section>

        </div>
    );
}
