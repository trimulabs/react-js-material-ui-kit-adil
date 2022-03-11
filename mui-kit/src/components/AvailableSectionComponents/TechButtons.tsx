import React from "react";
import Angular from "../../assets/angular";
import Bootstrap from "../../assets/bootstrap";
import ReactLogo from "../../assets/reactlogo";
import Sketch from "../../assets/sketch";
import Tailwind from "../../assets/tailwind";
import Vue from "../../assets/vue";
import { Grid } from "@mui/material";

const TechButtons = () => {
  return (
    <Grid container>
      <Grid>
        <Bootstrap style={{ height: "56px", width: "56px" }} />
      </Grid>
      <Grid>
        <Tailwind style={{ height: "56px", width: "56px" }} />
      </Grid>
      <Grid>
        <Vue style={{ height: "56px", width: "56px" }} />
      </Grid>
      <Grid>
        <Angular style={{ height: "56px", width: "56px" }} />
      </Grid>
      <Grid>
        <ReactLogo style={{ height: "56px", width: "56px" }} />
      </Grid>
      <Grid>
        <Sketch style={{ height: "56px", width: "56px" }} />
      </Grid>
    </Grid>
  );
};

export default TechButtons;
