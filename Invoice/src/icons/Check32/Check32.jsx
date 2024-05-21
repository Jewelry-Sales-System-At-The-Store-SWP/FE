/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Check32 = ({ color = "#C3ADFF", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 2.08331L3.62503 7.49998L1.25 4.98981"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Check32.propTypes = {
  color: PropTypes.string,
};
