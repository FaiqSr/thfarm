import React, { useState } from "react";
import { Search, Menu } from "react-feather";

function NavbarComponent() {
  const [open, setOpen] = useState("-right-96 w-96");

  function handleNavbar() {
    if (open === "-right-96 w-96") {
      setOpen("right-0 w-96");
    } else if (open === "right-0 w-96") {
      setOpen("-right-96 w-96");
    }
  }

  return (
    <div>
      <div className="fixed w-full h-16 justify-around top-0 flex bg-white-utama shadow-sm ">
        <nav className="mx-auto flex items-center w-full justify-around">
          <div>
            <Search />
          </div>
          <div>
            <a className="text-2xl" href="/">
              BuBro Farm
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
        className={` mx-auto flex fixed  flex-col items-center justify-start bg-white-utama border h-full w-96 top-16 ${open} gap-10 transition-all `}
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
