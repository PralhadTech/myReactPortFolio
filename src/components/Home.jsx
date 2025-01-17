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
      <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4 ">
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
              className="text-gray-800 hover:text-black transition duration-200"
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
              className="text-gray-500 hover:text-gray-700 transition duration-200"
            >
              <XIcon fontSize="large" />
            </a>
          </div>
          {/* Buttons */}
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded shadow-md hover:bg-blue-700 transition duration-200">
              Hire Me
            </button>
            <button className="ml-4 bg-gray-100 text-gray-700 py-2 px-4 rounded shadow-md hover:bg-gray-200 transition duration-200">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Section */}
      </div>

      {/* Experience Section */}
      <div className="flex justify-around text-white py-4 text-center">
        <div>
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
