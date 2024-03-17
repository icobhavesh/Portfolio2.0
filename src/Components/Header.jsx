import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ParticlesBg from "./Particles";
import "../index.css"
const Header = () => {
    const [toggle, setToggle] = useState(false);
    
    const handleLinkClick = () => {
        // Close the navbar when a link is clicked
        setToggle(false);
    };

    return (
        <div className="w-full p-4">
            <ParticlesBg />
            <div className="max-w-[1240px] h-200px flex justify-between items-center m-auto">
                <div className="text-white md:text-[30px] space-grotesk">
                    <h1>Bhavesh</h1>
                </div>
                {/* ToggleSection */}
                {toggle ? (
                    <AiOutlineClose
                        onClick={() => setToggle(!toggle)}
                        className="text-white text-2x md:hidden block"
                    />
                ) : (
                    <AiOutlineMenu
                        onClick={() => setToggle(!toggle)}
                        className="text-white text-2x md:hidden block"
                    />
                )}
                {/* hidden for sm device */}
                <ul className="space-grotesk text-bolder hidden md:flex gap-10 text-white hover:underline hover:text-purple-500 cursor-pointer navLink ml-0 text-xl">
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                    <Link to="/about" onClick={handleLinkClick}>About</Link>
                    <Link to="/project" onClick={handleLinkClick}>Project</Link>
                    <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                </ul>
                {/* //////////navbar for sm using toggle button ///////// */}
                <ul className={`duration-300 md:hidden gap-2 l navLink text-white flex flex-col bg-slate-950 h-screen fixed text-xl top-[58px] left-[-100%] w-full ${toggle ? "left-[0]" : "left-[-100%]"}`}>
                    <Link to="/" className="space-grotesk p-3 text-center" onClick={handleLinkClick}>Home</Link>
                    <Link to="/about" className="space-grotesk p-3 text-center" onClick={handleLinkClick}>About</Link>
                    <Link to="/project" className="space-grotesk p-3 text-center" onClick={handleLinkClick}>Project</Link>
                    <Link to="/contact" className="space-grotesk p-3 text-center" onClick={handleLinkClick}>Contact</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
