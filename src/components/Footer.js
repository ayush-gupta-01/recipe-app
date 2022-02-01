import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        margin: "50px",
        fontWeight: "900",
      }}
    >
      MADE BY{" "}
      <a
        style={{
          color: "red",
          textDecoration: "none",
        }}
        href="https://github.com/ayush-gupta-01"
        target="_blank"
      >
        AYUSH GUPTA
      </a>
    </div>
  );
};

export default Footer;
