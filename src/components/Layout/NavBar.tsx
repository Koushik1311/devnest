"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <section className="mt-[1rem] flex items-center justify-between mx-[7rem]">
      <h1 className="text-[1.4rem] text-blue-500">
        <Link href="/">DevNest</Link>
      </h1>
      <ul className="flex justify-center items-center">
        <li
          className={`mr-[1.3rem] font-semibold hover:text-blue-800 transition-all ${
            pathname === "/"
              ? "text-blue-800 border-b-2 border-blue-800"
              : "text-blue-500"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`mr-[1.3rem] font-semibold hover:text-blue-800 transition-all ${
            pathname === "/course" ? "text-blue-800" : "text-blue-500"
          }`}
        >
          <Link href="/course">Courses</Link>
        </li>
        <li
          className={`mr-[1.3rem] font-semibold hover:text-blue-800 transition-all ${
            pathname === "/blog" ? "text-blue-800" : "text-blue-500"
          }`}
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={`mr-[1.3rem] font-semibold hover:text-blue-800 transition-all ${
            pathname === "#contact" ? "text-blue-800" : "text-blue-500"
          }`}
        >
          <Link href="#contact">Contact</Link>
        </li>
        <li>
          <button className="bg-blue-500 text-white rounded-full py-[0.5rem] px-[1.5rem] hover:bg-blue-700 transition-all">
            Book Now
          </button>
        </li>
      </ul>
    </section>
  );
}
