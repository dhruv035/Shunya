import React from "react";
import useDimensions from "./useDimensions";
const Logo = () => {
  const windowDimensions = useDimensions();
  const logoScale = 0.15;
  return (
    <img
      className="shunya-logo fixed"
      src={"/images/shunyaLogo.png"}
      style={{
        opacity: 0.6,
        top: "20px",
        left: "32px",

        //filter: "hue-rotate(90deg) contrast(160%)",
        height: ((windowDimensions.width * 8) / 10) * logoScale,
        width: ((windowDimensions.width * 8) / 10) * logoScale,
        zIndex: 100,
      }}
    />
  );
};
export default Logo;
