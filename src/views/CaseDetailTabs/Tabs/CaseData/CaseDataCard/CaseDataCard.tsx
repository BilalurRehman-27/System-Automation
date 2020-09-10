import React, { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Box, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import gray from "@material-ui/core/colors/grey";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import InputTextComponent from "../../../../../components/InputTextField";

type CaseDataCard = {};
const CaseDataCard: FunctionComponent<CaseDataCard> = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [caseId, setCaseId] = useState("");
  const [status, setStatus] = useState("");
  const [invigilator, setInvigilator] = useState("");

  const classes = makeStyles((theme: Theme) => ({
    root: {
      width: 500,
      minWidth: 275,
      display: "inline-block",
    },
    inputCustomStyle: {
      fontSize: 13,
    },
    disabled: {
      color: "#484848 !important",
    },
    borderedInputs: {
      border: "1px solid rgb(0,0,0,0.23) !important",
      padding: 10,
      borderRadius: 3,
      marginBottom: "5px",
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
  const customInputProps = classNames({
    [classes.inputCustomStyle]: true,
    [classes.disabled]: disabled,
    [classes.borderedInputs]: !disabled,
  });
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  const handleCloseIcon = () => {
    console.log("Closed");
    setDisabled(true);
  };
  const handleCheckIcon = () => {
    setDisabled(true);
  };

  const onChangeCaseIdInput = (text: string) => {
    setCaseId(text);
  };
  const onChangeStatusInput = (text: string) => {
    setStatus(text);
  };
  const onChangeInvigilatorInput = (text: string) => {
    setInvigilator(text);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Card>
        <CardContent>
          <CardActions className={classes.editIcon}>
            {disabled ? (
              <IconButton onClick={toggleDisable}>
                <EditIcon />
              </IconButton>
            ) : (
              <>
                <IconButton style={{ color: "red" }} onClick={handleCloseIcon}>
                  <CloseIcon />
                </IconButton>

                <IconButton
                  style={{ color: "green" }}
                  onClick={handleCheckIcon}
                >
                  <CheckIcon />
                </IconButton>
              </>
            )}
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
                <InputTextComponent
                  disabled={disabled}
                  size="small"
                  id="standard-disabled"
                  defaultValue="#2010-3211"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeCaseIdInput}
                />
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
                <InputTextComponent
                  disabled={disabled}
                  size="small"
                  id="standard-disabled"
                  defaultValue="Open"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeStatusInput}
                />
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
                <InputTextComponent
                  disabled={disabled}
                  size="small"
                  id="standard-disabled"
                  defaultValue="John Smith"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeInvigilatorInput}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
};

export default CaseDataCard;
