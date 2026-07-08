import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout=() => {
  const {pathname} = useLocation()
  useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className=" bg-black flex-1">
        <div className="container mx-auto px-4 py-8">
         <Outlet />  
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default MainLayout;