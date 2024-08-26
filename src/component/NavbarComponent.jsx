import React, { useState } from "react";
import { Search, Menu } from "react-feather";

function NavbarComponent() {
  return (
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
          <Menu />
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
