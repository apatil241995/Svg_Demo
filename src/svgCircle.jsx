import React from "react";

const SvgCircle = () => {
  return (
    <svg
      viewBox="0 0 1440 320"
    >
      <circle fill="#002B5B" cx="737" cy="304" r="50">
        <animate
          attributeName="cy"
          from="500"
          to="-100"
          dur="20s"
          repeatCount="indefinite" />
      </circle>
      <path fill="#E4DCCF" d="M21.4,-34.1C28.9,-32.7,37.1,-29.4,48.8,-23.4C60.5,-17.4,75.8,-8.7,77.5,1C79.3,10.7,67.4,21.4,58.6,32.4C49.8,43.4,44,54.8,34.7,55.5C25.4,56.2,12.7,46.3,2.6,41.9C-7.6,37.4,-15.2,38.5,-27,39.2C-38.8,40,-54.8,40.4,-61.2,33.9C-67.5,27.3,-64.2,13.6,-65.8,-1C-67.5,-15.6,-74.2,-31.1,-64.9,-32.5C-55.5,-33.9,-30.2,-21.1,-16.7,-19.1C-3.2,-17.2,-1.6,-26,2.7,-30.6C6.9,-35.2,13.8,-35.6,21.4,-34.1Z" transform="translate(100 100)" />

    </svg>
  )
}

export default SvgCircle