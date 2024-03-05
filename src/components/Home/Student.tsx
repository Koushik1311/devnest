import { students } from "@/data/student/data";

export default function Student() {
  return (
    <section className="mt-[8rem]">
      <ul className="grid grid-cols-5 w-[100%] justify-items-center bg-blue-500">
        {students.map((student, index) => (
          <li
            key={index}
            className={`col-start-${index + 2} my-[1.8rem] ${
              index < 2 ? "border-r border-white" : ""
            } pr-24`}
          >
            <h4 className="text-center text-[2rem] font-bold text-white">
              {student.number}
            </h4>
            <p className="text-center text-[0.9rem] font-semibold text-white">
              {student.defination}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
