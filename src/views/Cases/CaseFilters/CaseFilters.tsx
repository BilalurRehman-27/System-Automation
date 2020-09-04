import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MultiSelectComponent from "../../../components/MultiSelectComponent";
import {
  Assignees,
  CaseTypes,
  CaseStatus,
} from "../../../assets/mock/DummyData";
import DateFrom from "../../../components/DatePicker";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "200px",
    },
    mr: {
      paddingTop: "2px",
      paddingLeft: "5px",
      width: "auto"
    },
    filters: {
      flexGrow: 1,
      width: "100%",
    },
  })
);

export default function CaseFilters() {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={8} lg={8} className="case-filters-container">
        <Grid container className={classes.filters}>
          <Grid item>
            <div className={classes.root}>
              <MultiSelectComponent label="Assigned To" data={Assignees} />
            </div>
          </Grid>
            <Divider orientation="vertical" flexItem />
          <Grid item>
            <div className={classes.root}>
              <MultiSelectComponent label="Types" data={CaseTypes} />
            </div>
          </Grid>
            <Divider orientation="vertical" flexItem />
          <Grid item>
            <div className={classes.root}>
              <MultiSelectComponent label="Status" data={CaseStatus} />
            </div>
          </Grid>
            <Divider orientation="vertical" flexItem />
          <Grid item>
            <div className={classes.mr}>
              <DateFrom label="Date From"  />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.mr}>
              <DateFrom label="Date To" />
            </div>
          </Grid>
        </Grid>
    </Grid>
  );
}
