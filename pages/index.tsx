import type { NextPage } from 'next'
import Link from 'next/link'
import Navbar from '../components/molecules/Navbar'
const array = [1, 2, 3, 4, 5]

const Home: NextPage = () => {
  return (
    <div className=" w-full">

    <Navbar />
    <section className=" container px-2 lg:w-2/3 mx-auto">
      <div className="">
        <h1 className="text-white lg:w-2/3 font-bold text-4xl">Welcome to my forum, enjoy your community  &#129409;</h1>

      </div>
    </section>
    <section className=" container py-10 space-y-2  px-2 lg:w-2/3 mx-auto">
      {array.map(i => {
        return<Link href="/content/12">
          <a className="flex w-full bg-gradient-to-r p-[3px] hover:from-[#FFE817]  hover:via-[#ff0080] rounded-lg to-[#7000FF]">

            <div className="flex justify-between p-3 w-full bg-[#181818]  rounded-lg ">
              <div className="flex flex-col">
                <h1 className="text-white  font-bold text-xl">Theory one piece 2022</h1>
                <p className="text-white text-opacity-50 text-ellipsis	   overflow-hidden truncate w-52 font-medium text-sm">New chapter one piece 2022</p>

                <div className="flex mt-5 space-x-2">
                  <span className="bg-white bg-opacity-10   text-white text-xs font-semibold  px-2 py-0.5 rounded ">Minecraft</span>
                  <span className="  text-white text-xs font-semibold   py-0.5 rounded ">200 Comment</span>
                  <span className="  text-white text-xs font-semibold   py-0.5 rounded ">- @Alice</span>

                </div>
              </div>
              <p className="text-white text-opacity-50 font-medium text-xs">20 juney 2021</p>

            </div>

          </a>
        </Link>



      })}
    </section>

  </div>
  )
}

export default Home
