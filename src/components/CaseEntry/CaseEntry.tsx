import React, { FunctionComponent } from "react";
import moment from "moment";
import {
  makeStyles,
  createStyles,
  Box,
  IconButton,
  ListItem,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Delete } from "@material-ui/icons";

type CaseEntryProps = {
  caseItem: any;
  handleEditCase: any;
  handleDeleteCase: any;
};
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "&:hover ": {
        backgroundColor: "#eeeeee",
        transition: "ease-in 200ms",
        cursor: "pointer",
        "& button": {
          opacity: 1,
          transition: "ease-in 200ms",
        },
      },
    },
    chip: {
      backgroundColor: "#9e9e9e",
      color: "#fff",
      borderRadius: "4px",
      textTransform: "uppercase",
    },
    dateStamp: {
      color: "#565756",
      fontSize: "14px",
      lineHeight: "2rem",
    },
    entryDetails: {
      fontSize: "12px",
    },
    chipContainer: {
      textAlign: "center",
    },
    editIcon: {
      opacity: 0,
    },
  })
);
const CaseEntry: FunctionComponent<CaseEntryProps> = ({
  caseItem,
  handleEditCase,
  handleDeleteCase,
}) => {
  const classes = useStyles();

  return (
    <Box key={caseItem.id}>
      <ListItem className={classes.root}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={7}>
            <Typography className={classes.dateStamp}>
              {moment(caseItem.dateOpened).format("MMMM DD, YYYY hh:mm a")}
            </Typography>
            <Typography className={classes.entryDetails}>
              {caseItem.description}
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.chipContainer}>
            <Chip
              size="small"
              className={classes.chip}
              label={
                caseItem.additionalData
                  ? caseItem.additionalData.tag
                  : "Generic"
              }
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              className={classes.editIcon}
              onClick={() => handleEditCase(caseItem.id)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDeleteCase(caseItem.id)}
              className={classes.editIcon}
            >
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </Box>
  );
};

export default CaseEntry;
