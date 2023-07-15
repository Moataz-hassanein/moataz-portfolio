import { useState, useContext } from "react";
import Logo from "../assets/logo.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { DataContext } from "../context";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { light, setLight } = useContext(DataContext);

  const lightBg = () => {
    setLight(false);
  };
  const darkBg = () => {
    setLight(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={`h-[12vh] flex justify-evenly items-center py-3  shadow-[rgba(0,_0,_0,_0.3)_0px_5px_15px] sticky top-0 z-50 ${
        light ? "bg-slate-800" : "bg-slate-400"
      }`}
    >
      <div className="w-2/12">
        <img className="" src={Logo} alt="logo" />
      </div>
      <MdLightMode
        className="text-xl text-white cursor-pointer"
        onClick={lightBg}
      />
      <MdDarkMode className="text-xl cursor-pointer" onClick={darkBg} />
      <div className="sm:hidden">
        <button
          className="flex items-center justify-center p-2 rounded-md bg-gray-200 hover:bg-gray-300"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-30 right-0 mt-4 p-4 w-full h-[87vh] bg-white rounded-md shadow-lg">
            <ul className="flex flex-col gap-4 items-center">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className="hidden sm:flex  gap-4 items-center ">
        <li>
          <a className="underline-hover-effect" href="#home">
            Home
          </a>
        </li>

        <li>
          <a className="underline-hover-effect" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="underline-hover-effect" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="underline-hover-effect" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
