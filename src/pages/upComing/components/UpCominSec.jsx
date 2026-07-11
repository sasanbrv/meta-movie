import upComingBg from '../../../assets/img/upcomingbg.jpg'
const UpComingSec = ({groupedmovies}) => {
    console.log(groupedmovies)
    return ( 
        <>
         <div className="relative h-100 w-full bg-cover bg-center" 
         style={{
             backgroundImage : `url(${upComingBg})`,}}>
             <div className='absolute inset-0 bg-black/60'></div>
             <div className='relative flex h-full items-center justify-center'>
                 <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-white uppercase whitespace-nowrap'>Upcoming movies ...</h1>
             </div>
         </div>

    {Object.entries(groupedmovies).map(([month , movies]) => (
        <div className='mt-10' >
            <h2 className='text-xl mb-6 text-white'>{month}</h2>

            <div className='border-t border-primary py-4'>
                <div className='md:grid md:grid-cols-2 gap-4'>
                {movies.slice(0,10).map((movie) => (
                    <div className='flex my-2  items-center gap-6 md:gap-4 '>
                    <span 
                    className=' w-14 h-14 text-2xl text-center flex justify-center items-center rounded-full text-primary bg-secondary'>
                        {new Date(movie.release_date).getDate()}</span>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className='w-16 h-16 object-cover rounded-2xl' />
                    <div>
                         <h1 className='text-white text-md'>{movie.title}</h1>
                   </div>
                    
                    </div>))}
                </div>
            </div>
        </div>

    ))}
    </>
     );
}
 
export default UpComingSec;