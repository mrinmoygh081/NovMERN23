import React from "react";

const Header = () => {
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
                <a href="/"> Home</a>
              </li>
              <li>
                <a href="/"> Skills</a>
              </li>
              <li>
                <a href="/"> Qualification</a>
              </li>
              <li>
                <a href="/"> Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
