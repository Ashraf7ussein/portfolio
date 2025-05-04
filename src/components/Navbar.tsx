import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { GiSkullCrack } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "projects", href: "#projects" },
  { name: "contact me", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-primary px-4 py-6 rounded-b-2xl">
      <a href="/" className="flex items center gap-3">
        <GiSkullCrack className="text-white text-4xl mx-3 md:m-0" />
        <span className="text-white text-2xl font-medium hidden md:block relative top-[5px]">
          Ashraf.
        </span>
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-flex w-10 h-10 justify-center items-center rounded-lg md:hidden
         hover:bg-secondary cursor-pointer transition-all duration-300"
      >
        {menuOpen ? (
          <IoClose className="text-white text-3xl" />
        ) : (
          <HiOutlineMenu className="text-white text-3xl" />
        )}
      </button>

      <div
        className={`w-full transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        md:max-h-none md:opacity-100 md:block md:w-auto`}
      >
        <ul className="font-medium capitalize flex flex-col md:flex-row text-white gap-1 text-xl">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:bg-secondary transition-all duration-300 px-4 pb-1 pt-2 rounded-xl"
            >
              <a href={link.href} onClick={() => setMenuOpen(!menuOpen)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
