import {  useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "swiper/css";
import GenreCard from "../../../components/movie/GenreCard";
import action from "../../../assets/img/action.jpg"
import adventure from "../../../assets/img/Adventure.jpg" 
import animation from "../../../assets/img/animation.jpg" 
import comedy from "../../../assets/img/comedy.webp" 
import crime from "../../../assets/img/crime.webp" 
import drama from "../../../assets/img/drama.jpg" 
import family from "../../../assets/img/family.png" 
import horror from "../../../assets/img/horror.jpg" 
import romance from "../../../assets/img/romance.webp" 
import mystery from "../../../assets/img/mystery.png" 
import thriller from "../../../assets/img/trailer.png" 
import fantasy from "../../../assets/img/fantasy.jpg" 




const GenreSec = () => {
    const swiperRef = useRef(null);
    const genres = [
              {
          id: 28,
          title: "Action",
          image: action,
        },
        {
          id: 12,
          title: "Adventure",
          image: adventure,
        },
        {
          id: 16,
          title: "Animation",
          image: animation,
        },
        {
          id: 35,
          title: "Comedy",
          image: comedy,
        },
        {
          id: 80,
          title: "Crime",
          image: crime,
        },
        {
          id: 18,
          title: "Drama",
          image: drama,
        },
        {
          id: 10751,
          title: "Family",
          image: family,
        },
        {
          id: 14,
          title: "Fantasy",
          image: fantasy,
        },
        {
          id: 27,
          title: "Horror",
          image: horror,
        },
        {
          id: 9648,
          title: "Mystery",
          image: mystery,
        },
        {
          id: 10749,
          title: "Romance",
          image: romance,
        },
        {
          id: 53,
          title: "Thriller",
          image: thriller,
        },
              
    ]

  return (
    <section className="my-10 ml-10">

      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <GenreCard title={genre.title} bgImg={genre.image} />
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

export default GenreSec;