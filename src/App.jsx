import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

// Check if root is already created
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
