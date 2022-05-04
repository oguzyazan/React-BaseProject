import React from "react";
import { Outlet } from "react-router";
import background from "../assets/images/register_bg_2.png";

// components

//import Navbar from "components/Navbars/AuthNavbar.js";
//import FooterSmall from "components/Footers/FooterSmall.js";

// views

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>
          <Outlet />
        </section>
      </main>
    </>
  );
}
