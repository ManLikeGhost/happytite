//myfirstgit
import React, { useState } from "react";
import logo from "../img/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);

  const handleHoverState = (e) => {
    e.target.style.background = "#F2994A";
  };

  const handleHoverStateOut = (e) => {
    e.target.style.background = "";
  };

  const handleDropDown = () => {
    setDropDownState(!dropDownState);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          borderBottom: "2px solid #F2C94C",
          margin: "0 11.75rem 0 11.75rem",
        }}
      >
        <div className="container ">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Happytite Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span
                    className="nav-link menu-item"
                    aria-current="page"
                    onMouseOver={handleHoverState}
                    onMouseOut={handleHoverStateOut}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="meal-planner" style={{ textDecoration: "none" }}>
                  <span
                    className="nav-link menu-item"
                    aria-current="page"
                    onMouseOver={handleHoverState}
                    onMouseOut={handleHoverStateOut}
                  >
                    Meal planner
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <div className="position-relative">
                  <span
                    className="nav-link menu-item"
                    aria-current="page"
                    onMouseOver={handleHoverState}
                    onMouseOut={handleHoverStateOut}
                    onClick={handleDropDown}
                  >
                    Diets
                  </span>
                  {dropDownState ? (
                    <div className="dropdown">
                      <p
                        className="dietlist menu-item"
                        onMouseOver={handleHoverState}
                        onMouseOut={handleHoverStateOut}
                      >
                        Low Carbs
                      </p>
                      <p
                        className="dietlist menu-item"
                        onMouseOver={handleHoverState}
                        onMouseOut={handleHoverStateOut}
                      >
                        Vegetarian{" "}
                      </p>
                      <p
                        className="dietlist menu-item"
                        onMouseOver={handleHoverState}
                        onMouseOut={handleHoverStateOut}
                      >
                        Pescaterian{" "}
                      </p>
                      <p
                        className="dietlist menu-item"
                        onMouseOver={handleHoverState}
                        onMouseOut={handleHoverStateOut}
                      >
                        Vegan{" "}
                      </p>
                      <p
                        className="dietlist menu-item"
                        onMouseOver={handleHoverState}
                        onMouseOut={handleHoverStateOut}
                      >
                        Paleo{" "}
                      </p>
                      <p
                        className="dietlist menu-item"
                        onMouseOver={handleHoverState}
                        onMouseOut={handleHoverStateOut}
                      >
                        keto{" "}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>{" "}
              <li className="nav-item">
                <Link to="nutrition-blog" style={{ textDecoration: "none" }}>
                  <span
                    className="nav-link menu-item"
                    aria-current="page"
                    onMouseOver={handleHoverState}
                    onMouseOut={handleHoverStateOut}
                  >
                    Nutri blog
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="groceries" style={{ textDecoration: "none" }}>
                  <span
                    className="nav-link menu-item"
                    aria-current="page"
                    onMouseOver={handleHoverState}
                    onMouseOut={handleHoverStateOut}
                  >
                    Groceries
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-outline-success">
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/* 
<div className="me-auto"> <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            </div>
            


            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            */
