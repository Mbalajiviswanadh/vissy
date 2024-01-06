import Image from "next/image";
import nobgcat from "./nobgcat.gif";

//imageskill
import f from "./flutter.png";
import js from "./javascript.png";
import mdb from "./mongodb.png";
import njs from "./nextjs.png";
import node from "./nodejs.png";
import rjs from "./reactjs.png";
import tcss from "./tailwindcss.png";
import ts from "./ts.png";

const SkillsPage = () => {
  //  list of skills
  const myskills = [
    { skills: "HTML" },
    { skills: "CSS" },
    { skills: "Java" },
    { skills: "Python" },
  ];
  // list of adv skills
  const advskills = [
    { advskill: "JavaScript" },
    { advskill: "TypeScript" },
    { advskill: "React Js" },
    { advskill: "Next Js" },
    { advskill: "Redux" },
    { advskill: "Tailwind CSS" },
    { advskill: "BootStrap" },
    { advskill: "ExpressJs" },
    { advskill: "Node Js" },
    { advskill: "MongoDB" },
    { advskill: "Flutter" },
  ];
  // list of skill images
  const skillimgs = [
    { skillimg: f },
    { skillimg: js },
    { skillimg: mdb },
    { skillimg: njs },
    { skillimg: node },
    { skillimg: rjs },
    { skillimg: tcss },
    { skillimg: ts },
  ];
  return (
    <div className=" text-justify ">
      <div className="text-orange-300 font-semibold">
        <h1>My Skills🤸‍♀️</h1>
      </div>
      <div className=" lg:text-[18px] text-[12px]">
        <h2 className="my-4">
          I am a dedicated Developer and Designer with a strong passion for
          creating full-stack websites and designing UI{" "}
          <span className="text-zinc-500">(User Interfaces)</span> for Android
          Devices applications, following the MAD{" "}
          <span className="text-zinc-500">
            (Mobile Application Development)
          </span>{" "}
          design pattern.
        </h2>
        <h2 className="my-4">
          Despite my background in Computer Science, I possess excellent{" "}
          <span className="border-b-2 border-orange-300">
            Collaborative Skills
          </span>{" "}
          🤝 and am adept at working within a team dynamic⚡. I also have the
          capacity to lead and manage teams effectively, My effective{" "}
          <span className="border-b-2 border-orange-300">
            Communication Skills
          </span>{" "}
          🫂 contribute to a smooth workflow📈.
        </h2>
        <h2 className="mt-14">
          <span className="font-semibold border-b-2 border-green-300">
            My current <span className="text-orange-500">SKILLS</span> set
            includes, are 📃:
          </span>{" "}
        </h2>
        <h2 className="my-5">
          <span className="text-green-400 lg:text-2xl text-[15px]">❛❛</span>
          MERN (MongoDB, Express.js, React.js, Node.js) stack, as well as in
          Next.js, React.js, Tailwind CSS,Typing Script, Express.js, Node.js,
          and MongoDB. Additionally, I am familiar with Flutter for Mobile
          Application Development.
          <span className="text-green-400 lg:text-2xl text-[15px]">❜❜</span>
        </h2>
      </div>

      {/* Skils here */}
      <div className="flex flex-col lg:flex-row  ">
        <div>
          <h1 className="mt-10 mb-3 lg:text-[18px] text-[12px] font-medium  text-amber-500">
            <span className="border-b-2 border-green-300">Languages</span>
          </h1>

          <div className="flex mb-5 lg:text-[18px] text-[10px] flex-wrap flex-row lg:justify-start justify-center">
            {myskills.map((d, idx) => (
              <h2
                key={idx}
                className="bg-green-300 px-4 py-2  mr-2 mt-2 text-zinc-800 font-medium rounded">
                {d.skills}
              </h2>
            ))}
          </div>
          <h1 className="mt-10 mb-3 lg:text-[18px] text-[12px] font-medium  text-amber-500">
            <span className="border-b-2 border-green-300">
              Libraries & Frameworks
            </span>
          </h1>
          <div className="flex lg:text-[18px] lg:w-[50%] text-[10px] lg:justify-start justify-center flex-wrap flex-row">
            {advskills.map((d, i) => (
              <h2
                key={i}
                className="bg-green-300 px-4 py-2  mr-2 mt-2 text-zinc-800 font-medium rounded">
                {d.advskill}
              </h2>
            ))}
          </div>
        </div>
        <div className="lg:pt-20 lg:w-[64%] ">
          <Image src={nobgcat} alt="studygif" />
        </div>
      </div>

      {/* images of skills */}

      <div className="flex  my-12 gap-4 justify-center flex-wrap">
        {skillimgs.map((simg, i) => (
          <div className=" pt-3" key={i}>
            <Image
              src={simg.skillimg}
              alt="imgs"
              className="lg:w-12 lg:h-12 w-10 h-10 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
