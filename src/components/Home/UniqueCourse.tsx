import { courses } from "@/data/course/data";

function getColor(index: number) {
  const colors = [
    "text-sky-800",
    "text-red-500",
    "text-yellow-500",
    "text-yellow-500",
  ];
  return colors[index % colors.length];
}

export default function UniqueCourse() {
  return (
    <section className="mt-[8rem] mx-[7rem]">
      <h2 className="text-center mb-[3.5rem] text-[2.2rem] font-semibold">
        Unique Courses
      </h2>
      <ul className="grid grid-cols-4 gap-14">
        {courses.map((course, index) => (
          <li key={index}>
            <course.icon
              className={`block mx-auto text-4xl ${getColor(index)}`}
            />
            <h3 className="mt-[0.9rem] text-center font-semibold">
              {course.title}
            </h3>
            <p className="mt-[0.7rem] text-center text-[0.8rem] font-semibold text-slate-600">
              {course.techStack}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
