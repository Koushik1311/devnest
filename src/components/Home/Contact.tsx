"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="mt-[8rem]">
      <h5 className="text-center text-[2.2rem] font-semibold mb-[3.5rem]">
        Contact Us
      </h5>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col"
      >
        <input
          className="w-[40rem] border px-[1rem] py-[1rem] text-[1.1rem] rounded-md mb-[1rem]"
          type="text"
          name="subject"
          id="subject"
          placeholder="Your Subject..."
        />

        <textarea
          className="w-[40rem] h-52 border px-[1rem] py-[1rem] text-[1.1rem] rounded-md mb-[1rem]"
          name="message"
          id="message"
          placeholder="Your message..."
        />
        <div className="flex justify-start w-[40rem] mb-4">
          <button
            className="bg-blue-300 text-[1.1rem] font-semibold py-[0.8rem] px-[1.6rem] rounded-full text-white hover:bg-blue-500 transition-all"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
