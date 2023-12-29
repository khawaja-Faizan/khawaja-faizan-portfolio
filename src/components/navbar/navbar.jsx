import React, { useState } from "react";

import { routes } from "../../system/routes.js";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle between the opened and closed state of hamburger (Mobile view)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to add "active" class against the current location on browser
  const activeRoute = (currentRoute) => {
    return currentRoute.path === window.location.pathname ? "active" : "";
  };

  return (
    <header>
      <div className="menu-btn" onClick={() => toggleMenu()}>
        <div className={`menu-btn__burger ${showMenu ? "open" : ""}`}></div>
      </div>

      <nav className={`nav ${showMenu ? "open" : ""}`}>
        <h3>Faizan.dev</h3>
        <ul className={`menu-nav ${showMenu ? "open" : ""}`}>
          {routes.map((route) => (
            <li
              className={`menu-nav__item ${activeRoute(route)} ${
                showMenu ? "open" : ""
              }`}
            >
              <a to={route.path} className="menu-nav__link">
                {route.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
