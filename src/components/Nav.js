import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      style={{
        fontSize: " 1.5rem",
        fontWeight: "700",
        backgroundColor: "#191919",
        height: "8vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "white",
        }}
        to="/"
      >
        Recipe Finder
      </Link>
    </div>
  );
};

export default Nav;
