import Link from "next/link";
import Dropdown from "../Dropdown";
import Modal from "../Modal";
import { useRouter } from "next/router";
interface IProps {
    token: any
}
export default function Navbar(props: IProps) {
    const router = useRouter();

    let activeClassName = "block text-lg py-2 pr-4 pl-3 text-blue-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0  "
    let nonActiveClassName = "block text-lg py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0  "

    return (
        <nav className=" border-gray-200 px-2 sm:px-4 py-10 ">
            <div className="container flex lg:w-2/3 flex-wrap justify-between items-center mx-auto">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <a>
                            <h1 className="self-center text-xl font-semibold whitespace-nowrap text-white">Forumx</h1>

                        </a>
                    </Link>


                    <div className="hidden lg:block">
                        <ul className="flex flex-col mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link href="/category">
                                    <a className={`${router.pathname == "/category" ? activeClassName : nonActiveClassName}`}>

                                        Category
                                    </a>

                                </Link>



                            </li>
                            <li>
                                <Link href="/trends">
                                    <a className={`${router.pathname == "/trends" ? activeClassName : nonActiveClassName}`}>

                                        Trends
                                    </a>

                                </Link>
                            </li>
                            <li>
                                <Modal type="create-content" token={props.token}/>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="flex md:order-2 items-center space-x-5">
                    <div className="hidden relative mr-3 md:mr-0 md:block">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="email-adress-icon" className="block p-2 pl-10 w-full text-white bg-white bg-opacity-10 rounded-full text-white sm:text-sm  shadow-sm  placeholder-slate-400 focus:outline-none  focus:ring-blue-500 block w-full rounded-full sm:text-sm focus:ring-2 " placeholder="Search..." />
                    </div>
                    <Dropdown />
                    <button data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>


            </div>
        </nav>

    );
}
