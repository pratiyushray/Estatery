import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../Components/Navbar.css';
import avatar from "../assets/avatar.jpg";

function Navbar() {

    //USE STATE FUNCTION FOR TOGGLE SIDE NAVBAR
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  
    const autoClose=()=>{
      setNav(!nav);
    }
  
  

  return (    

    //NAVBAR COMPONENT
  
      <div className='flex navBarContainer items-center h-20 mx-auto px-4 text-black bg-[#ffffff] font-sans'>
          {/* <img src={logo} className="mr-3 sm:h-9 w-12 h-12" alt="RecipeBook" /> */}
          <h1 className="appName w-full mb-8 text-sm font-bold leading-none tracking-normal mt-7 mr-10 text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50"><span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-600 to-red-600 lg:inline">Estatery</span></h1>
          <ul className='hidden md:flex space-x-10'>
            <Link to="/" className='block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Home</Link>
            <Link to="/rent" className='block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Rent</Link>
            <Link to="/buy" className='block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Buy</Link>
            <Link to="/sell" className='block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Sell</Link>
            <Link to="/contact" className='block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold mt-3'>Contact</Link>
            <Link to="/login" type="button" className="loginBtn mt-1 text-white bg-gradient-to-r from-purple-600 to-red-600 hover:bg-gradient-to-l dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</Link>
            <Link to="/signup" type="button" className="loginBtn mt-1 text-white bg-gradient-to-r from-purple-600 to-red-600 hover:bg-gradient-to-l dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign up</Link>
          </ul>
          <div onClick={handleNav} className='block md:hidden'>
              {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
          </div>
          <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-white bg-[#fafafa] ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%] z-10'}>
              <h1 className="appName w-full mb-2 text-sm font-bold leading-none tracking-normal mt-4 mr-10 ml-3 text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50 "><span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-600 to-red-600 lg:inline">Estatery</span></h1>
              <span className='flex items-center '><img className='w-10 h-10 rounded-full ml-5 mr-4 mb-2 mt-2' src={avatar} alt="" /><span>Hi, Guest</span></span>
              <li className='p-4 ml-2 font-bold' onClick={autoClose}><Link to="/">Home</Link></li>
              <li className='p-4 ml-2 font-bold' onClick={autoClose}><Link to="/rent">Rent</Link></li>
              <li className='p-4 ml-2 font-bold' onClick={autoClose}><Link to="/buy">Buy</Link></li>
              <li className='p-4 ml-2 font-bold' onClick={autoClose}><Link to="/sell">Sell</Link></li>
              <li className='p-4 ml-2 font-bold' onClick={autoClose}><Link to="/contact">Contact</Link></li>
              <li className='p-4 ml-2 font-bold' onClick={autoClose}><Link to="/login">Login/SignUp</Link></li>

          </ul>
        </div>

  )
}

export default Navbar