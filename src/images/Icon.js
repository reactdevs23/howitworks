import React from "react";

const Icon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M39.5588 0.441232C36.4919 -0.58158 33.1677 0.203342 30.8816 2.48944L22.5296 10.8412L5.12813 3.38358L1.81352 6.69803L15.9005 17.4704L8.28641 25.0844L3.31453 23.427L0 26.7417L8.28641 31.7136L13.2583 40L16.5728 36.6854L14.9156 31.7137L22.5296 24.0996L33.302 38.1866L36.6165 34.8719L29.1588 17.4705L37.5107 9.11858C39.7968 6.83249 40.5817 3.50826 39.5588 0.441232Z"
        fill={color}
      ></path>
      <path
        d="M37.4448 20.7849C36.5295 19.8695 35.0456 19.8695 34.1302 20.7849L33.4297 21.4855L35.4184 26.1259L37.4448 24.0995C38.3601 23.1841 38.3601 21.7002 37.4448 20.7849Z"
        fill={color}
      ></path>
      <path
        d="M19.215 2.55483C18.2998 1.63944 16.8158 1.63944 15.9005 2.55483L13.874 4.58139L18.5145 6.57007L19.215 5.86936C20.1304 4.95413 20.1304 3.47022 19.215 2.55483Z"
        fill={color}
      ></path>
    </svg>
  );
};

export default Icon;