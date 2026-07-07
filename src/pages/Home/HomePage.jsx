import MovieCarousel from "../../components/movie/MovieCarousel";
import { movieService } from "../../services/movie.service";

import MainHero from "./components/MainHero";
import MostWatched from "./components/MostWatched";

import GenreSec from "./components/genreSec";
import FAQ from "./components/FAQ";

const HomePage = () => {
  return (
    <>

        <MainHero/>
    <MovieCarousel fetchMovies={movieService.getPopular} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getNowPlaying} title={'Latest Released'} /> 
    <MovieCarousel fetchMovies={movieService.getTrending} title={'Trending movies & shows'} />
    <MovieCarousel fetchMovies={movieService.getTvPopular} title={'Popular Tv Shows'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Upcoming'} />
    <GenreSec />
    <FAQ />
      <div className="bg-black">
        <MainHero />
        <MovieCarousel
          fetchMovies={movieService.getUpcoming}
          title={"Popular"}
        />
        <MovieCarousel
          fetchMovies={movieService.getNowPlaying}
          title={"Latest Released"}
        />
        <MostWatched/>
        <MovieCarousel
          fetchMovies={movieService.getTrending}
          title={"Trending movies & shows"}
        />
        <MovieCarousel
          fetchMovies={movieService.getTvPopular}
          title={"Popular Tv Shows"}
        />
        <MovieCarousel
          fetchMovies={movieService.getUpcoming}
          title={"Upcoming"}
        />
        <GenreSec />
      </div>
    </>
  );
};


export default HomePage;
