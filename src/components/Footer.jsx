import React from "react";
import footerImg from "/images/bottom_picture.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="absolute bottom-0 left-0 flex items-center justify-between w-screen bg-cover min-h-32"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <span className="text-slate-200">© 2025 B™</span>
      <NavLink
        to="/contact"
        className="m-4 underline text-slate-200 hover:text-slate-400"
      >
        Contact
      </NavLink>
    </div>
  );
}
