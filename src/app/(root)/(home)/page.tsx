import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Student from "@/components/Home/Student";
import UniqueCourse from "@/components/Home/UniqueCourse";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Course */}
      <UniqueCourse />

      {/* Student */}
      <Student />

      {/* Contaact */}
      <Contact />
    </main>
  );
}
