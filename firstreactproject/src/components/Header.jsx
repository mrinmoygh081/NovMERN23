import React from "react";
import { Link } from "react-router-dom";

const Header = ({ link }) => {
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <img
              src={require("../images/portfolio.png")}
              style={{
                width: "70px",
                borderRadius: "37px",
                marginTop: "10px",
              }}
              alt=""
            />
          </div>
          <div className="right">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/contact"> Let's Talk </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
