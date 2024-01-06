import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className=" flex items-center  justify-between  py-4 px-2 bg-sky-500 ">

      <div className="">
        <Link to="/">
          <h1 className="font-bold text-4xl font-body">MOG</h1>
        </Link>
      </div>

      <div>
        <button className="relative group">
          <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-900 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
              <div className="bg-white h-[1px] rounded"></div>
              <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
