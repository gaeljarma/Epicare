import React from "react";
import Svg, { Path } from "react-native-svg";

function Sad( { currentColor } ) {
  return (
    <Svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke={currentColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path fill="none" />
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M9 10l.01 0" />
    <Path d="M15 10l.01 0" />
    <Path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
  </Svg>
  );
}

export default Sad;
