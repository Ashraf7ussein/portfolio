import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiSkullCrack } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";

const navLinks = [
  { name: "about", target: "about" },
  { name: "projects", target: "projects" },
  { name: "contact me", target: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (target: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: target } });
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between bg-primary px-4 py-6 rounded-b-2xl shadow-lg">
      <a href="/" className="flex items-center md:gap-2">
        <GiSkullCrack className="text-white text-4xl mx-3 md:m-0" />
        <span className="customFont text-white text-3xl">Ashraf</span>
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex w-10 h-10 justify-center items-center rounded-lg md:hidden hover:bg-secondary cursor-pointer transition-all duration-300"
      >
        {menuOpen ? (
          <IoClose className="text-white text-3xl" />
        ) : (
          <HiOutlineMenu className="text-white text-3xl" />
        )}
      </button>

      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:max-h-none md:opacity-100 md:block md:w-auto`}
      >
        <ul className="font-medium capitalize flex flex-col md:flex-row text-white gap-1 text-xl">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:bg-secondary cursor-pointer transition-all duration-300 px-4 pb-1 pt-2 rounded-xl"
            >
              <button onClick={() => handleNavClick(link.target)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
