import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className=" intro  overflow-auto">
        <div>
          <h1 className="text-orange-300 font-semibold mb-3">Intro</h1>
        </div>
        <div>
          <h1 className="lg:text-3xl text-2xl ">Hi👋, Im Balaji Viswanadh</h1>
          <p className="lg:text-[16px] text-[12px] text-zinc-500">
            -passionate Designer and Developer.🪴
          </p>
        </div>
        <div>
          <h2>
            you can connect me{" "}
            <span>
              <Link className="text-orange-300 underline" href={"/alllinks"}>
                here
              </Link>
              .
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}
