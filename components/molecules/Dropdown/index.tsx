import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Dropdown() {
    const router = useRouter();
    const {users} = router.query
    const  handleLogOut = async () => {
        await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
        router.push('/connect')
    }
    let activeClassName = "group flex bg-[#222222] text-white rounded-md font-medium items-center w-full px-2 py-2 text-sm"
    let nonActiveClassName = "group flex text-white rounded-md font-medium hover:bg-[#222222] items-center w-full px-2 py-2 text-sm "
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center p-2 text-sm font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

                        <img className="w-10 h-10 rounded-full" src="/dummy/dummy-2.png" alt="user photo" />

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-[#181818] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                            <Link href="/undefined">
                                            <a className={`${users == "undefined" ? activeClassName : nonActiveClassName}`}>
        
                                                Profile
                                            </a>
        
                                        </Link>
        
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                      <Link href="/settings">
                                      <a className={`${router.pathname == "/settings" ? activeClassName : nonActiveClassName}`}>
  
                                          Settings
                                      </a>
  
                                  </Link>

                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                            
                                            <button  onClick={handleLogOut} className={`${router.pathname == "/connect" ? activeClassName : nonActiveClassName}`}>
        
                                                Log-out
                                            </button>
        
  
                                )}
                            </Menu.Item>
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
