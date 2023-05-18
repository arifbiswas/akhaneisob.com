import React from "react";
import Link from "next/link";

const WhiteButton = ({ children, text, css, link }) => {
  return (
    <>
      {link ? (
        <Link
          href={link}
          className={`rounded-md text-green-800 px-5 py-2 font-semibold border-2 border-green-600 shadow-md hover:shadow-green-300 transition-all duration-200 translate-y-0 hover:-translate-y-2 scale-100 hover:scale-105 ${css}`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`rounded-md text-green-800 px-5 py-2 font-semibold border-2 border-green-600 shadow-md hover:shadow-green-300 transition-all duration-200 translate-y-0 hover:-translate-y-2 scale-100 hover:scale-105 ${css}`}
        >
          {children || text}
        </button>
      )}
    </>
  );
};

export default WhiteButton;
