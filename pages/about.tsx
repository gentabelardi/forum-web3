import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function about() {
    return (
        <div className=" w-full py-10">
            <section className=" container px-2 lg:w-2/4 mx-auto">
                <div className="">
                    <h1 className="text-white w-2/3 font-bold text-4xl">
                        About us
                    </h1>
                    <p className="text-white mt-3  font-medium text-lg">Are you tired of being alone &#128549; and trying to find entertainment on social media but nothing interesting, that's why I created this forum to give you a different experience. You are free to ask questions in this forum without offending others.
                    </p>
                    <p className="text-white mt-3  font-medium text-lg">&#128678; You want to be respected, respect others, so in this forum we respect the feelings of each of our team.
                    </p>
                    <p className="text-white mt-3 items-center flex font-medium text-lg">&#9996; you have suggestions or there is a bug you can report to
                        <a target="_blank" href="https://twitter.com/BelardiGenta" className="text-blue-400 border-4 px-2 rounded-lg border-blue-600 border-opacity-0 focus:border-blue-600 items-center flex   font-medium text-lg">
                            Twitter  </a>
                    </p>
                    <span className="text-white mt-3  font-regular text-sm">(You can also give suggestions for new features)


                    </span>
                    <p className="text-white mt-3  font-medium text-lg">&#128542; This website is done alone without a partner, I just feel bored with social media now so I made this website to relieve my boredom

                    </p>

                </div>
            </section>
            <section className=" container  space-y-2 mt-20 px-2 lg:w-2/4 mx-auto">
                <h1 className="text-white w-2/3 font-bold text-4xl">
                    Feature
                </h1>
                <div className="flex flex-col">
                    <p className="text-white my-3  font-medium text-lg">You can find interesting discussions for you

                    </p>
                    <Image src="/assets/background/home.png" alt="Picture of the author"
                        priority
                        width={660}
                        height={393}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-white my-3  font-medium text-lg">You can find categories that interest you


                    </p>
                    <Image src="/assets/background/category.png" alt="Picture of the author"
                        priority
                        width={660}
                        height={393}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-white my-3  font-medium text-lg">You can find trends that interest you


                    </p>
                    <Image src="/assets/background/trends.png" alt="Picture of the author"
                        priority
                        width={660}
                        height={393}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-white my-3  font-medium text-lg">You can find trends that interest you


                    </p>
                    <Image src="/assets/background/connect.png" alt="Picture of the author"
                        priority
                        width={660}
                        height={393}
                    />
                </div>
            </section>
            <section className=" container  space-y-2 mt-20 lg:w-2/4 mx-auto">
          
                <div className="flex flex-col  mt-12">
              
                    <div className="flex">
                        <Link href="/connect">
                            <a className="text-blue-400 border-4 px-1 rounded-lg border-blue-600 border-opacity-0 focus:border-blue-600 items-center flex mt-2  font-medium text-lg">
                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgba(0,146,255,1)" /></svg>
                                Back to connect
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default about
