// components/icons/SearchIcon.js
import React from "react";

const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 3a8 8 0 110 16 8 8 0 010-16zM21 21l-4.35-4.35"
    />
  </svg>
);

export default SearchIcon;
