import Image from "next/image";

import carrental from "./car.png";
import flutterapp from "./flutter.png";
import game from "./game.png";
import portfolio from "./portfolio.png";
import todo from "./todo.png";
import tasks from "./tasks.png";
import sidenav from "./Twitter.png";
import algoVisualizer from "./algoVisualizer.png";
import Link from "next/link";

import { IoLogoGithub } from "react-icons/io";
import { PiArrowSquareUpRightFill } from "react-icons/pi";

const ProjectsPage = () => {
  // list of projects
  const projects = [
    {
      name: "Sorting Algo Visulizer",
      image: algoVisualizer,
      description:
        "This is a small project wich shows the visualization of the different sorting algorithms",
      learn: "Different Sorting Algos, Dark and Light Themes, Animations",
      skill: [
        {
          skills: "Next Js",
        },
        {
          skills: "Sorting Algos",
        },
        {
          skills: "Hooks",
        },
        {
          skills: "Animations",
        },
      ],

      github: "https://github.com/Mbalajiviswanadh/Algorithm-Visualizer",
      live: "https://algorithm-visualizer-psi-two.vercel.app/",
    },
    {
      name: "Match the Cards",
      image: game,
      description:
        "Match the Cards is a small game application where the user needs to match similar cards.",
      learn:
        "For the API i used CATs images and also used few Hooks for the logics",
      skill: [
        {
          skills: "React Js",
        },
      ],

      github: "https://github.com/Mbalajiviswanadh/memory-card-game",
      live: "https://memory-card-game-roan.vercel.app/",
    },
    {
      name: "TO-DO App",
      image: todo,
      description:
        "In this Todo Application user can 'add,delete and edit' their tasks i also used MongoDB so the tasks for every user will be same",
      learn: "I include CRUD operations",
      skill: [
        {
          skills: "Next Js",
        },
        {
          skills: "Typing Script",
        },
        {
          skills: "MongoDB",
        },
        {
          skills: "Tailwind CSS",
        },
        {
          skills: "Prisma",
        },
      ],
      github: "https://github.com/Mbalajiviswanadh/TodoList-app",
      live: "https://todolist-coral-five.vercel.app/",
    },
    {
      name: "Basic Portfolio",
      image: portfolio,
      description: "This is a Practice Portfolio ",

      learn: "I made this using React Js",
      skill: [
        {
          skills: "React Js",
        },
        {
          skills: "BootStrap",
        },
      ],
      github: "https://github.com/Mbalajiviswanadh/Rjs-Task6",
      live: "https://rjs-task6.vercel.app/",
    },

    {
      name: "Twitter Side Nav",
      image: sidenav,
      description:
        "I made a basic Twitter Side nav bar with default desktop theme(dark | light)",
      learn: "I made this using Next Js",
      skill: [
        {
          skills: "Next Js",
        },
        {
          skills: "Tailwind CSS",
        },
        {
          skills: "Typing Script",
        },
      ],
      github: "https://github.com/Mbalajiviswanadh/Twitter-Side-Navbar",
      live: "https://side-nav-bar-seven.vercel.app/",
    },
    {
      name: "WheelsOnWeb",
      image: carrental,
      description:
        "This is a Basic Car Rental Application, I made this with a Team of 6 people",
      learn: "I made this Web Site using React Js, MongoDB, CRUD operations",
      skill: [
        {
          skills: "React Js",
        },
        {
          skills: "Strip (for only frontend)",
        },
      ],
      github: "https://github.com/Mbalajiviswanadh/wheelsonweb-frontend",
      live: "https://wheelsonweb-frontend.vercel.app/",
    },
    {
      name: "BootStrap",
      image: tasks,
      description: "This is a Practice tasks BootStrap frame work",
      learn: "I used BootStrap for css",
      skill: [
        {
          skills: "React Js",
        },
      ],
      github: "https://github.com/Mbalajiviswanadh/Bootstrap-Java-Tasks",
      live: "https://mbalajiviswanadh.github.io/Bootstrap-Java-Tasks/",
    },
    {
      name: "App UI",
      image: flutterapp,
      description: "It is just a UI of an APP",
      learn: "I made this using Flutter",
      skill: [
        {
          skills: "Flutter",
        },
        {
          skills: "Dart",
        },
      ],
      github: "https://github.com/Mbalajiviswanadh/Flutter-App-UI",
      live: "https://github.com/Mbalajiviswanadh/Flutter-App-UI",
    },
  ];

  return (
    <div className="text-justify">
      <div>
        <h1 className="text-orange-300 font-semibold">Prjects📈</h1>
      </div>
      <div className="lg:text-[14px] text-[12px]">
        <h2 className="my-4">
          I am currently in the learning phase🔎, having practiced several
          projects and continuing to do so to enhance my skills🚀. I want to get
          really good at what Im learning and do more projects in the future💘.
        </h2>
      </div>
      {/* cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4">
        {projects.map((project, y) => (
          <div
            key={y}
            className="rounded-lg shadow-sm dark:shadow-gray-300  hover:shadow-lg hover:shadow-amber-600 transition-shadow duration-300 ease-in-out overflow-hidden">
            {/* Image Section */}
            <div className="w-full h-auto">
              <Link href={project.live} target="_blank">
                <Image
                  src={project.image}
                  alt="Project Image"
                  width={400}
                  height={300}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-t-lg hover:-translate-y-1 transition-transform hover:opacity-75"
                />
              </Link>
            </div>

            {/* Text Section */}
            <div className="p-3 sm:p-4">
              <h1 className="text-lg sm:text-xl my-2 text-amber-400 font-bold">
                <span className="text-orange-500">{project.name}</span>
                <span className="text-green-700">.</span>
              </h1>
              <h3 className="text-xs sm:text-sm my-1 sm:my-2">
                {project.description}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mb-3">
                {project.learn}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 my-2">
                {project.skill?.map((item, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="border border-gray-700 rounded-full px-1.5 py-0.5 text-[8px] sm:text-[10px]">
                    {item.skills}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-5">
                <Link href={project.github} target="_blank">
                  <IoLogoGithub
                    size={20}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
                <Link href={project.live} target="_blank">
                  <PiArrowSquareUpRightFill
                    size={20}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
