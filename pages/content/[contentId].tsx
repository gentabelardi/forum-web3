import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '../../components/molecules/Navbar'

export default function one() {
    const router = useRouter()
    const { users } = router.query
    function action(type: string) {
        if (type === "delete") {
            return <button
                type="button"
                className="inline-flex ml-3 justify-center px-4 py-2 text-sm   font-semibold text-red-500 bg-red-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
                delete
            </button>
        }
        return <button
            type="button"
            className="inline-flex ml-3 justify-center px-4 py-2 text-sm   font-semibold text-red-500 bg-red-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
            report
        </button>
    }
    return <div className=" w-full">

        <Navbar />
        <div className="pt-5 pb-10">
            <section className=" container px-2 lg:w-2/3 mx-auto">
                <div className="">
                    <h1 className="text-white w-2/3 font-bold text-4xl">
                        Apa benar Crocodile ibunya luffy?</h1>

                </div>
            </section>
            <section className=" container space-y-2 mt-5 px-2 lg:w-2/3 mx-auto">
                <div className="flex justify-between  hover:border-opacity-100 rounded-lg ">
                    <div className="flex flex-col">
                        <p className="text-white  font-regular text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className="flex mt-5 space-x-2">
                            <span className="bg-white bg-opacity-10   text-white text-xs font-semibold  px-2 py-0.5 rounded ">Minecraft</span>
                            <span className="  text-white text-xs font-semibold   py-0.5 rounded ">200 Comment</span>
                            <span className="  text-white text-xs font-semibold   py-0.5 rounded ">- 20 juney 2022</span>

                        </div>
                        <div className="flex mt-5 items-center">
                            <Link href="/ganteng">

                                <a className="flex border-4 px-2 py-1 items-start  rounded-lg border-blue-600 border-opacity-0 focus:border-blue-600">
                                    <img className="w-8 h-8 rounded-full" src="/dummy/dummy-1.png" alt="user photo" />
                                    <div className="flex flex-col ml-3 ">
                                        <h1 className="  text-white text-sm font-semibold    rounded ">Alice agatha</h1>
                                        <span className="  text-white text-opacity-50 text-xs font-medium    rounded ">@Alice</span>
                                    </div>

                                </a></Link>
                            <div className="flex">
                                {action("delete")}
                                <button
                                    type="button"
                                    className="inline-flex ml-3 flex items-senter justify-center px-4 py-2 text-sm   font-semibold text-blue-500 bg-blue-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z" /><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" fill="rgba(0,100,255,1)" /></svg>
                                    10K
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className=" container items-start   mt-10 px-2 lg:w-2/3 mx-auto">
                <h1 className=" mb-5 text-white text-lg font-semibold rounded ">Discussion (5)</h1>

                <div className="flex ">

                    <img className="w-8 h-8 rounded-full mr-5" src="/dummy/dummy-1.png" alt="user photo" />
                    <textarea id="comment" rows={4} className="block border-4 px-2 rounded-lg border-blue-600 border-opacity-0 focus:border-blue-600 p-2.5 w-full text-sm text-white focus:outline-none bg-[#181818] rounded-lg  focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
                </div>

            </section>
            <section className=" container space-y-2 mt-5 px-2 lg:w-2/3 mx-auto">
                <div className="flex justify-between  hover:border-opacity-100 rounded-lg ">
                    <div className="flex flex-col">
                        <div className="flex mt-5 items-start">
                            <img className="w-6 h-6 rounded-full" src="/dummy/dummy-1.png" alt="user photo" />
                            <div className="flex flex-col ml-3">
                                <Link href="/ganteng">
                                    <a className="flex flex-col   ">
                                        <h1 className="  text-white text-sm font-semibold    rounded ">Alice agatha</h1>
                                        <span className="  text-white text-opacity-50 text-xs font-medium    rounded ">@Alice</span>
                                    </a></Link>
                                <p className="text-white mt-3 font-regular text-sm">Munkin hhhh</p>
                                <span className="mt-3  text-white text-opacity-50 text-xs font-medium    rounded ">20h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
}