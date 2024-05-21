/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Minus18 = ({ color = "#7341FB", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="8"
      viewBox="0 0 8 8"
      width="8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 4L1 4" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
};

Minus18.propTypes = {
  color: PropTypes.string,
};
