import React, { useState, useEffect } from "react";
import { Search, Menu } from "react-feather";

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
          <div>
            <Search />
          </div>
          <div>
            <a className="text-2xl" href="/">
              <img
                src="../../public/logo/Oranye_Hitam_Minimalis_Pecel_Lele_Logo_3_-removebg-preview.png"
                alt="bubro"
                className="w-56 h-56"
              />
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
        className={` mx-auto flex fixed  flex-col items-center justify-start  h-full w-96 top-16 ${open} gap-10 transition-all  ${
          changeColor ? "bg-primary pt-5 " : ""
        } `}
      >
        <div className="flex flex-col justify-center gap-4 my-2">
          <a href="about">About</a>
          <a href="course">Course</a>
          <a href="contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
