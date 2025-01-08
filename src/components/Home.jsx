import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import myimg from "../assets/myimg.jpg";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center md:justify-center p-4">
      {/* Left Section: Text */}
      <div className="md:w-1/2 flex flex-col items-start text-center md:text-left p-4 space-y-4">
        <h1 className="text-4xl font-bold text-indigo-600">
          Pralhad <span className="text-gray-700">Talmale</span>
        </h1>
        <p className="text-lg text-gray-800 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
          voluptates explicabo, suscipit dolorum saepe vitae repellat labore
          cumque, voluptas architecto a sequi illum quis laborum dignissimos
          soluta ab! Iusto, perspiciatis.
        </p>
        <div className="flex p-2 mt-2 gap-4">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon
              className="text-indigo-500 hover:text-indigo-700 cursor-pointer"
              style={{ fontSize: "2rem" }}
            />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
              style={{ fontSize: "2rem" }}
            />
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
              style={{ fontSize: "2rem" }}
            />
          </a>
          <a
            href="mailto:"
            target="_blank"
            rel="noopener noreferrer"
            area-label="Email"
          >
            <EmailIcon
              className="text-red-600 hover:text-red-800 cursor-pointer"
              style={{ fontSize: "2rem" }}
            />
          </a>
        </div>
        <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
          Let's Connect!
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={myimg}
          alt="Profile"
          className="h-80 w-80 rounded-full border-4 border-indigo-600 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
