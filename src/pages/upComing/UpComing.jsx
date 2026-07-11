import { useEffect , useState } from "react"; 
import { movieService } from "../../services/movie.service";
import UpComingSec from "./components/UpCominSec";

const UpComing = () => {

    const [movies , setMovies] = useState([])
    const [loading , setLoading] = useState(false)
    
    useEffect (() => {
        const fetchMovie = async () => {
            try {
                setLoading(true); 
                const data = await movieService.getUpcoming();
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); 
            }
        };
        fetchMovie();
    },[]);
    const groupedMovies = movies.reduce((acc, movie) => {
      const date = new Date(movie.release_date);

      const month = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      });

      if (!acc[month]) {
        acc[month] = [];
      }

      acc[month].push(movie);
      
      return acc;
    }, {});
    console.log(groupedMovies)
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
        <>
        <UpComingSec groupedmovies={groupedMovies} />
        </>
     );
}
 
export default UpComing;