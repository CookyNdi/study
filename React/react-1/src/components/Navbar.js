import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav>
      <a href="#">
        <h1>Bookgram</h1>
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Contant</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
