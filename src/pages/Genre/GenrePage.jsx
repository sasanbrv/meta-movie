import {  useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movie.service";
import MovieCard from "../../components/movie/MovieCard";
import Pagination from "../../components/movie/Pagination";
import SortBy from "../../components/movie/SortBy";


const GenrePage = () => {
    const { id } = useParams();
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(1);
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sortBy , setSortBy] = useState("popularity.desc")
    
    useEffect(() => {
    const fetchMovie = async () => {
            try {
                setLoading(true); 
                const data = await movieService.getGenre(id , page , sortBy);
                console.log(data);
                setMovies(data.results);
                setTotalPages(Math.min(data.total_pages , 200 ));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); 
            }
        };
        fetchMovie();
    }, [id , page , sortBy]);
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
    if (!movies) {
        return (
            <div className="min-h-125 flex items-center justify-center text-white">
                <p className="text-xl"> Network Error</p>
            </div>
        );
    }
    return (
    <section className="container mx-auto px-6 py-32">
        <div className="flex justify-between items-center">
            <h1 className="mb-10 text-4xl font-bold text-white">
            Movies
            </h1>
            <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.filter((movie) => movie.poster_path).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

     <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
}
 
export default GenrePage;