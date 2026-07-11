import MovieCarousel from "../../components/movie/MovieCarousel";
import { movieService } from "../../services/movie.service";

import MainHero from "./components/MainHero";
import MostWatched from "./components/MostWatched";

import GenreSec from "./components/genreSec";
import FAQ from "./components/FAQ";

const HomePage = () => {
  return (
    <>

      <div className="bg-black">
        <MainHero/>
        <MovieCarousel
          fetchMovies={movieService.getNowPlaying}
          title={"Latest Released"}
        />
        <MovieCarousel
          fetchMovies={movieService.getTrending}
          title={"Trending movies & shows"}
          />
        <MostWatched/>
        <MovieCarousel
          fetchMovies={movieService.getTvPopular}
          title={"Popular Tv Shows"}
        />

        <GenreSec />
        <FAQ />
      </div>
    </>
  );
};


export default HomePage;
