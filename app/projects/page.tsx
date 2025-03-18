"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { PiArrowSquareUpRightFill } from "react-icons/pi";
import { motion } from "framer-motion";

// Import the projects array from the separate file
import { projects } from "../data/projectsData"; // Adjust the path as needed

const ProjectsPage = () => {
  // Extract unique skill categories
  const categories: string[] = [
    "All",
    ...Array.from(
      new Set(
        projects.flatMap((project) => project.skill?.map((s) => s.skills) || [])
      )
    ),
  ];

  // State for filtering and pagination
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.skill?.some((skill) => skill.skills === activeFilter)
        )
      );
    }
    // Reset visible count when filter changes
    setVisibleProjects(4);
  }, [activeFilter]);

  // Handler to load more projects
  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => prevCount + 4);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-justify">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-orange-300 font-semibold">
          <h1>Projects📈</h1>
        </div>
      </motion.div>

      <div className="lg:text-[14px] text-[12px] mb-6">
        <h2 className="my-4 leading-relaxed">
          I am currently in the learning phase
          <span className="ml-1 inline-block">🔎</span>, having practiced
          several projects and continuing to do so to enhance my skills
          <span className="ml-1 inline-block">🚀</span>. I want to get really
          good at what Im learning and do more projects in the future
          <span className="ml-1 inline-block">💘</span>.
        </h2>
      </div>

      {/* Improved Category Filter */}
      <motion.div
        className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-md dark:shadow-gray-800/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-orange-300">
            Filter by skills
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2  bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs md:text-sm transition-all duration-300"
          >
            {activeFilter}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Dropdown Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isDropdownOpen ? "auto" : 0,
            opacity: isDropdownOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveFilter(category);
                  setIsDropdownOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeFilter === category
                    ? "bg-orange-400 text-white shadow-md"
                    : "bg-white/5 backdrop-blur-sm border border-gray-700 hover:border-orange-400 hover:bg-orange-400/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Project Cards Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex flex-col overflow-hidden rounded-xl shadow-md dark:shadow-gray-800/30 hover:shadow-lg hover:shadow-amber-600/30 transition-all duration-300 ease-in-out bg-white/5 backdrop-blur-sm"
            >
              {/* Image Section */}
              <div className="w-full h-48 relative overflow-hidden">
                <Link
                  href={project.live}
                  target="_blank"
                  className="block h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-sm p-3 font-medium">
                      View Project
                    </span>
                  </div>
                </Link>
              </div>

              {/* Text Section */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h1 className="text-lg sm:text-xl text-amber-400 font-bold mb-3">
                    <span className="text-orange-500">{project.name}</span>
                    <span className="text-green-700">.</span>
                  </h1>

                  <h3 className="text-xs sm:text-sm mb-3 line-clamp-2">
                    {project.description}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mb-4 line-clamp-2">
                    {project.learn}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skill?.map((item, skillIndex) => (
                      <span
                        key={skillIndex}
                        onClick={() => setActiveFilter(item.skills)}
                        className={`border border-gray-700 rounded-full px-3 py-1 text-[8px] sm:text-[10px] 
                          hover:bg-orange-400/10 hover:border-orange-400 transition-colors duration-300 cursor-pointer
                          ${
                            activeFilter === item.skills
                              ? "border-orange-400 bg-orange-400/10"
                              : ""
                          }`}
                      >
                        {item.skills}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Section - Moved to bottom */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-700/30">
                  <span className="text-xs text-gray-400">View Project</span>
                  <div className="flex space-x-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="group flex items-center gap-1"
                    >
                      <IoLogoGithub
                        size={18}
                        className="transition-transform group-hover:text-orange-400"
                      />
                      <span className="text-xs group-hover:text-orange-400">
                        GitHub
                      </span>
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      className="group flex items-center gap-1"
                    >
                      <PiArrowSquareUpRightFill
                        size={18}
                        className="transition-transform group-hover:text-orange-400"
                      />
                      <span className="text-xs group-hover:text-orange-400">
                        Live
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 bg-white/5 backdrop-blur-sm rounded-xl">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No projects found with this filter.
          </p>
          <button
            onClick={() => setActiveFilter("All")}
            className="mt-4 text-orange-400 hover:underline"
          >
            Show all projects
          </button>
        </div>
      )}

      {/* "See More Projects" Button - only show if there are more filtered projects to load */}
      {visibleProjects < filteredProjects.length && (
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            className="bg-orange-400 text-white py-2 px-6 rounded-full hover:bg-orange-300 transition-colors duration-300 shadow-md hover:shadow-orange-400/30"
          >
            See More Projects
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
