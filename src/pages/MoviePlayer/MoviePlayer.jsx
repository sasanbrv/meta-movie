import { useEffect, useState } from 'react';
import { movieService } from './../../services/movie.service';
import MovieInfo from './components/MovieInfo';
import SimilarMovie from './components/SimilarMovie';
import { useParams } from 'react-router-dom';

import HeroMovie from './components/HeroMovie'
const MoviePlayer = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true); // ← اضافه شد

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true); // ← شروع بارگذاری
                const data = await movieService.getMovie(id);
                console.log(data);
                setMovie(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // ← پایان بارگذاری
            }
        };
        fetchMovie();
    }, [id]);

    // ✅ نمایش Loading با فضای کافی
    if (loading) {
        return (
            <div className="min-h-125 flex items-center justify-center text-white">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-lg"> Is Loading</p>
                </div>
            </div>
        );
    }

    // ❌ اگر فیلم وجود نداشت
    if (!movie) {
        return (
            <div className="min-h-125 flex items-center justify-center text-white">
                <p className="text-xl"> Network Error</p>
            </div>
        );
    }

    // ✅ نمایش محتوای اصلی
    return ( 
        <>
            <HeroMovie movie ={movie}/>
            <MovieInfo movie={movie} />
            <SimilarMovie movie={movie} />
        </>
    );
}
 
export default MoviePlayer;