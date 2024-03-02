import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="grid grid-cols-2 content-center h-[36rem]">
        <h1 className="ml-[9rem]">
          <p className="text-blue-500 text-[2rem] font-semibold">
            Make Sustainable Fetures,
          </p>
          <span className="text-[3.8rem] font-semibold">
            Best Digital Online Educations
            <span className="text-blue-500">!</span>
          </span>
        </h1>
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
