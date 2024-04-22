import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import logo from "../public/educatronhighresolutionlogowhitetransparent-3@2x.png";

/*
Navigations:

- Home      -> Button Logo (Redirect)
- Classes   -> Nav Classes (Scroll Down)
- Tutors    -> Nav Tutor (Scroll down)
- About us  -> Nav About Us (Scroll Down)
- Login     -> Button Login (Redirect)

*/

const Header: NextPage = () => {
  return (
<div className="navbar h-20 bg-ColorTealish text-ColorWhite rounded-b-2xl fixed top-0 left-0 right-0">
  <div className="navbar-start">
  <div className="dropdown mr-4">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Classes </a></li>
        <li>
          <a>Tutors</a>
          <ul className="p-2">
            <li><a>Find a tutor</a></li>
            <li><a>Join us as a tutor</a></li>
          </ul>
        </li>
        <li><a>About us</a></li> 
      </ul>
    </div>
    <div className="container">
        <img id="NavHome" className="btn btn-ghost object-contain" src="../educatronhighresolutionlogowhitetransparent-3@2x.png" alt="logo" />
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Classes</a></li>
      <li>
        <details>
          <summary>Tutors</summary>
          <ul className="p-2">
            <li><a>Find a tutor</a></li>
            <li><a>Be a tutor</a></li>
          </ul>
        </details>
      </li>
      <li><a>About us</a></li>
    </ul>
  </div>
  <div className="navbar-end mr-4">
    <a className="btn">Login</a>
  </div>
</div>
  );
};

export default Header;
