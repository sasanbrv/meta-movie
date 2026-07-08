
import { useEffect , useState } from 'react';
import { movieService } from './../../services/movie.service';
import MovieInfo from './components/MovieInfo';
import HeroMovie from './components/HeroMovie'
const MoviePlayer = () => {
    const [movie,setMovie] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            try{
                const data = await
                movieService.getMovie();
                console.log(data)
                setMovie(data)
            } catch (error){
                console.log(error)
            }
        };
        fetchMovie();
        
    }, [])
    if (!movie) return <h1 className='text-white text-5xl'> Loading ...</h1>
    return ( 

        <>
        <HeroMovie movie ={movie}/>
        <MovieInfo movie={movie} />
        </>
     );
}
 
export default MoviePlayer;