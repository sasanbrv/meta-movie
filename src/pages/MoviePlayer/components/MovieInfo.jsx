import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import {Navigation} from "swiper/modules"
import "swiper/css/navigation"
import "../MoviePlayer.css"
const MovieInfo = ({movie}) => {

    const truncate = (text , maxLength) => {
        text.length > maxLength ? text.slice(0 , maxLength) + "..." : text ;
    }
    return ( 
        <>
        <section>
            <div className="text-white  pl-10">
                <div className="">
                    <h1 className="text-2xl py-4">Synopsis</h1>
                    <p>{movie.overview}</p>
                </div>
                <div className="pb-10">
                    <h1 className="text-2xl py-4">Cast</h1>
                    <Swiper
                        spaceBetween={20}
                        grabCursor={true}
                        slidesPerView={1.2}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          1024: {
                            slidesPerView: 4,
                          },
                          1280: {
                            slidesPerView: 5,
                          },
                        }}
                      >
                        {movie.credits.cast.slice(0, 10).map((actor) => (
                          <SwiperSlide modules={[Navigation]} navigation key={actor.id}>
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 overflow-hidden rounded-full shrink-0">
                                <img
                                  className="w-full h-full object-cover"
                                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                  alt={actor.name}
                                />
                              </div>
                        
                              <div>
                                <h1 className="whitespace-nowrap font-semibold">
                                  {actor.name}
                                </h1>
                        
                                <h2 className="whitespace-nowrap text-sm text-gray-400">
                                  {truncate(actor.character, 25)}
                                </h2>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                </div>
            </div>
        </section>
        
        </>
     );
}
 
export default MovieInfo;