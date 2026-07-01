import MovieCarousel from "../../components/movie/MovieCarousel";
import { movieService } from "../../services/movie.service";

const HomePage = () => {
    return ( 
    <>
    <div className="">
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    <MovieCarousel fetchMovies={movieService.getUpcoming} title={'Popular'} />
    </div>
    </> );
}
 
export default HomePage;