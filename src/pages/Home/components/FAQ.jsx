import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { faqs } from "../data/faqs";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mx-auto my-20 max-w-6xl px-4">
      <h2 className="mb-10 text-center text-4xl font-bold text-white">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="rounded-2xl bg-secondary/50 p-5"
          >
            <button
              onClick={() => handleToggle(faq.id)}
              className="flex w-full items-center justify-between gap-4"
            >
              <h3 className="flex-1 text-left text-lg font-semibold text-white">
                {faq.question}
              </h3>

              <IoChevronDown
                className={`h-8 w-8 rounded-full bg-secondary p-1 transition-transform duration-300 ${
                  openId === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {openId === faq.id && (
              <p className="mt-4 wrap-break-word text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;