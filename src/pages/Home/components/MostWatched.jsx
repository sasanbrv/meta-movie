import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaPlay } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../../../App.css";

import SheepDetectives from "../../../assets/img/the sheep detectives.jpg";
import superGirl from "../../../assets/img/Super girl.jpg";
import toyStory from "../../../assets/img/toy stroy 5.jpg";
import moneyHeist from "../../../assets/img/money heist.png";
import odyssey from "../../../assets/img/odyssey.jpg";
const MOVIE_DETAILS = [
  {
    img: moneyHeist,
    date: "2017",
    name: "Money Heist",
    genre: "5 seasons • Action • Crim • Thriller",
    description:
      "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
  },
  {
    img: SheepDetectives,
    date: "2026",
    name: "the Sheep Detectives",
    genre: "1 hr 49 min • Comedy • Family • Mystery",
    description:
      "Every night a shepherd reads aloud a murder mystery, pretending his sheep can understand. When he is found dead, the sheep realize at once that it was a murder and think they know everything about how to go about solving it.",
  },
  {
    img: toyStory,
    date: "2026",
    name: "Toy Story 5",
    genre: "1 hr 42 min • Fantasy • Adventure • Comedy",
    description:
      "Woody, Buzz, Jessie and the rest of the gang's jobs are challenged when they're introduced to electronics, a new threat to playtime.",
  },
  {
    img: superGirl,
    date: "2026",
    name: "Supergirl",
    genre: "1 hr 48 min • Superhero • Action • Drama • Sci-Fi",
    description:
      "Kara Zor-El, aka Supergirl, joins forces with an unlikely companion on an interstellar journey of vengeance and justice when an unexpected adversary strikes too close to home.",
  },
  {
    img: odyssey,
    date: "2026",
    name: "Interstellar",
    genre: "2 hr 52 min • history • Drama • Adventure",
    description:
      "After the Trojan War, Odysseus faces a dangerous voyage back to Ithaca, meeting creatures like the Cyclops Polyphemus, Sirens, and Calypso along the way.",
  },
];

function MainHero() {
  return (
    <Swiper
      className="hero-swiper"
      modules={[Autoplay, Pagination, EffectFade]}
      slidesPerView={1}
      loop
      effect="fade"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {MOVIE_DETAILS.map((movie, index) => (
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
                    <button className="flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-tr-2xl rounded-bl-2xl font-semibold cursor-pointer">
                      <FaPlay />
                      Play Now
                    </button>

                    <button className="flex items-center justify-center gap-2 bg-white/10 px-6 py-3 rounded-tr-2xl rounded-bl-2xl font-semibold backdrop-blur cursor-pointer">
                      <FaPlay />
                      Watch Trailer
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
  );
}

export default MainHero;
