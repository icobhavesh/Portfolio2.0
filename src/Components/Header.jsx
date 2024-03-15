
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
                <div className="space-grotesk  text-white md: text-[30px] ">
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
                    <Link to="/contact">Contact</Link>
                </ul>
                {/* //////////navbar for sm using toogle button ///////// */}
                <ul
                    className={`"  anton-regular  
                duration-300 md:hidden gap-4  flex justify-between text-white bg-slate-950 h-autofixed text-xl 
                top-[58px]  left-[-100%] w-full ${toggle ? "left-[0]" : "left-[-100%]  "
                        }`}
                >
                    <Link to="/" className=" space-grotesk p-3 text-center ">Home</Link>
                    <Link to="/about" className=" space-grotesk p-3 text-center ">About</Link>
                    <Link to="/project" className=" space-grotesk p-3 text-center ">Project</Link>
                    <Link to="/contact" className=" space-grotesk p-3 text-center ">Contact</Link>


                </ul>
            </div>
        </div>
    );
};


export default Header;
