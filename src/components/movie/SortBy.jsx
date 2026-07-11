import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

const sortOptions = [
  { label: "Most Popular", value: "popularity.desc" },
  { label: "Top Rated", value: "vote_average.desc" },
  { label: "Newest", value: "primary_release_date.desc" },
  { label: "Oldest", value: "primary_release_date.asc" },
];

const SortBy = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentSort =
    sortOptions.find((item) => item.value === sortBy)?.label ||
    "Most Popular";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-white transition hover:bg-primary"
      >
        <IoFilter size={18} />

        <span>{currentSort}</span>

        <IoChevronDown
          className={`transition duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-zinc-700 bg-[#1b1b1b] shadow-2xl z-50">
          {sortOptions.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setSortBy(item.value);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left transition ${
                sortBy === item.value
                  ? "bg-primary text-white"
                  : "text-white hover:bg-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortBy;