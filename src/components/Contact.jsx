import React from "react";
import { useContext } from "react";
import { DataContext } from "../context";
import Lottie from "lottie-react";
import animationData from "../assets/animation_ene.json";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImXing2 } from "react-icons/im";

const Contact = () => {
  const { light } = useContext(DataContext);
  return (
    <>
      <div
        id="contact"
        className={`h-full flex flex-col items-center py-20  ${
          light ? "bg-slate-800" : "bg-slate-400"
        }`}
      >
        <h2 className="text-2xl sm:text-7xl">Contact Me </h2>
        <div className="flex justify-evenly  items-center w-full pt-10 sm:pt-20">
          <form
            className="flex flex-col sm:w-1/2"
            action="https://formsubmit.co/3a328d9313b35fac68a5d0812ad7b924"
            method="post"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-2 m-2 bg-transparent border-b my-5 outline-none placeholder:text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-2 m-2 bg-transparent border-b my-5 outline-none placeholder:text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-2 m-2 bg-transparent border-b my-5 outline-none placeholder:text-white"
            ></textarea>
            <button
              className="p-2 m-2 border-2 border-white shadow-sm shadow-white text-white rounded-full hover:scale-105 transition-all duration-300 ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="hidden sm:block">
            <Lottie animationData={animationData} />
          </div>
        </div>
      </div>
      <footer
        className={`flex justify-center ${
          light ? "bg-slate-800" : "bg-slate-400"
        }`}
      >
        <div className="flex justify-center gap-4 py-5 border-t w-[90%] ">
          <a
            href="https://github.com/Moataz-hassanein"
            className="text-3xl"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/moataz-hassanein-a25413a0/"
            target="_blank"
            className="text-3xl"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.xing.com/profile/Moataz_Hassanein/cv"
            target="_blank"
            className="text-3xl"
          >
            <ImXing2 />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
