import React from "react";
import background from "./../../assets/bg.jpeg";

const styles = {
  paperContainer: {
    height: "540px",
    width: "100%",
    opacity: 1,
  },
};

const HeaderBG = () => {
  return <img src={background} style={styles.paperContainer} />;
};

export default HeaderBG;
