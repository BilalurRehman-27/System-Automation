import React, { FunctionComponent } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CaseDataCard from "./CaseDataCard";
import RespondentCard from "./RespondentCard";
import ComplainantCard from "./ComplainantCard";

type CaseDataProps = {};
const useStyles = makeStyles({
  root: {
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 40,
    display: "inline-block",
    verticalAlign: "top",
  },
});
const CaseData: FunctionComponent<CaseDataProps> = (props) => {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={12} lg={12}>
      <Box className={classes.root}>
        <CaseDataCard />
      </Box>
      <Box className={classes.root}>
        <RespondentCard />
      </Box>
      <Box className={classes.root}>
        <ComplainantCard />
      </Box>
      <Box className={classes.root}>
        <RespondentCard />
      </Box>
    </Grid>
  );
};

export default CaseData;
