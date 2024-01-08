import Image from "next/image";

import carrental from "./car.png";
import flutterapp from "./flutter.png";
import game from "./game.png";
import portfolio from "./portfolio.png";
import todo from "./todo.png";
import tasks from "./tasks.png";
import sidenav from "./Twitter.png";
import Link from "next/link";

import { IoLogoGithub } from "react-icons/io";
import { PiArrowSquareUpRightFill } from "react-icons/pi";

const ProjectsPage = () => {
  // list of projects
  const projects = [
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
      live: "https://memory-card-game-roan.vercel.app/",
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

      <div className="flex flex-col  space-y-30">
        {projects.map((project, y) => (
          <div key={y}>
            <div className="flex flex-col   md:flex-row  mt-8">
              <div className="md:w-1/2 mr-20   my-10">
                <Link href={project.live} target="_blank">
                  <Image
                    src={project.image}
                    alt="image"
                    width={400}
                    height={1000}
                    className="rounded-xl mt-4 hover:-translate-y-1 hover:shadow-md hover:shadow-amber-600 transition-transform border-b-2 hover:opacity-75"
                  />
                </Link>
              </div>
              <div className=" lg:w-[30%] lg:h- lg:text-[15px] text-[12px] lg:mt-14 mt-2">
                <h1 className="text-xl my-3 text-amber-400  font-bold">
                  <span className="border-b-2  lg:text-2xl text-[15px] border-green-400">
                    {" "}
                    {project.name}.
                  </span>
                </h1>
                <h3 className=" lg:text-wrap lg:text-[14px] text-[12px] my-2">
                  {project.description}
                </h3>
                <p className="lg:text-wrap lg:text-[14px] text-[12px] mb-4">
                  {project.learn}
                </p>
                <div className="flex flex-wrap  space-x-2">
                  {project.skill?.map((item, index) => (
                    <span
                      key={index}
                      className="bg-green-300 px-2 py-1 lg:text-[12px] text-[10px] mr-2 mt-2 text-zinc-800 font-medium rounded">
                      {item.skills}
                    </span>
                  ))}
                </div>{" "}
                <div className="flex flex-row  align-bottom space-x-4 my-5">
                  <Link href={project.github} target="_blank">
                    <IoLogoGithub
                      size={25}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={project.live} target="_blank">
                    <PiArrowSquareUpRightFill
                      size={25}
                      className="hover:-translate-y-1  transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
