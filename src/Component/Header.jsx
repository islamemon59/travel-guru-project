import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthProvider } from "../Context/CreateContext";

const Header = () => {
  const { user, signOutUser } = use(AuthProvider);
  console.log(user?.photoURL);
  const links = (
    <>
      <li>
        <NavLink to="/">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser().then(() => {
      alert("Successfully Logout")
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <nav>
      <div className="navbar bg-transparent py-4 montserrat">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-28" src="logo.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-[16px]">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li onClick={handleSignOut}>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn bg-[#F9A51A]">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
