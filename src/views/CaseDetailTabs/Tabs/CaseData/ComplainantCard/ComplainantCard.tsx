import React, { FunctionComponent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  IconButton,
  Box,
  Theme,
  TextField,
  Typography,
  CardActions,
  CardContent,
} from "@material-ui/core";
import gray from "@material-ui/core/colors/grey";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

type ComplainantProps = {};

const ComplainantCard: FunctionComponent<ComplainantProps> = (props) => {
  const [disabled, setDisabled] = useState(true);
  const classes = makeStyles((theme: Theme) => ({
    root: {
      width: 500,
      minWidth: 275,
      display: "inline-block",
      "& .MuiTextField-root": {
        // margin: theme.spacing(1),
        width: "25ch",
      },
      ".Mui-disabled": {
        color: theme.palette.primary.dark,
      },
    },
    resize: {
      fontSize: 13,
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
      marginRight: 30,
      verticalAlign: "bottom",
      color: gray[800],
    },
    detailNodeValue: {
      fontSize: 13,
      fontWeight: 430,
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
    customNarrative: {
      marginTop: "5%",
    },
  }))();
  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const handleCloseIcon = () => {
    console.log("Closed");
    setDisabled(true);
  };
  const handleCheckIcon = () => {
    console.log("Checked");
    setDisabled(true);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardActions className={classes.editIcon}>
          {disabled ? (
            <IconButton onClick={toggleDisable}>
              <EditIcon />
            </IconButton>
          ) : (
            <>
              <IconButton>
                <CloseIcon style={{ color: "red" }} onClick={handleCloseIcon} />
              </IconButton>

              <IconButton>
                <CheckIcon
                  style={{ color: "green" }}
                  onClick={handleCheckIcon}
                />
              </IconButton>
            </>
          )}
        </CardActions>
        <Typography className={classes.title}>Complainant</Typography>
        <Box className={classes.caseDataContainer}>
          <Box display="flex">
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Date of Report
            </Box>
            <Box display="flex" width="100%" justifyContent="flex-start">
              <TextField
                disabled={disabled}
                size="small"
                id="standard-disabled"
                defaultValue="08/17/2020"
                className={classes.detailNodeValue}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
              />
            </Box>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Report Prepared By
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              Sam Brooks
            </Box>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Title
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              Director
            </Box>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Contact's Phone
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              410-123-4567 x230
            </Box>
          </Box>
          <Box display="flex">
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Contact's Email
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              sambrooks@email.com
            </Box>
          </Box>
          <Box display="flex" className={classes.customNarrative}>
            <Box
              display="flex"
              width="50%"
              justifyContent="flex-end"
              className={classes.detailNodeLabel}
            >
              Narrative
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="flex-start"
              className={classes.detailNodeValue}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
              enim justo. Vestibulum aliquam hendrerit molestie. Mauris
              malesuada nisi sit amet augue accumsan tincidunt. Maecenas
              tincidunt, velit ac porttitor pulvinar, tortor eros facilisis
              libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
              Interdum et malesuada fames ac ante ipsum primis in faucibus
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ComplainantCard;
