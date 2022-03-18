import React from "react";
import SocialButtons from "./SocialButtons";
import TechButtons from "./TechButtons";
import { Typography } from "@mui/material";

const style = {
  Heading: {
    lineHeight: "1.375",
    opacity: "1",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    justifyContent: "center",
    textAlign: "center" as "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "48px",
    marginBottom: "24px",
  },
};

function AvailableSection() {
  return (
    <div>
      <Typography variant="h3" style={style.Heading}>
        Available on these technologies
      </Typography>
      <TechButtons />
      <SocialButtons />
    </div>
  );
}

export default AvailableSection;
