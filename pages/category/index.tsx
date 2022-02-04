import Link from "next/link";
import Navbar from "../../components/molecules/Navbar";

const array = [1, 2, 3, 4, 5]
export default function index() {
  return (
    <div className=" w-full">

      <Navbar />
      <section className=" container px-2 lg:w-2/3 mx-auto">
        <div className="">
          <h1 className="text-white lg:w-2/3 font-bold text-4xl">Find your favorite category!  &#9996;</h1>

        </div>
      </section>
      <section className=" container flex py-10 items-center grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3  px-2 lg:w-2/3 mx-auto">
        {array.map(i => {
          return   <Link href="/category/12">

          <a className="flex bg-gradient-to-r p-[2px] hover:from-[#FFE817]  hover:via-[#ff0080] rounded-lg to-[#7000FF]">

            <div className="flex justify-between p-3 w-full bg-[#181818]  rounded-lg ">
              <div className="flex flex-col">
                <h1 className="text-white  font-bold text-xl">One Piece</h1>
                <span className="  text-white text-xs font-medium text-opacity-50   py-0.5 rounded ">Discusion 20K</span>

                
              </div>

            </div>

          </a>
          </Link>

        })}
      </section>

    </div>
  );
}
