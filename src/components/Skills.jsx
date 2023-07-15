import React, { useState, useContext } from "react";
import { DataContext } from "../context";
import { skills } from "../data/data";
import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("FullStack");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const { light } = useContext(DataContext);

  const handleFilter = (category) => {
    if (category === "FullStack") {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter((skill) => skill.category === category);
      setFilteredSkills(filtered);
    }
    setSelectedCategory(category);
  };

  return (
    <div
      id="skills"
      className={`h-[80vh] flex flex-col items-center gap-10 sm:gap-0 sm:justify-evenly  ${
        light ? "bg-slate-800" : "bg-slate-400"
      }`}
    >
      <motion.div
        className="flex items-center border-2 border-[#008080] rounded-full px-4 py-2 m-2 text-lg text-center sm:text-4xl "
        style={{ boxShadow: "0px 0px 10px 0px rgba(0,128,128,0.39)" }}
        initial={{ x: "+10vw", opacity: 0 }}
        whileInView={{ x: -20, opacity: 1 }}
        transition={{ duration: 3, type: "spring", stiffness: 40 }}
      >
        <FiCode className="mr-2 " />
        My Skills:
      </motion.div>

      <div className="border-b pb-3 sm:pb-0.2 border-white">
        {["FullStack", "Front-end", "Back-end", "Database", "Design"].map(
          (category) => (
            <button
              key={category}
              className={`  rounded-full p-0.5 m-0.3 sm:p-2 sm:m-2 text-xs  sm:text-xl ${
                category === selectedCategory
                  ? " text-[#008080]"
                  : "border-2 border-white shadow-sm shadow-white text-white "
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="flex flex-wrap justify-center ml-8">
        {filteredSkills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              initial={{ x: "-10vw", opacity: 0 }}
              whileInView={{ x: -20, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 40,
                delay: index * 0.1,
              }}
              className="flex items-center border-2 border-[#008080]  rounded-full sm:px-4 sm:py-2 sm:m-2 text-sm sm:text-lg mr-4 mt-3 p-1"
            >
              <Icon className="mr-2 animate-spin " />

              {skill.name}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
