import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold font-serif hover:cursor-pointer">
          <span className="border-2 border-solid rounded-full px-3 py-1 bg-gray-100 italic border-indigo-600 text-indigo-600">
            DEV
          </span>{" "}
          Pralhad
        </h1>
      </Link>
      {/* Navigation Links */}
      <ul className="flex gap-6 text-lg font-medium">
        <li>
          <Link
            to="/about"
            className="hover:text-indigo-600 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-indigo-600 transition-colors duration-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className=" border-2 border-indigo-600 p-2 hover:text-indigo-600 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
