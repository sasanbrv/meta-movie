import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaPlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../../../App.css"
import Batman from "../../../assets/img/Batman.png";
import Interstellar from "../../../assets/img/Interstellar.jpg";
import SchindlersList from "../../../assets/img/Schindler's List.jpg";
import lotr from "../../../assets/img/The Lord of the Rings.jpg";
import Godfather from "../../../assets/img/the godFather.jpg";
import { useNavigate } from "react-router-dom";

const MOVIE_DETAILS = [
  {
    id:414906,
    img: Batman,
    date: "2022",
    name: "The Batman",
    genre: "2 hr 56 min • Action • Drama",
    description:
      "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.",
  },
  {
    id:239,
    img: Godfather,
    date: "1972",
    name: "The Godfather",
    genre: "2 hr 55 min • Gangster • Drama • Tragedy • Crime",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id:120,
    img: lotr,
    date: "2003",
    name: "The Lord of the Rings: The Return of the King",
    genre: "3 hr 21 min • Fantasy • Adventure",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army while Frodo and Sam approach Mount Doom.",
  },
  {
    id:424,
    img: SchindlersList,
    date: "1993",
    name: "Schindler's List",
    genre: "3 hr 15 min • History • Drama",
    description:
      "Industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce during World War II.",
  },
  {
    id:157336,
    img: Interstellar,
    date: "2014",
    name: "Interstellar",
    genre: "2 hr 49 min • Sci-Fi • Drama",
    description:
      "A team of astronauts travel through a wormhole in search of a new home for humanity.",
  },
];

function MainHero() {
  const navigate = useNavigate();

  return (
    <section className=" relative h-screen overflow-hidden"> 
      {/* Background Image */}
    <Swiper
     className="hero-swiper"
      modules={[Autoplay, Pagination, EffectFade,]}
      slidesPerView={1}
      loop
      effect="fade"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {MOVIE_DETAILS.map((movie,index) => (
        <SwiperSlide key={index}>
          <section className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <img
              src={movie.img}
              alt={movie.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex items-center min-h-screen">
              <div className="container mx-auto px-5 sm:px-8 lg:px-16">
                <div className="max-w-xl text-white">
                  <p className="text-sm sm:text-base lg:text-xl text-gray-300">
                    {movie.date}
                  </p>

                  <h1 className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-bold">
                    {movie.name}
                  </h1>

                  <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300">
                    {movie.genre}
                  </p>

                  <p className="mt-5 text-sm sm:text-base lg:text-lg leading-7 text-gray-200">
                    {movie.description}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                    <button onClick={() => navigate(`/movie/${movie.id}`) } className="flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-tr-2xl rounded-bl-2xl font-semibold cursor-pointer">
                      <FaPlay />
                      Play Now
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-white/10 px-6 py-3 rounded-tr-2xl rounded-bl-2xl font-semibold backdrop-blur cursor-pointer">
                      <CiBookmark />
                      Add To Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  </section >
  );
}

export default MainHero;
