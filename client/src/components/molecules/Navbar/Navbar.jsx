import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../../../images/logo.png";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { links } from "../../../dynamicdata";
import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css";
import { SIGN_OUT_SUCCESS } from "../../../redux/actionTypes";

const Navbar = () => {
  const userLoggedIn = useSelector((state) => state.user?.currentUser?.email);

  const [isNavShowing, setIsNavShowing] = useState(false);

  const dispatch = useDispatch();

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path, icon }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                  {icon}
                </NavLink>
              </li>
            );
          })}
          {userLoggedIn ? (
            <>
              <li key="orders_link">
                <NavLink
                  to="/orders"
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  Orders
                </NavLink>
              </li>
              <li key="logout_link">
                <NavLink
                  to="/"
                  onClick={() =>
                    dispatch({
                      type: SIGN_OUT_SUCCESS,
                    })
                  }
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <li key="login_link">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
