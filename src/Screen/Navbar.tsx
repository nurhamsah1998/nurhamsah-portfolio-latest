import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100  absolute main">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
