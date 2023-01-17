import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      viewBox="0 0 1024 1024"
    >
      <path
        id="followPath"
        d="M394.1-214.9c-49.7 89.4 114.4 192.8 175.5 475.1 13 60.1 85.4 424-98.1 552.6-95.7 67-267.2 74.5-346.3-22.1-70.8-86.5-49-233.9 19.2-305.2 102.4-107 353.9-89.1 593.2 96.5 139.6 107 294.1 258.4 415 468.6 19.2 33.5 36.6 66.6 52.3 99.3 13 8.6 34 19.5 53.3 13.2 148-48.6 165.1-1094.5-338.5-1374.8-196-109.1-470.7-102.1-525.6-3.2z"
      ></path>
      <path d="M394.1-214.9c-49.7 89.4 114.4 192.8 175.5 475.1 13 60.1 85.4 424-98.1 552.6-95.7 67-267.2 74.5-346.3-22.1-70.8-86.5-49-233.9 19.2-305.2 102.4-107 353.9-89.1 593.2 96.5 139.6 107 294.1 258.4 415 468.6 19.2 33.5 36.6 66.6 52.3 99.3 13 8.6 34 19.5 53.3 13.2 148-48.6 165.1-1094.5-338.5-1374.8-196-109.1-470.7-102.1-525.6-3.2z"></path>
      <path id="airplain" d="M8.04 84L92 48 8.04 12 8 40l60 8-60 8z">
        <animateMotion
          fill="freeze"
          dur="15s"
          repeatCount="indefinite"
          rotate="auto"
          xlinkHref="#airplain"
        >
          <mpath xlinkHref="#followPath"></mpath>
        </animateMotion>
      </path>
    </svg>
  );
}

export default Icon;