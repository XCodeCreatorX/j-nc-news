import React from "react";
import { Link } from "@reach/router";

class Title extends React.Component {
  render() {
    return (
      <div className="titleContainer">
        <h1>News Application</h1>

        <ul className="navBar">
          <li className="navItem">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="navItem">
            <Link to="/articles">
              <p>Articles</p>
            </Link>
          </li>
          <li className="navItem">
            <Link to="/topics">
              <p>Topics</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Title;
