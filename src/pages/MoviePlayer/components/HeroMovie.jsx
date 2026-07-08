import {
  FaPlay,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

function HeroMovie({ movie }) {
  const year = movie.release_date?.split("-")[0];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />
      <div className="absolute bottom-0 w-full h-48 bg-linear-to-t from-black to-transparent" />

      {/* Content */}
      <div className=" w-full mt-50 relative z-10  px-6 md:px-16 lg:px-24">
        {/* Movie Info */}
        <div className="w-full lg:col-span-2 flex items-center">
          <div className=" text-white w-full">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span>{year}</span>
              <span>•</span>
              <span>{movie.runtime ? `${movie.runtime} min` : "Movie"}</span>
              <span>•</span>

              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span>{movie.vote_average?.toFixed(1)}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {movie.title || movie.original_title}
            </h1>

            {/* Genres */}
            <div className="flex flex-wrap gap-3 mt-6">
              {movie.genres?.slice(0, 3).map((genre) => (
                <span
                  key={genre.id}
                  className="px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-300 leading-7 line-clamp-3"></p>

            {/* Buttons */}
            <div className="flex items-center justify-between w-full mt-8">
              {/* Left Buttons */}
              <div className="flex gap-4">
                <button className="flex items-center justify-center gap-3 px-8 py-3 bg-primary rounded-tr-2xl rounded-bl-2xl font-semibold hover:scale-105 transition">
                  <FaPlay />
                  Watch Now
                </button>

                <button className="px-8 py-3 border border-white/40 rounded-tr-2xl rounded-bl-2xl backdrop-blur-md hover:bg-white hover:text-black transition">
                  More Info
                </button>
              </div>

              {/* Right Button */}
              <button className="w-14 h-14 flex items-center justify-center border border-white/40 text-white rounded-tr-2xl rounded-bl-2xl backdrop-blur-md hover:bg-white hover:text-black transition">
                <FaShareAlt size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
      </div>
    </section>
  );
}

export default HeroMovie;
