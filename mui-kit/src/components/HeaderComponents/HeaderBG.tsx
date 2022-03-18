import background from "./../../assets/bg.jpeg";

const styles = {
  BG: {
    height: "540px",
    width: "100%",
    opacity: 1,
  },
};

const HeaderBG = () => {
  return <img src={background} style={styles.BG} />;
};

export default HeaderBG;
