import { FaReact } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const courses = [
  {
    title: "Front-end Development",
    icon: FaReact,
    techStack: "React/Next.js, TailwindCSS, Context API",
  },
  {
    title: "Back-end Development",
    icon: SiNestjs,
    techStack: "Nest.js/Node.js, PrismaORM, REST API",
  },
  {
    title: "Core Java",
    icon: FaJava,
    techStack: "Java",
  },
  {
    title: "Advanced Java",
    icon: FaJava,
    techStack: "Java, Hibarnate, Spring MVC, Spring Boot",
  },
] as const;
