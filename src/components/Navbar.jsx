import React, { useState } from "react";
import { Link } from "react-router-dom";
import PralhadResume from "../assets/PralhadTalmale.pdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  return (
    <nav className="flex justify-between p-4 items-center shadow-md shadow-indigo-400">
      <h1 className="text-2xl font-bold italic border-2 shadow-md shadow-indigo-400 p-2 rounded-full border-indigo-700">
        Pralhad
      </h1>
      <ul className="flex gap-2 items-center italic text-md">
        <li className="hover:shadow-lg hover:shadow-indigo-400  transition-all">
          <Link to="/" className="p-2">
            Home
          </Link>
        </li>
        <li className="hover:shadow-lg hover:shadow-indigo-400 transition-all">
          <Link to="/about" className="p-2">
            About
          </Link>
        </li>
        <li className="hover:shadow-lg hover:shadow-indigo-400 transition-all">
          <Link to="/skills" className="p-2">
            Skills
          </Link>
        </li>
        <li className="hover:shadow-lg hover:shadow-indigo-400 transition-all">
          <Link to="/services" className="p-2">
            Services
          </Link>
        </li>
        <li className="hover:shadow-lg hover:shadow-indigo-400 transition-all">
          <Link to="/contact" className="p-2">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex italic items-center gap-2">
        {mode ? (
          <button onClick={() => setMode(false)}>
            <NightlightRoundOutlinedIcon />
          </button>
        ) : (
          <button onClick={() => setMode(true)}>
            <LightbulbOutlinedIcon />
          </button>
        )}
        <a
          href={PralhadResume}
          download="PralhadCV.pdf"
          className="flex items-center gap-1 hover:underline"
        >
          Download CV
          <FileDownloadIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
