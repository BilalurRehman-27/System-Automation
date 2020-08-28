import React, { FunctionComponent } from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import gray from '@material-ui/core/colors/grey';
type CaseDetailNodeProps = {
  label: string
  value: any
};
const CaseDetailNode: FunctionComponent<CaseDetailNodeProps> = (props) => {
  const classes = makeStyles((theme: Theme) => ({
    detailNode: {
      textAlign: "left",
      paddingLeft: 42
    },
    detailNodeLabel: {
      fontSize: 14,
      fontWeight: 550,
      color: gray[800],
    },
    detailNodeValue: {
      fontSize: 13,
      fontWeight: 450,
      color: gray[600]
    }
  }))();
  return (
    <Box display="flex" className={classes.detailNode}>
      <Box display="inline-block">
        <Box component="span" className={classes.detailNodeLabel}>{props.label}: </Box>
        <Box component="span" className={classes.detailNodeValue}>{props.value}</Box>
      </Box>
    </Box>
  );
};

export default CaseDetailNode;
