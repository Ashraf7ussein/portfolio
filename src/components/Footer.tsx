import { GrGithub, GrLinkedin } from "react-icons/gr";
import { GiSkullCrack } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-secondary ">
      <div className="bg-primary rounded-t-2xl text-white p-4 flex flex-col md:flex-row items-center gap-7 justify-center">
        <GiSkullCrack className="text-5xl" />
        <p className="text-sm mt-2 md:mt-0">
          &copy; 2025 Ashraf. All rights reserved.
        </p>
        <div className="flex mt-2 md:mt-0">
          <a
            href="https://github.com/Ashraf7ussein"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-secondary transition-all duration-300 rounded-xl px-4 py-2" // set padding here
            aria-label="GitHub profile"
          >
            <GrGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashraf7ussein/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-secondary transition-all duration-300 rounded-xl px-4 py-2" // set padding here
            aria-label="LinkedIn profile"
          >
            <GrLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
