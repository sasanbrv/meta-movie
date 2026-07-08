import { useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "swiper/css";

import MovieCard from "../../../components/movie/MovieCard";

 const SimilarMovie = ({movie}) => {
    const swiperRef = useRef(null);
    return (
    <section className="my-10 ml-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Similar movies
        </h2>
      </div>

      <Swiper
      breakpoints={{
        0 : {
          spaceBetween:100,
        slidesPerView: 2},
        768: {
          spaceBetween:30,
          slidesPerView:4},
        1024: {
          spaceBetween:20,
          slidesPerView:6},
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {movie.recommendations.results.map((movie) => (
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
 }
  
 export default SimilarMovie;