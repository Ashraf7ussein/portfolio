import { GrGithub, GrLinkedin } from "react-icons/gr";
import about from "../assets/about.svg";
import cv from "../assets/cv.pdf";
import { IoMdDownload } from "react-icons/io";

const About = () => {
  return (
    <div id="about" className="py-8 md:py-16 px-4 md:px-8">
      <h2 className="customFont underline underline-offset-4 decoration-wavy capitalize decoration-primary text-3xl md:text-4xl font-bold text-center">
        About me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
        <img
          className="w-64 h-64 md:w-80 md:h-80 mt-10 md:m-0"
          src={about}
          alt="About Me Image"
        />

        <div className="px-10">
          <p className="text-gray-800 text-lg leading-relaxed">
            I'm <span className="font-bold">Ashraf</span>, a Mechatronics
            Engineering graduate (class 2019). This website showcases my
            transition into front-end development and mobile development. With a
            background in mechatronics, I’m excited to explore the world of
            digital innovation. Join me as I share insights, projects, and
            experiences in this thrilling journey post-graduation. Let’s
            innovate and build remarkable digital experiences together!
          </p>

          <div className="flex flex-col md:flex-row items-center flex-nowrap justify-center md:justify-start gap-4 mt-10">
            <a
              href={cv}
              download
              className="flex items-center gap-2 px-5 pb-2 pt-3 border border-primary text-primary
              rounded-full shadow hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300 relative"
            >
              Download CV <IoMdDownload size={20} />
            </a>
            <a
              href="https://github.com/Ashraf7ussein"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 pb-2 pt-3  border border-primary text-primary
              rounded-full shadow hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300 relative"
            >
              GitHub <GrGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashraf7ussein/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 pb-2 pt-3  border border-primary text-primary
              rounded-full shadow hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300 relative"
            >
              LinkedIn <GrLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
