import React from "react";

function NavbarComponent() {
  return (
    <>
      <nav className="fixed top-0 z-50">
        <div className="relative flex">
          <div>
            <a href="/marketplace">Toko</a>
          </div>
          <div>
            <a href="/">
              <img src="" alt="" />
            </a>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
