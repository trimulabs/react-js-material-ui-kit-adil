import React from "react";
import Angular from "../../assets/angular.jpeg";
import Bootstrap from "../../assets/bootstrap5.jpeg";
import ReactLogo from "../../assets/react.jpeg";
import Sketch from "../../assets/sketch.jpeg";
import Tailwind from "../../assets/icon-tailwind.jpeg";
import Vue from "../../assets/vue.jpeg";
import { Grid } from "@mui/material";

const style = {
  ButtonStyle: {
    height: "56px",
    width: "56px",
    opacity: "1",
  },
  GridStyle: {
    justifyContent: "center",
    marginBottom: "96px",
  },
};

const TechButtons = () => {
  return (
    <Grid container style={style.GridStyle}>
      <Grid item>
        <img src={Bootstrap} style={style.ButtonStyle} />
      </Grid>
      <Grid>
        <img src={Tailwind} style={style.ButtonStyle} />
      </Grid>
      <Grid>
        <img src={Vue} style={style.ButtonStyle} />
      </Grid>
      <Grid>
        <img src={Angular} style={style.ButtonStyle} />
      </Grid>
      <Grid>
        <img src={ReactLogo} style={style.ButtonStyle} />
      </Grid>
      <Grid>
        <img src={Sketch} style={style.ButtonStyle} />
      </Grid>
    </Grid>
  );
};

export default TechButtons;
