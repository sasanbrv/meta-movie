import MovieCarousel from "../../components/movie/MovieCarousel";
import { movieService } from "../../services/movie.service";
import GenreSec from "./components/genreSec";

const HomePage = () => {

    return ( 
    <>
    <div className="">
    <MovieCarousel fetchMovies={movieService.getNowPlaying} title={'Latest Released'} /> 
    <MovieCarousel fetchMovies={movieService.getTrending} title={'Trending movies & shows'} />
    <MovieCarousel fetchMovies={movieService.getTvPopular} title={'Popular Tv Shows'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Upcoming'} />
    <GenreSec />
    </div>
    </> );
}
 
export default HomePage;