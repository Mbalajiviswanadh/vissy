"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import nobgcat from "./nobgcat.gif";

// Skill icons
import f from "./flutter.png";
import js from "./javascript.png";
import mdb from "./mongodb.png";
import njs from "./nextjs.png";
import node from "./nodejs.png";
import rjs from "./reactjs.png";
import tcss from "./tailwindcss.png";
import ts from "./ts.png";
import expo from "./expo.png";

const SkillsPage = () => {
  // Fix TypeScript error by specifying the correct type
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Auto-scrolling animation with improved smoothness
    let scrollPosition = 0;
    let animationId: number | null = null;
    const scrollSpeed = 0.5;

    const animateScroll = () => {
      // Get these values inside the animation loop for responsive updates
      const containerWidth = scrollContainer.scrollWidth;
      const viewportWidth = scrollContainer.offsetWidth;

      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through all content
      if (scrollPosition >= containerWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animateScroll);
    };

    // Start animation
    animationId = requestAnimationFrame(animateScroll);

    // Pause animation on hover with better event handling
    const handleMouseEnter = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const handleMouseLeave = () => {
      if (animationId === null) {
        animationId = requestAnimationFrame(animateScroll);
      }
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    // Clean up animation and event listeners
    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // List of skills
  const languages = [
    { skill: "Java" },
    { skill: "Python" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
  ];

  // List of advanced skills
  const frameworks = [
    { skill: "React.js" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Express.js" },
    { skill: "Node.js" },
    { skill: "MongoDB" },
    { skill: "React Native" },
    { skill: "Electron" },
    { skill: "Figma" },
  ];

  // List of skill icons with names for better accessibility
  const skillIcons = [
    { icon: f, name: "Flutter" },
    { icon: js, name: "JavaScript" },
    { icon: mdb, name: "MongoDB" },
    { icon: njs, name: "Next.js" },
    { icon: node, name: "Node.js" },
    { icon: rjs, name: "React.js" },
    { icon: tcss, name: "Tailwind CSS" },
    { icon: ts, name: "TypeScript" },
    { icon: expo, name: "React Native Expo" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-justify">
      <div className="text-orange-300 font-semibold">
        <h1>My Skills🤸‍♀️</h1>
      </div>

      <div className=" lg:text-[14px] text-[12px]">
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

      {/* Skills section with minimal design */}
      <div className="mt-12">
        <h2 className="text-lg font-medium mb-8">
          <span className="border-b-2 border-green-300 text-orange-400">
            My current skill set includes:
          </span>
        </h2>

        <h2 className="my-5">
          <span className="text-green-400 lg:text-2xl text-[15px]">❛❛</span>
          MERN (MongoDB, Express.js, React.js, Node.js) stack, as well as in
          Next.js, React.js, Tailwind CSS, TypeScript, Express.js, Node.js, and
          MongoDB. Additionally, I am familiar with Flutter for Mobile
          Application Development.
          <span className="text-green-400 lg:text-2xl text-[15px]">❜❜</span>
        </h2>
      </div>

      {/* Two-column layout for desktop */}
      <div className="mt-10 flex flex-col md:flex-row md:gap-8">
        <div className="md:w-1/2 space-y-8">
          {/* Languages */}
          <div>
            <h3 className="text-amber-400 font-medium mb-4 inline-block border-b border-green-300">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-green-300/20 border border-green-300/40 px-3 py-1 text-sm rounded-full hover:bg-green-300/30 transition-colors duration-300"
                >
                  {item.skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h3 className="text-amber-400 font-medium mb-4 inline-block border-b border-green-300">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-green-300/20 border border-green-300/40 px-3 py-1 text-sm rounded-full hover:bg-green-300/30 transition-colors duration-300"
                >
                  {item.skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cat GIF */}
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="max-w-xs">
            <Image
              src={nobgcat}
              alt="Developer cat animation"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Technologies section with your specified UI */}
      <div className="mt-16 mb-8">
        <h3 className="text-amber-400 font-medium mb-6 inline-block border-b border-green-300">
          Technologies
        </h3>

        <div className="backdrop-blur-sm rounded-xl p-4shadow-lg">
          <div
            ref={scrollContainerRef}
            className="overflow-hidden whitespace-nowrap py-6"
          >
            <div className="inline-flex gap-12 px-4">
              {/* Double the icons to create seamless loop effect */}
              {[...skillIcons, ...skillIcons].map((item, idx) => (
                <div
                  key={idx}
                  className="inline-block transition-transform hover:scale-110 duration-300"
                >
                  <div className="w-20 h-20 flex items-center justify-center  rounded-xl p-3 backdrop-blur-sm shadow-lg border border-zinc-700/50 hover:border-green-300/50 group">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <p className="text-center text-xs mt-3">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-zinc-500 text-center">
        <p className="text-zinc-400 text-sm">
          Always learning, always evolving.
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
