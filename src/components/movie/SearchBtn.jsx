import { useEffect, useRef, useState } from "react";
import {FiSearch , FiX} from 'react-icons/fi'
import { movieService } from "../../services/movie.service";
import { useNavigate } from "react-router-dom";

const SearchBtn = () => {
    const navigate = useNavigate();

    const [isOpen , setIsOpen] = useState(false)
    const inputRef = useRef(null)
    const [query , setQuery] =useState("");
  const [results , setResults] = useState([])

  useEffect(() => {
    if(!query.trim()) return;
    const timer = setTimeout(async () => {
      try{
        const data = await movieService.searchMovie(query);
        setResults(data.results.slice(0,4))
      } catch (error) {
        console.log(error)}
    } , 500)
    return () => clearTimeout(timer)
  } , [query])

    console.log(results)

    useEffect (() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    } , [isOpen])

    return (<>
        <div className="flex items-center">
            <div className={`flex items-center rounded-full
                transition-all duration-300 ${isOpen ? "w-72 px-3 py-2 bg-zinc-900 border-zinc-700 " : "w-12 h-12 justify-center"}`}>
                {isOpen ? (
                    <>
                    <input 
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    placeholder="Search movies ...."
                    className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-500" />

                    {query.trim() && results.length > 0 && (
                         <div className="absolute top-full left-0 mt-3 w-full rounded-2xl bg-zinc-900 border border-zinc-700 shadow-xl overflow-hidden z-50">
                        
                           {results.map((movie) => (
                             <div
                               key={movie.id}
                            onClick={() => {
                                navigate(`/movie/${movie.id}`)
                                setIsOpen(false)
                                setQuery("")
                                setResults([])}}
                            className="flex items-center gap-4 p-3 hover:bg-zinc-800 transition cursor-pointer"
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                              alt={movie.title}
                              className="w-14 h-20 rounded-lg object-cover"
                            />

                            <div className="flex flex-col">
                              <h3 className="text-white font-semibold">
                                {movie.title}
                              </h3>

                              <span className="text-sm text-zinc-400">
                                {movie.release_date?.split("-")[0]}
                              </span>
                            </div>
                          </div>
                        ))}

                      </div>
                    )}

                    <button className="mr-2 text-primary hover:opacity-80" >
                        <FiSearch size={20}/>
                    </button>
                    <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
                        <FiX size={20} />
                    </button>
                    </>
                ) : (
                    <>
                    <button onClick={() => setIsOpen(true)} className="text-white hover:text-primary">
                        <FiSearch size={20} />
                    </button>
                    </>
                )}
            </div>
        </div>
    </> );
}
 
export default SearchBtn;