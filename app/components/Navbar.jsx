'use client'

import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  let [showing, setShowing] = useState(false);

  return (
    <nav className="flex border relative border-grey15 justify-between items-center px-4 py-3 md:py-3 shadow-md rounded-l-full rounded-r-full bg-[#1c1c1c]">
      <img src={Logo} alt="Logo" className="w-24" />
      <div className="hidden sm:flex space-x-3 text-white text-xs sm:text-sm lg:text-base justify-between items-center">
        <Link
          href="/"
          className={`hover:bg-grey15 transition-all rounded-l-full hover:px-5 py-3 rounded-r-full ${
            pathname === "/" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          Home
        </Link>
        <Link
          href="#"
          className={`hover:bg-grey15 rounded-l-full  transition-all rounded-r-full hover:px-5 py-3 ${
            pathname === "/careers" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          Careers
        </Link>
        <Link
          href="#"
          className={`hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3 ${
            pathname === "/about" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          About
        </Link>
        <Link
          href="#"
          className={`hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3 ${
            pathname === "/security" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          Security
        </Link>
      </div>
      <div className="hidden sm:flex font-lexend space-x-2 justify-between text-xs sm:text-sm lg:text-base items-center">
        <button className="px-2 py-3 bg-transparent border-0">Sign Up</button>
        <Link
          href="#"
          className="px-5 py-2 bg-col60 w-fit font-lexend text-normal  text-grey11 rounded-l-full rounded-r-full"
        >
          Login
        </Link>
      </div>
      <button
        className="block sm:hidden text-lg"
        onClick={() => setShowing(true)}
      >
        <i className="fa-solid fa-bars-staggered text-col60"></i>
      </button>
      <div
        className={`flex-col z-50 justify-center ${
          showing ? "opacity-100" : "hidden opacity-0"
        } w-screen left-0 duration-[3000ms] flex top-0 transition-all  h-screen fixed bg-black`}
        id="mobileNav"
      >
        <button
          className="bg-yelloww px-3 md:hidden py-1 w-fit fixed top-3 left-3"
          onClick={() => setShowing(false)}
        >
          <i className="fa fa-times text-lg text-white"></i>
        </button>
        <ul
          className="flex flex-col space-y-5 justify-center items-center text-col60 "
          id="ull"
          onClick={() => setShowing(false)}
        >
          <li href="/" className="hover:text-white text-lg">
            <Link href="/">Home</Link>
          </li>
          <li href="menu" className="hover:text-white  text-lg">
            <Link href="#">Careers</Link>
          </li>
          <li href="blog" className="hover:text-white  text-lg">
            <Link href="#">About</Link>
          </li>
          <li href="page" className="hover:text-white  text-lg">
            <Link href="#">Security</Link>
          </li>
          <button className="px-5 py-2 bg-grey11 w-fit font-lexend text-normal  text-white rounded-l-full rounded-r-full">
            Sign Up
          </button>
          <Link
            className="px-6 py-2 bg-col60 w-fit font-lexend text-normal  text-grey11 rounded-l-full rounded-r-full"
            href="#"
          >
            Login
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;