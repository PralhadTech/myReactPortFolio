import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import myimg from "../assets/myimg.jpg";
const Home = () => {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row  items-center justify-center gap-10 h-screen p-4 ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-700">Hello, I'm</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
            Pralhad Talmale
          </h1>
          <h2 className="text-2xl font-bold mt-2 text-black">
            And I'm a <span className="text-blue-600">ReactJS Developer |</span>
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            ReactJS developer with practical experience in building and
            enhancing responsive web applications. Dedicated to contributing to
            innovative projects that boost user engagement and drive business
            growth.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/pralhad-talmale-b32109145/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition duration-200"
            >
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-200"
            >
              <XIcon fontSize="large" />
            </a>
          </div>
          {/* Buttons */}
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded shadow-md hover:bg-blue-700 transition duration-200">
              Hire Me
            </button>
            <button className="ml-4 bg-gray-100 border-blue-600 border-2 text-gray-700 py-2 px-4 rounded shadow-md hover:bg-blue-600 hover:text-white transition duration-200">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Section */}
        {/* Right Section */}
        <div className="relative flex justify-center items-center">
          {/* Animated Background Decorative Elements */}
          <div className="absolute h-80 w-80 bg-gradient-to-br from-blue-700 to-purple-700 rounded-full blur-2xl animate-pulse -z-10"></div>
          <div className="absolute h-80 w-80 bg-gradient-to-tl from-orange-400 to-yellow-300 rounded-full blur-lg top-10 left-10 animate-bounce -z-10"></div>

          {/* Profile Image */}
          <div className="h-60 w-60 relative">
            <img
              src={myimg}
              alt="myimg"
              className="rounded-full  shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex justify-around  py-4 text-center">
        <div className="border-4  h-28 w-28  rounded-full">
          <p className="text-2xl font-bold">6+</p>
          <p className="text-sm">Months of Exp</p>
        </div>
        <div>
          <p className="text-2xl font-bold">10+</p>
          <p className="text-sm">Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold">6+</p>
          <p className="text-sm">Technologies</p>
        </div>
        <div>
          <p className="text-2xl font-bold">10+</p>
          <p className="text-sm">Clients</p>
        </div>
      </div>
    </>
  );
};

export default Home;
