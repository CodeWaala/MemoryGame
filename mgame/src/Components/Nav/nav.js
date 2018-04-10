import React from "react";
import "./navbar.css"

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li className="">{props.answerresponse}</li>
      <li>Score: {props.score} | Top Score: {props.highscore}</li>
    </ul>
  </nav>
);

export default Nav;
