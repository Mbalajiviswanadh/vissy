import Link from "next/link";
import hicat from "./hellocat.gif";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between p-8 lg:p-16">
        <div className="intro lg:mr-8">
          <h1 className="text-orange-300 font-semibold mb-3 lg:text-2xl">
            Intro🌱
          </h1>
          <h1 className="lg:text-3xl text-2xl ">Hi👋, Im Balaji Viswanadh</h1>
          <p className="lg:text-lg pt-2 text-sm text-zinc-500">
            - Passionate Designer and Developer.🪴
          </p>
          <div className="pt-4 lg:pt-8">
            <h2>
              You can connect with me through{" "}
              <span>
                <Link className="text-orange-300 underline" href={"/alllinks"}>
                  here
                </Link>
                .
              </span>
              {"  "}
              ˗ˏˋ ♡ ˎˊ˗
            </h2>
          </div>
        </div>

        <div className="lg:ml-8 mt-6 lg:mt-0">
          <Image src={hicat} alt="hellopeople" className="lg:max-w-md" />
        </div>
      </div>
    </>
  );
}
