import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import LogoApp from "../../img/logoAPK.png"
const NavbarUser = () => {
  return (
    <div className="flex justify-between items-center fixed z-10 bg-white py-2 sm:py-3 w-full drop-shadow-md px-2 sm:px-10 border-b border-gray-300 ">
      <Link to={"/"} className="uppercase font-bold text-md sm:text-lg text-orange-300">
      <img src={LogoApp} className='w-20 sm:w-20' alt="" />
      </Link>
      
      <div className="hidden sm:block">

      <Link
        to={"/login"}
        className="font-bold py-1 text-white text-sm rounded-sm flex items-center bg-blue-500 px-6 hover:bg-blue-400 transition"
      >
        Login
      </Link>
      </div>
      <div className="block sm:hidden">

      <Link
        to={"/login"}
        className="font-bold py-1 text-white text-sm rounded-sm flex items-centertransition"
      >
       <FaUserCircle size={25} color='blue'/>
      </Link>
      </div>
    </div>
  );
}

export default NavbarUser