import { useNavigate } from "react-router-dom";

const GenreCard = ({bgImg , title , id } ) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/genre/${id}`); 
    }
    return ( 

        <>
        <div onClick={handleClick} className=" relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl" style={{
            backgroundImage: `url(${bgImg})`, backgroundSize:"cover" , backgroundPosition:"center"
        }}>
            <div className="absolute bg-black/50 inset-0 flex items-center justify-center ">
                <h2 className="  text-2xl font-bold text-white">{title}  </h2>
            </div>

        </div>
        </>
     );
}
 
export default GenreCard;