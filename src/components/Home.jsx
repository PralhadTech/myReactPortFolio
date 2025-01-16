import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Home = () => {
  return (
    <div className="flex items-center h-screen p-4">
      <div className="w-1/2">
        <h3 className="font-bold">Hello I'm</h3>
        <h1 className="text-3xl font-bold">Pralhad Talmale</h1>
        <h2 className="font-bold">
          And I'm a{" "}
          <span className="font-bold text-blue-700">ReactJS Developer|</span>
        </h2>
        <p className="text-justify mt-4">
          ReactJS developer with practical experience in building and enhancing
          responsive web applications. Dedicated to contributing to innovative
          projects that boost user engagement and drive business growth.{" "}
        </p>
        <ul className="flex mt-4 space-x-4">
          <li>
            <LinkedInIcon className="text-blue-600 hover:text-blue-800 cursor-pointer" />
          </li>
          <li>
            <GitHubIcon className="text-gray-700 hover:text-black cursor-pointer" />
          </li>
          <li>
            <FacebookIcon className="text-blue-500 hover:text-blue-700 cursor-pointer" />
          </li>
          <li>
            <XIcon className="text-indigo-500 hover:text-indigo-700 cursor-pointer" />
          </li>
        </ul>
        <button className="border p-1  rounded bg-blue-500 text-white hover:bg-blue-700">
          Hire Me
        </button>
        <button className="border p-1 rounded ml-2 bg-gray-500 text-white hover:bg-gray-700">
          Contact Me
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center">Right</div>
    </div>
  );
};

export default Home;
