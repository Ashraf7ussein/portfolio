import { useEffect } from "react";
import profile from "../assets/profile.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    //  destroy AOS on component unmount
    return () => AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" className="pt-[100px]">
      <div id="home" className="rippedPaper mx-8 md:mx-24 my-10 rounded-t-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 md:p-10">
          <div className="max-w-xl">
            <h1 className="customFont text-4xl md:text-6xl">
              Ashraf <br /> Hussein.
            </h1>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Frontend Developer</h2>
              <p className="mt-2 text-gray-600">
                Crafting seamless digital experiences. Transforming ideas into
                visually stunning and interactive web applications, one pixel at
                a time.
              </p>
            </div>
          </div>
          <img
            src={profile}
            alt="Profile"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
