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

type RespondentProps = {};

const RespondentCard: FunctionComponent<RespondentProps> = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [facility, setFacility] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [facilityType, setFacilityType] = useState("");

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
  const onChangeFacilityInput = (text: string) => {
    setFacility(text);
  };
  const onChangeAddressInput = (text: string) => {
    setAddress(text);
  };
  const onChangeCityInput = (text: string) => {
    setCity(text);
  };
  const onChangeCountryInput = (text: string) => {
    setCountry(text);
  };
  const onChangeZipCodeInput = (text: string) => {
    setZipCode(text);
  };
  const onChangeFacilityTypeInput = (text: string) => {
    setFacilityType(text);
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
          <Typography className={classes.title}>Respondent</Typography>
          <Box className={classes.caseDataContainer}>
            <Box display="flex" className={classes.detailNode}>
              <Box
                display="flex"
                width="30%"
                justifyContent="flex-end"
                className={classes.detailNodeLabel}
              >
                Facility
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
                  defaultValue="Pharmacy"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeFacilityInput}
                />
              </Box>
            </Box>
            <Box display="flex" className={classes.detailNode}>
              <Box
                display="flex"
                width="30%"
                justifyContent="flex-end"
                className={classes.detailNodeLabel}
              >
                Address
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
                  defaultValue="123 Main St."
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeAddressInput}
                />
              </Box>
            </Box>
            <Box display="flex" className={classes.detailNode}>
              <Box
                display="flex"
                width="30%"
                justifyContent="flex-end"
                className={classes.detailNodeLabel}
              >
                City
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
                  defaultValue="Columbia"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeCityInput}
                />
              </Box>
            </Box>
            <Box display="flex" className={classes.detailNode}>
              <Box
                display="flex"
                width="30%"
                justifyContent="flex-end"
                className={classes.detailNodeLabel}
              >
                Country
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
                  defaultValue="Howard County"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeCountryInput}
                />
              </Box>
            </Box>
            <Box display="flex" className={classes.detailNode}>
              <Box
                display="flex"
                width="30%"
                justifyContent="flex-end"
                className={classes.detailNodeLabel}
              >
                Zip Code
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
                  defaultValue="3010-2010"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeZipCodeInput}
                />
              </Box>
            </Box>
            <Box display="flex" className={classes.detailNode}>
              <Box
                display="flex"
                width="30%"
                justifyContent="flex-end"
                className={classes.detailNodeLabel}
              >
                Facility Type
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
                  defaultValue="Pharmacy"
                  className={classes.detailNodeValue}
                  disableUnderline={disabled ? true : false}
                  inputProps={customInputProps}
                  fontSize="13"
                  onChange={onChangeFacilityTypeInput}
                />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </form>
  );
};

export default RespondentCard;
