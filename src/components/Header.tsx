import profile from "../assets/profile.webp";

const Header = () => {
  return (
    <div id="home" className="rippedPaper mx-8 md:mx-24 my-10 rounded-t-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 md:p-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ashraf <br /> Hussein.
          </h1>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Frontend Developer</h2>
            <p className="mt-2 text-gray-600">
              Crafting seamless digital experiences. Transforming ideas into
              visually stunning and interactive web applications, one pixel at a
              time.
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
  );
};

export default Header;
