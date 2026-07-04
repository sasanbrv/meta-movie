import MovieCarousel from "../../components/movie/MovieCarousel";
import { movieService } from "../../services/movie.service";

import MainHero from "./components/MainHero";

import GenreSec from "./components/genreSec";
import FAQ from "./components/FAQ";


const HomePage = () => {

    return ( 
    <>
    <div className=" bg-black">

        <MainHero/>
    <MovieCarousel fetchMovies={movieService.getPopular} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getNowPlaying} title={'Latest Released'} /> 
    <MovieCarousel fetchMovies={movieService.getTrending} title={'Trending movies & shows'} />
    <MovieCarousel fetchMovies={movieService.getTvPopular} title={'Popular Tv Shows'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Upcoming'} />
    <GenreSec />
    <FAQ />

    </div>
    </> );
}
 
export default HomePage;