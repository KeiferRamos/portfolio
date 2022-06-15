import { links } from "../data/navlinks";
import "../styles/navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const nav = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [pathname, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const getScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", getScreenWidth);

    return () => window.removeEventListener("resize", getScreenWidth);
  }, [screenWidth]);

  const navigate = (path) => nav(path);

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className="navbar">
      <h3 className="title">My Portfolio</h3>
      {links.map(({ name, path, logo }, index) => {
        return (
          <p
            className={`${pathname == path && "active"} links`}
            key={index}
            onClick={() => navigate(path)}
          >
            {screenWidth > 500 ? name.toUpperCase() : logo}
          </p>
        );
      })}
    </div>
  );
}

export default Navbar;
