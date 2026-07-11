import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import mainLogo from "../../assets/img/main logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: "/", label: "Home", end: true },
    { path: "/upcoming", label: "Upcoming" },
    { path: "/shows", label: "Shows" },
    { path: "/plans", label: "Plans" },
    { path: "/community", label: "Community" },
    { path: "/account", label: "Account" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`md:fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black md:bg-[#0B0B0B]/40 backdrop-blur-md shadow-lg"
            : "bg-black md:bg-transparent"
        }`}
      >
        <div className="container mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <img src={mainLogo} className="w-40 h-auto" alt="" />
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 md:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `text-base md:text-lg  transition ${
                    isActive
                      ? "text-primary font-bold"
                      : " text-white  hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <FaSearch className="text-xl md:text-2xl text-white cursor-pointer hover:text-primary transition" />
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            <HiMenu />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 w-72 h-screen bg-[#151515] z-50 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl ml-auto block"
          >
            <CgClose />
          </button>

          <div className="mt-10 flex flex-col gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl transition ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-white hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
