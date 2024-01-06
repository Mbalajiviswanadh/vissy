const ProjectsPage = () => {
  // list of projects
  const projects = [
    {
      name: "Match the Cards",
      description:
        "Match the Cards is a small game application where the user needs to match similar cards.",
      learn:
        "For the API i used CATs images and also used few Hooks for the logics",
      github: "https://github.com/Mbalajiviswanadh/memory-card-game",
      live: "https://memory-card-game-roan.vercel.app/",
    },
    {
      name: "TO-DO App",
      description:
        "In this Todo Application user can 'add,delete and edit' their tasks i also used MongoDB so the tasks for every user will be same",
      learn: "I include CRUD operations",
      github: "https://github.com/Mbalajiviswanadh/TodoList-app",
      live: "https://memory-card-game-roan.vercel.app/",
    },
    {
      name: "BootStrap",
      description: "This is a Practice tasks BootStrap frame work",
      learn: "I used BootStrap for css",
      github: "https://github.com/Mbalajiviswanadh/Bootstrap-Java-Tasks",
      live: "https://mbalajiviswanadh.github.io/Bootstrap-Java-Tasks/",
    },
    {
      name: "Twitter Side Nav",
      description:
        "I made a basic Twitter Side nav bar with default desktop theme(dark | light)",
      learn: "I made this using Next Js",
      github: "https://github.com/Mbalajiviswanadh/Twitter-Side-Navbar",
      live: "https://side-nav-bar-seven.vercel.app/",
    },
    {
      name: "WheelsOnWeb",
      description:
        "This is a Basic Car Rental Application, I made this with a Team of 6 people",
      learn: "I made this Web Site using React Js, MongoDB, CRUD operations",
      github: "https://github.com/Mbalajiviswanadh/wheelsonweb-frontend",
      live: "https://wheelsonweb-frontend.vercel.app/",
    },
    {
      name: "UI of an App",
      description: "It is just a UI of an APP",
      learn: "I made this using Flutter",
      github: "https://github.com/Mbalajiviswanadh/Flutter-App-UI",
      live: "https://github.com/Mbalajiviswanadh/Flutter-App-UI",
    },
  ];

  return (
    <div className="text-justify">
      <div>
        <h1 className="text-orange-300 font-semibold">Prjects📈</h1>
      </div>
      <div className="lg:text-[18px] text-[12px]">
        <h2 className="my-4">
          I am currently in the learning phase🔎, having practiced several
          projects and continuing to do so to enhance my skills🚀. I want to get
          really good at what Im learning and do more projects in the future💘.
        </h2>
      </div>
      {/* cards */}
      <div></div>
    </div>
  );
};

export default ProjectsPage;
