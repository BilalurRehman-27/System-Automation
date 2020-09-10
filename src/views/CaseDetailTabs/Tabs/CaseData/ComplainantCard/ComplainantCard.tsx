import React, { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  IconButton,
  Box,
  Theme,
  Typography,
  CardActions,
  CardContent,
} from "@material-ui/core";
import gray from "@material-ui/core/colors/grey";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import InputTextComponent from "../../../../../components/InputTextField";
import DatePicker from "../../../../../components/DatePicker";
type ComplainantProps = {};

const ComplainantCard: FunctionComponent<ComplainantProps> = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [dateOfReport, setDateOfReport] = useState(new Date());
  const [report, setReport] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [narrative, setNarrative] = useState("");

  const classes = makeStyles((theme: Theme) => ({
    root: {
      width: 500,
      minWidth: 275,
      display: "inline-block",
      "& .MuiTextField-root": {
        width: "38ch",
        ".MuiOutlinedInput-notchedOutline": {
          border:0
        },
      },
    },
    inputCustomStyle: {
      fontSize: 13,
      color: "#484848 !important",
    },
    disabled: {
    //  cursor: "not-allowed",
      color: "#484848 !important",
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
    borderedInputs: {
      border: "1px solid rgb(0,0,0,0.23) !important",
      padding: 10,
      borderRadius: 3,
      marginBottom: "5px",
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
  const onChangeDateOfReport = (date: Date) => {
    setDateOfReport(date);
  };
  const onChangeReportInput = (text: string) => {
    setReport(text);
  };
  const onChangeTitleInput = (text: string) => {
    setTitle(text);
  };
  const onChangePhoneInput = (text: string) => {
    setPhoneNumber(text);
  };
  const onChangeEmailInput = (text: string) => {
    setEmail(text);
  };
  const onChangeNarrativeInput = (text: string) => {
    setNarrative(text);
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
              <Box
                display="flex"
                width="100%"
                justifyContent="flex-start"
                className={classes.detailNodeValue}
              >
                <DatePicker
                  disabled={disabled ? true : false}
                  inputProps={customInputProps}
                  disableUnderline={true}
                  onChange={onChangeDateOfReport}
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
                <InputTextComponent
                  disabled={disabled}
                  size="small"
                  id="standard-disabled"
                  defaultValue="Sam Brooks"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeReportInput}
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
                Title
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
                  defaultValue="Director"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeTitleInput}
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
                Contact's Phone
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
                  defaultValue="410-123-4567 x230"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangePhoneInput}
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
                Contact's Email
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
                  defaultValue="sambrooks@email.com"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeEmailInput}
                />
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
                <InputTextComponent
                  disabled={disabled}
                  size="small"
                  id="standard-disabled"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                enim justo. Vestibulum aliquam hendrerit molestie. Mauris
                malesuada nisi sit amet augue accumsan tincidunt. Maecenas
                tincidunt, velit ac porttitor pulvinar, tortor eros facilisis
                libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.
                Interdum et malesuada fames ac ante ipsum primis in faucibus"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  multiline
                  onChange={onChangeNarrativeInput}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
};

export default ComplainantCard;
