import Link from "next/link";

const AboutPage = () => {
  return (
    <div className=" text-justify ">
      <div>
        <h1 className="text-orange-300 font-semibold">About Me 🧑🏻‍🏫</h1>
      </div>
      <div className="lg:text-[14px] text-[12px]">
        <h2 className="my-4">
          Greetings!🍀 Im{" "}
          <span className="border-b-2 border-orange-300">Balaji Viswanadh</span>{" "}
          Nice to meet you :)
        </h2>
        <h2 className="lg:pt-2">
          A student currently pursuing an Undergraduate Degree in Computer
          Science 💻<span className="text-zinc-500">(CSE AI&ML)</span> at VIT
          AP, India.
        </h2>

        <h2 className="my-4">
          I am passionate about technology and love working with technology
          because I enjoy creating Websites, apps, and design works. Im all
          about staying dedicated, keeping things consistent, and always aiming
          for the best results, My goal is to blend creativity with
          functionality, making user experiences seamless and enjoyable.
        </h2>

        <h2 className="my-10">
          <span className="text-green-400 lg:text-2xl text-[15px]">❛❛</span>
          Sometimes, I might take a bit longer because Im committed to making
          things super professional and perfect🦋. I believe its worth the extra
          time to deliver good results!
          <span className="text-green-400 lg:text-2xl text-[15px]">❜❜</span>
        </h2>

        <h2 className="mt-10">
          As I progress in my career, Im eager to connect with fellow
          enthusiasts🤝 in the Tech field or other fields. Lets share ideas and
          explore opportunities together. Feel free to{" "}
          <Link className="text-orange-300 underline" href={"/alllinks"}>
            reach me out
          </Link>
          , look forward to connecting with you!☮️
        </h2>
      </div>
    </div>
  );
};

export default AboutPage;
