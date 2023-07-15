import { useState, useContext } from "react";
import { DataContext } from "../context";
import { motion } from "framer-motion";
import { projects } from "../data/data";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const { light } = useContext(DataContext);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
    setSelectedCategory(category);
  };
  return (
    <div
      id="projects"
      className={`h-full flex flex-col justify-center sm:p-20 px-7  ${
        light ? "bg-slate-800" : "bg-slate-400"
      }`}
    >
      <h2 className="text-4xl text-center sm:text-7xl ">Projects</h2>
      <div className="mt-10 border-b w-fit pb-2">
        {["All", "HTML&CSS", "JavaScript", "React", "FullStack"].map(
          (category) => (
            <button
              key={category}
              className={` rounded-full p-0.5 m-1 sm:p-2 sm:m-2 text-xs  sm:text-xl ${
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
      <div className="sm:grid sm:grid-cols-2 sm:gap-10 justify-items-center  pt-8 hidden">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="flip-card w-48 h-48 pb-2 sm:w-72 sm:h-72 cursor-pointer"
          >
            <motion.div
              className="flip-card-inner"
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ rotateY: 180 }}
            >
              <div className="flip-card-front rounded-full">
                <h2 className="text-2xl">{project.name}</h2>
              </div>
              <a
                href={project.link}
                target="_blank"
                className="flip-card-back rounded-md"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.87)",
                }}
              ></a>
            </motion.div>
          </div>
        ))}
      </div>
      {/* mobile version */}
      <div className="sm:hidden flex flex-col items-center pt-8">
        {filteredProjects.map((project, index) => (
          <>
            <h3>{project.name}</h3>
            <a
              key={index}
              href={project.link}
              target="_blank"
              className="w-48 h-48 flex justify-center my-5 rounded-md "
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.87)",
              }}
            ></a>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
