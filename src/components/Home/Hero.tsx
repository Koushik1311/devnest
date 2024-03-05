import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-2 content-center h-[36rem]">
        <div>
          <h1 className="ml-[9rem]">
            <p className="text-blue-500 text-[2rem] font-semibold">
              Building a Brighter Future,
            </p>
            <span className="text-[3.8rem] font-semibold">
              Unlock the Power of Digital Learning
              <span className="text-blue-500">!</span>
            </span>
          </h1>
          <button className="ml-[9rem] mt-[1.4rem] bg-blue-500 text-white text-[1.2rem] rounded-full py-[0.7rem] px-[2rem] hover:bg-blue-700 transition-all">
            Book Now
          </button>
        </div>
        <div className="relative">
          <Image
            src="/hero_banner.svg"
            width={600}
            height={600}
            alt="Picture of the author"
            className="absolute -top-24"
          />
        </div>
      </div>
    </section>
  );
}
