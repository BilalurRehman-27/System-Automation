import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Box, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import gray from "@material-ui/core/colors/grey";
import EditIcon from "@material-ui/icons/Edit";

type CaseDataCard = {};
const CaseDataCard: FunctionComponent<CaseDataCard> = (props) => {
  const classes = makeStyles((theme: Theme) => ({
    root: {
      width: 500,
      minWidth: 275,
      display: "inline-block",
    },
    title: {
      color: "#3a96cd",
      fontSize: 14,
      fontWeight: "bold",
    },
    editIcon: {
      justifyContent: "flex-end",
      padding: 0,
    },
    detailNode: {
      textAlign: "right",
    },
    detailNodeLabel: {
      fontSize: 14,
      fontWeight: 550,
      marginRight: 20,
      verticalAlign: "bottom",
      color: gray[800],
    },
    detailNodeValue: {
      fontSize: 13,
      fontWeight: 450,
      color: gray[700],
    },
    formLabel: {
      color: "#000",
      "&.Mui-focused": {
        color: "#000",
      },
    },
    caseDataContainer: {
      padding: 5,
    },
  }))();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardActions className={classes.editIcon}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </CardActions>
        <Typography className={classes.title}>Case Data</Typography>
        <Box className={classes.caseDataContainer}>
          <Box display="flex" className={classes.detailNode}>
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Case ID Number
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              #2010-3211
            </Box>
          </Box>
          <Box display="flex" className={classes.detailNode}>
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Status
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              {/* <TextField
                label=""
                InputLabelProps={{
                  className: classes.formLabel,
                }}
              /> */}
              Open
            </Box>
          </Box>
          <Box display="flex" className={classes.detailNode}>
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Invigilator
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              John Smith
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CaseDataCard;
