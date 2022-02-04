import Navbar from "../components/molecules/Navbar";
import Link from 'next/link'
import { useRouter } from 'next/router'
import cookie from 'cookie'

const array = [1, 2, 3, 4, 5]
export async function getServerSideProps(ctx: any) {
  const {token} = cookie.parse(ctx.req.headers.cookie || "")
 
  const req = await fetch("http://localhost:3000/api/users/getUserApi", {
    method: "GET",
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

export default function profile(props: IProps) {
  const router = useRouter()
  const { users } = router.query

  function action(type: string) {
    if (users === "undefined") {
      return <Link href="/settings">
        <a
          className="inline-flex ml-5 justify-center px-4 py-2 text-sm   font-semibold text-white bg-white bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Edit
        </a>
      </Link>

    }
    return <button
      type="button"
      className="inline-flex ml-5 justify-center px-4 py-2 text-sm   font-semibold text-red-500 bg-red-700 bg-opacity-10 border border-transparent rounded-md hover:bg-opacity-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      Report
    </button>
  }
  return (
    <div className=" w-full">

      <Navbar token={props.token}/>
      <section className=" container px-2 lg:w-2/3 mx-auto">
        <div className="flex">
          <div className="inline-flex justify-center p-2 text-sm font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

            <img className="w-32 h-32 rounded-full" src="/dummy/dummy-2.png" alt="user photo" />
          </div>
          <div className="flex flex-col ml-5">
            <div className="flex">
              <h1 className="  text-white text-lg font-semibold   py-0.5 rounded ">{props.user.displayName}</h1>
              {action("edit")}

            </div>
            <span className="  text-white text-opacity-50 text-xs font-medium   py-0.5 rounded ">{`@${props.user.username}`}</span>
            <p className="  text-white text-opacity-50 text-md font-reguler   py-0.5 rounded ">hallo saya adalah kumpulan teori teori</p>
          </div>

        </div>
      </section>
      <section className=" container py-10 space-y-2  px-2 lg:w-2/3 mx-auto">
        {array.map(i => {
          return <Link href="/content/12">
            <a className="flex w-full bg-gradient-to-r p-[2px] hover:from-[#FFE817]  hover:via-[#ff0080] rounded-lg to-[#7000FF]">

              <div className="flex justify-between p-3 w-full bg-[#181818]  rounded-lg ">
                <div className="flex flex-col">
                  <h1 className="text-white  font-bold text-xl">Peter parker anak buah big mom</h1>
                  <p className="text-white text-opacity-50 text-ellipsis	   overflow-hidden truncate w-52 font-medium text-sm">From Series A to D at a $2.5B valuation, 30 to 150+ employees, here’s my Vercel story.</p>

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
  );
}
