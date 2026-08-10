import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-8 py-3 rounded-full font-bold shadow-lg ${
          active ? "bg-gradient-to-r from-yellow-100 to-yellow-50 text-black shadow-yellow-50/50" : "bg-richblack-800 text-richblack-5 border border-richblack-700 shadow-richblack-900/50"
        } hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;