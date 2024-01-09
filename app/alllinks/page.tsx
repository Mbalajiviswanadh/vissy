import Image from "next/image";
import bento from "./bento.png";
import github from "./gihtub.png";
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import insta from "./insta.png";
import pin from "./pin.png";
import spotify from "./spotify.png";
import Link from "next/link";
import discord from "./discord.png";
const AllLinks = () => {
  const links = [
    {
      icon: gmail,
      bio: "Gmail",
      link: "mailto:madhavareddybalajiviswanadh.com",
    },
    {
      icon: linkedin,
      bio: "LinkedIn",
      link: "https://www.linkedin.com/in/balaji-viswanadh-875473220/",
    },
    {
      icon: github,
      bio: "Github",
      link: "https://github.com/Mbalajiviswanadh",
    },
    {
      icon: insta,
      bio: "Instagram",
      link: "https://www.instagram.com/mb_viswanadh/",
    },
    {
      icon: spotify,
      bio: "Spotify",
      link: "https://open.spotify.com/user/31lqbzd5suqjdekitvo4l53pqomu?si=6b04d10c0c174591",
    },
    {
      icon: pin,
      bio: "Pinterest",
      link: "https://pin.it/3C4deNP",
    },
    {
      icon: discord,
      bio: "Discord",
      link: "https://discordapp.com/users/857654631916240937",
    },
    {
      icon: bento,
      bio: "Bento",
      link: "https://bento.me/mbviswanadh",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-orange-300 font-semibold">All my links🌐</h1>
      </div>
      <div className="flex lg:text-[14px] text-[12px] flex-row gap-2">
        <h2>Connet and Follow me through ⤵️:</h2>
      </div>

      {/* link card */}

      <div className="mt-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {links.map((data, i) => (
          <Link
            href={data.link}
            target="_blank"
            className="bg-base-200 p-4 rounded-2xl hover:-translate-y-1  transition-transform cursor-pointer  duration-300 shadow-md hover:shadow-green-200 hover:shadow-md"
            key={i}>
            <div className="flex items-center">
              <Image
                src={data.icon}
                className="mr-4 lg:w-12 lg:h-12 w-10 h-10"
                alt={"image"}
              />
              <div>
                <p className="lg:text-[14px] text-[14px]">{data.bio}</p>
                <Link
                  href={data.link}
                  target="_blank"
                  className="text-green-400 font-medium text-[13px] hover:underline">
                  <span className="">Connect & Follow</span>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllLinks;
