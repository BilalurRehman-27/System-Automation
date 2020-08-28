import React, { FunctionComponent } from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import Edit from '@material-ui/icons/Edit';
import gray from '@material-ui/core/colors/grey';
type CaseDetailNodeProps = {
  label: string
  value: any
  isEditable?: boolean,
  onChange?: Function
};
const CaseDetailNode: FunctionComponent<CaseDetailNodeProps> = (props) => {
  const classes = makeStyles((theme: Theme) => ({
    detailNode: {
      textAlign: "left",
      marginTop: 25
    },
    detailNodeLabel: {
      fontSize: 17,
      fontWeight: 600,
      color: gray[700],
    },
    detailNodeValue: {
      marginTop: 8,
      fontWeight: 450,
      color: gray[600],
    },
    detailNodeIcon: {
      marginLeft: 8,
    }
  }))();
  return (
      <Box className={classes.detailNode}>
        <Box className={classes.detailNodeLabel}>
          {props.label}
        </Box>
        <Box display="flex" className={classes.detailNodeValue}>
          {props.value}
          {props.isEditable &&
            <Edit className={classes.detailNodeIcon} fontSize="small" />
          }
        </Box>
      </Box>
  );
};

export default CaseDetailNode;
