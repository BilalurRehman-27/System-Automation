import React, { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
type HeaderProps = {};

const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <Grid container className="header">
      {props.children}
    </Grid>
  );
};

export default Header;
