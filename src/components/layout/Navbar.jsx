import { Link , NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
const Navbar = () => {

    const [isOpen , setIsOpen] = useState(false) ; 

    const navItem = [
        {path : '/' , lable: 'home'} ,
        {path : '/upcoming' , lable: 'upcoming'} ,
        {path : '/shows' , lable: 'shows'} , 
        {path : '/plans' , lable: 'plans'} , 
        {path : '/community' , lable: 'community'} , 
        {path : '/account' , lable: 'account'}
    ]
     return (
      <>
         <div className="flex justify-between md:justify-start px-5 bg-transparent items-center h-20 relative z-50">
            <div className="flex items-center md:px-4">
               <Link className="whitespace-nowrap font-bold text-xl md:text-3xl text-black">
                    Meta Movie
               </Link>
            </div>

            <div className="hidden md:flex font-light text-xl items-center space-x-16 px-10">
               {navItem.map((item) => (
                  <NavLink
                     key={item.path}
                     to={item.path}
                     className={({ isActive }) =>
                        `text-black hover:text-yellow-300 transition-colors ${
                           isActive ? 'text-yellow-300 font-bold' : ''
                        }`
                     }
                  >
                     {item.lable}
                  </NavLink>
               ))}
               <FaSearch className="font-light cursor-pointer text-black hover:text-yellow-300 transition-colors text-2xl" />
            </div>

            <button
               onClick={() => setIsOpen(true)}
               className="md:hidden text-white text-3xl"
            >
               <HiMenu />
            </button>
         </div>

         <>
            <div
               className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${
                  isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
               }`}
               onClick={() => setIsOpen(false)}
            />

            <div
               className={`fixed top-0 right-0 h-full w-72 bg-gray-800 shadow-2xl z-50 flex flex-col p-6 transition-all duration-500 ease-out ${
                  isOpen ? 'translate-x-0' : 'translate-x-full'
               }`}
            >
               <button
                  onClick={() => setIsOpen(false)}
                  className="self-end text-white text-3xl hover:rotate-90 transition-transform duration-300"
               >
                  <CgClose />
               </button>

]               <div className="flex flex-col items-start mt-10 space-y-6">
                  {navItem.map((item) => (
                     <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                           `text-white text-2xl hover:text-yellow-400 transition-colors ${
                              isActive ? 'text-yellow-400 font-bold' : ''
                           }`
                        }
                     >
                        {item.lable}
                     </NavLink>
                  ))}
                  <FaSearch className="text-white text-2xl cursor-pointer hover:text-yellow-400 transition-colors" />
               </div>
            </div>
         </>
      </>
   );
}
 
export default Navbar;