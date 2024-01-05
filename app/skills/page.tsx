import Image from "next/image";
const SkillsPage = () => {
  // const logos = [
  //   { name: "React.js", image:'' },
  //   { name: "JavaScript", image: "" },
  //   { name: "MongoDB", image: "" },
  //   { name: "Tailwind CSS", image: "" },
  //   { name: "Node.js", image: "path-to-nodejs-logo.png" },
  //   { name: "Next.js", image: "path-to-nextjs-logo.png" },
  // ];
  return (
    <div className=" text-justify ">
      <div className="text-orange-300 font-semibold">
        <h1>My Skills🤸‍♀️</h1>
      </div>
      <div className=" lg:text-[18px] text-[12px]">
        <h2 className="my-2">
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
      <div>
        {/* {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <Image
              src={logo.image}
              alt={logo.name}
              className="h-12 w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 object-contain"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SkillsPage;
