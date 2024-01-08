import Link from "next/link";
import hicat from "./hellocat.gif";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between p-8 lg:p-16">
        <div className="intro lg:mr-8">
          <h1 className="text-orange-300 font-semibold  lg:text-2xl">
            Intro🌱
          </h1>
          <h3 className="text-zinc-400  mb-3 lg:text-[13px] text-[9px]">
            @vissy
          </h3>
          <h1 className="lg:text-3xl text-2xl ">Hi👋, Im Balaji Viswanadh</h1>
          <p className="lg:text-lg text-[12px] pt-2  text-zinc-500">
            - Passionate Designer and Developer.🪴
          </p>
          <p className="lg:text-lg text-[12px]  text-zinc-500">
            - Good Listener.(^▽^)👍
          </p>
          <div className="pt-4 text-sm lg:pt-8">
            <h2>
              Feel free to connect with me through{" "}
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
