import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-screen bg-slate-700 ">
      <nav className="p-5 flex items-center">
        <div className="container max-w-3xl mx-auto flex justify-between items-center">
          <div className="text-lg text-black font-bold">TODOS TRACKER</div>
          <ul className="flex flex-row items-center space-x-4 gap-1 ">
            <li className="list-none">
              <Link to="/next7" className="hover:underline pr-5">
                ToDos
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="hover:underline pl-10">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
