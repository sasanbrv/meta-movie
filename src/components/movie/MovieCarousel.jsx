import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import "swiper/css";

import MovieCard from "./MovieCard";

const MovieCarousel = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState([]);

  const swiperRef = useRef(null);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    loadMovies();
  }, [fetchMovies]);

  return (
    <section className="my-10 ml-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">
          {title}
        </h2>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={7}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 mr-8 flex justify-end gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-zinc-700"
          >
            <IoChevronBack />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-zinc-700"
          >
            <IoChevronForward />
          </button>
        </div>
    </section>
  );
};

export default MovieCarousel;