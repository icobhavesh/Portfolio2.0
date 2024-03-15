
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom"
import ParticlesBg from "./Particles";
const Header = () => {
    const [toggle, setToggle] = useState(false)
    //bg-blue-600
    return (
        <div className="    w-full p-4  ">
            <ParticlesBg />
            <div className=" max-w-[1240px] h-200px  flex justify-between items-center m-auto">
                <div className= "space-grotesk  text-white md: text-[30px] ">
                    <h1>Bhavesh</h1>
                </div>
                {/* ToggleSection */}
                {toggle ? (
                    <AiOutlineClose
                        onClick={() => setToggle(!toggle)}
                        className="text-white text-2x md:hidden block "
                    />
                ) : (
                    <AiOutlineMenu
                        onClick={() => setToggle(!toggle)}
                        className="text-white text-2x md:hidden block "
                    />
                )}
                {/*  hidden for sm device  */}
                <ul className=" 
space-grotesk text-bolder hidden md:flex gap-10 text-white  hover:underline ml-0 text-xl  ">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/contact">Contactus</Link>
                </ul>
                {/* //////////navbar for sm using toogle button ///////// */}
                <ul
                    className={`"  anton-regular  
                duration-300 md:hidden gap-4 text-white bg-slate-900 h-screen fixed text-xl 
                top-[58px]  left-[-100%] w-full ${toggle ? "left-[0]" : "left-[-100%]  "
                        }`}
                >
                    <Link to="/" className=" space-grotesk p-3 text-center ">Home</Link>
                    <Link to="/about" className="p-3 text-center">Menu</Link>
                    <Link to="/project" className="p-3 text-center">About</Link>
                    <Link to="/contact" className="p-3 text-center">Contactus</Link>

                </ul>
            </div>
        </div>
    );
};

export default Header;
{/* <div class="w-full h-auto  bg-slate-700 text-white">
  <div class="max-w-[1240px]  justify-between text-black items-center flex h-auto bg-red-200  mx-auto p-4">
    <div class="pl-9">
      <h2>Hello there</h2>
    </div>
    <div class="flex">
      <h1>threedot
    <div class="md:flex hidden mx-auto gap-x-12 list-none ">
  <li class="text-center"> Home</li>
  <li> Home</li>
  <li> Home</li>
  <li> Home</li>
      </div>
      <div class="hidden md:flex">
        <h1>sign up</h1>
      </div>
  </div>
  </div> */}