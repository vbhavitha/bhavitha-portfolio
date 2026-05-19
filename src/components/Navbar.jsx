import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Projects",
    "Resume",
    "Contact",
  ];

  // ROUTES
  const pathMap = {
    Home: "/",
    About: "/about",
    Experience: "/experience",
    Education: "/education",
    Projects: "/projects",
    Resume: "/resume",
    Contact: "/contact",
  };

  return (

    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-cyan-400 tracking-wider"
        >
          BHAVITHA
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-3 bg-[#0b1220]/80 border border-cyan-500/10 px-2 py-2 rounded-full shadow-lg">

          {navItems.map((item, index) => {

            const routePath = pathMap[item];

            // ACTIVE PAGE
            const isActive =
              item === "Home"
                ? location.pathname === "/"
                : location.pathname.startsWith(routePath);

            return (

              <Link
                key={index}
                to={routePath}

                className={`relative px-5 py-2 rounded-full transition-all duration-300 font-medium

                ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400 shadow-md shadow-cyan-500/20"
                    : "text-gray-400 hover:text-cyan-300"
                }

                `}
              >

                {item}

              </Link>

            );

          })}

        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden text-cyan-400">

          <Menu />

        </div>

      </div>

    </nav>

  );
}