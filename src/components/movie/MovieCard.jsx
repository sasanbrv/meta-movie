import { FaStar } from "react-icons/fa";

const MovieCard = ({movie,onClick}) => {

    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return ( 
        <>
        <div onClick={onClick}
            className="w-40 overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105">
            <img alt={movie.title} src={imageUrl} className="rounded-tr-2xl rounded-bl-2xl  h-52 w-full object-cover"/>
            <div className="p-4">
                <h3 className="truncate text-lg font-semibold">{movie.title}</h3>
                <div className="mt-2 flex justify-between">
                    <span className="flex items-center gap-2"><FaStar className="text-yellow-500"/>{movie.vote_average.toFixed(1)}</span>
                    <span>{movie.release_date?.split("-")[0]}</span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default MovieCard;