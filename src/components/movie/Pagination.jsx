import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => {onPageChange(page - 1)
            window.scrollTo({
                    top:0,
                    behavior : "smooth",
                })
        }}
        disabled={page === 1}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        <IoChevronBack />
      </button>

      {pages.map((item, index) =>
        item === "..." ? (
          <span
            key={index}
            className="px-2 text-lg text-white"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() =>{ onPageChange(item)
                window.scrollTo({
                    top:0,
                    behavior : "smooth",
                })
            }}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${
              page === item
                ? "bg-primary text-white"
                : "bg-secondary text-white hover:bg-primary"
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => {onPageChange(page + 1)
            window.scrollTo({
                    top:0,
                    behavior : "smooth",
                })
        }}
        disabled={page === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        <IoChevronForward />
      </button>
    </div>
  );
};

export default Pagination;