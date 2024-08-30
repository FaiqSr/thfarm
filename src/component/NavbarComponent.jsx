import React, { useState, useEffect } from "react";
import { Search, Menu, ShoppingCart } from "react-feather";
import { navbar } from "../data/web";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo/nav-logo.png";

function NavbarComponent() {
  const [open, setOpen] = useState("-right-96 w-96");

  const [changeColor, setChangeColor] = useState(false);

  const backgroundColorChange = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    backgroundColorChange();

    window.addEventListener("scroll", backgroundColorChange);
  });

  function handleNavbar() {
    if (open === "-right-96 w-96") {
      setOpen("right-0 w-96");
    } else if (open === "right-0 w-96") {
      setOpen("-right-96 w-96");
    }
  }

  return (
    <div>
      <div
        className={`fixed w-full h-16 justify-around top-0 flex ${
          changeColor ? "bg-white-utama shadow-sm p-10" : ""
        } transition-all z-10`}
      >
        <nav className="mx-auto flex items-center w-full justify-around ">
          <div className="flex gap-3">
            <Search />
          </div>
          <div className="max-w-40">
            <a href="/">
              <img src={logo} alt="bubro" className="" />
            </a>
          </div>
          <div>
            <button onClick={() => handleNavbar()}>
              <Menu />
            </button>
          </div>
        </nav>
      </div>
      <div
        className={` container mx-auto flex fixed  flex-col items-center justify-start  h-full w-96 top-16 ${open} gap-10 transition-all  ${
          changeColor ? "bg-primary pt-5 " : ""
        } `}
      >
        <div className="flex flex-col justify-center items-center gap-4 my-2">
          {navbar.map((data) => {
            return (
              <div key={data.id} className="w-96">
                <NavLink
                  to={data.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-white-utama w-full px-5 py-2"
                      : ""
                  }
                >
                  {data.text}
                </NavLink>
              </div>
            );
          })}

          <NavLink to="/market">
            <ShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
