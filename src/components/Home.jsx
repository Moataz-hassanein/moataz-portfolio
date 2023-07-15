import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation_ljy9thbp.json";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const text = "Hi, I'm Moataz";
  const des = "I make Websites";
  const { light } = useContext(DataContext);

  return (
    <div id="home" className={light ? "bg-slate-800" : "bg-slate-400"}>
      <div className=" h-[88vh]   flex flex-col justify-center gap-10 items-center sm:flex-row">
        <div className="sm:w-2/4 px-3">
          <h1 className="text-3xl  sm:text-6xl sm:w-full">
            {text.split("").map((letter, index) => (
              <motion.span
                className="inline-block pr-1"
                key={index}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <div className="sm:w-full">
              {des.split("").map((letter, index) => (
                <motion.span
                  className="inline-block pr-1"
                  key={index}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </h1>
          <p className="text-sm sm:text-base mt-4">
            Passionate Web developer specialized in Front end, crafting engaging
            websites with a focus on user experience. Stay updated with the
            latest trends for modern, user-friendly web experiences.
          </p>
          <div
            className="flex items-center gap-1 border-2 border-[#008080] rounded-full px-2 py-1 w-fit mt-2 hover:bg-white cursor-pointer"
            style={{ boxShadow: "0px 0px 10px 0px rgba(0,128,128,0.39)" }}
          >
            <a href="/resume.pdf" download={true}>
              Resume
            </a>
            <BsFillPersonLinesFill />
          </div>
        </div>
        <div className="sm:w-2/5">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
