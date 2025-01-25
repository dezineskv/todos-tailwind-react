import React, { useContext } from "react";
import { TfiAgenda } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="max-w-7xl header">
      <Link to="/"  style={{ display: 'flex', alignItems: 'center'}}>
        <div>
          <TfiAgenda style={{ marginTop: "4px" }} />
        </div>
        <div>
          <h2 style={{ fontSize: "32px" }}>To-Do Tasks Tracker</h2>
        </div>
      </Link>
    </div>
  );
}

export default Header;
