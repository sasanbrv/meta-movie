export default function TogglePlans({ billing, setBilling }) {
  return (
    <div className="inline-flex p-1 rounded-full bg-black gap-4 border-2 border-primary">
      <button
        onClick={() => setBilling("monthly")}
        className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
          billing === "monthly"
            ? "bg-primary text-white shadow"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => setBilling("yearly")}
        className={`px-10 py-2 rounded-full font-semibold transition-all duration-300 ${
          billing === "yearly"
            ? "bg-primary text-white shadow"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Yearly
      </button>
    </div>
  );
}