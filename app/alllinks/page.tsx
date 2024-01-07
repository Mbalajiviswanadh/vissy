import { FaChevronCircleDown } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiBento } from "react-icons/si";
import { FaPinterest } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import Link from "next/link";

const AllLinks = () => {
  const links = [
    {
      icon: <SiGmail size={40} />,
      link: "mailto:madhavareddybalajiviswanadh.com",
    },
    {
      icon: <FaLinkedinIn size={40} />,
      link: "https://www.linkedin.com/in/balaji-viswanadh-875473220/",
    },
    {
      icon: <FiGithub size={40} />,
      link: "https://github.com/Mbalajiviswanadh",
    },
    {
      icon: <FaInstagram size={40} />,
      link: "https://www.instagram.com/mb_viswanadh/",
    },
    {
      icon: <FaSpotify size={40} />,
      link: "https://open.spotify.com/user/31lqbzd5suqjdekitvo4l53pqomu?si=6b04d10c0c174591",
    },
    {
      icon: <FaPinterest size={40} />,
      link: "https://pin.it/3C4deNP",
    },
    {
      icon: <SiBento size={40} />,
      link: "https://bento.me/mbviswanadh",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-orange-300 font-semibold">All my links🌐</h1>
      </div>
      <div className="flex lg:text-[18px] text-[12px] flex-row gap-2">
        <h2>Connet and Follow me through⤵️:</h2>
        {/* <FaChevronCircleDown className="pt-1" id={"scrolldown"} size={25} /> */}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {links.map((data, i) => (
          <div className="flex items-center" key={i}>
            <div className="mr-2">{data.icon}</div>
            <div className="">
              <Link href={data.link} target="_blank">
                Links
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLinks;
