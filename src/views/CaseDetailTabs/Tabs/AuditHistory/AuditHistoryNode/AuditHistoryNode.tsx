import React, { FunctionComponent } from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import gray from '@material-ui/core/colors/grey';
import moment from 'moment';

type AuditHistoryNodeProps = {
  date: Date
  description: any
};

const AuditHistoryNode: FunctionComponent<AuditHistoryNodeProps> = (props) => {
  const classes = makeStyles((theme: Theme) => ({
    detailNode: {
      textAlign: "left",
      paddingLeft: 42,
      width: '80%',
      marginBottom:'1%'
    },
    detailNodeLabel: {
      fontSize: 13,
      color: gray[600]
    },
    detailNodeValue: {
      fontSize: 14,
      marginLeft: 20,
      color: gray[800],
    }
  }))();
  return (
    <Box display="flex" className={classes.detailNode}>
      <Box display="inline-block">
        <Box component="span" className={classes.detailNodeLabel}>{moment(props.date).format("MMM DD, YYYY, hh:mm a")}</Box>
        <Box component="span" className={classes.detailNodeValue}>{props.description}</Box>
      </Box>
    </Box>
  );
};

export default AuditHistoryNode;
