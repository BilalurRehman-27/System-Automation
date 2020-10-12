import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import gray from '@material-ui/core/colors/grey';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import InputTextComponent from '../../../../../components/InputTextField';
import { Respondent } from '../../../../../store/modules/casesList/types';

type RespondentProps = {
    respondent: Respondent;
    editCaseDataRespondentBegin: Function;
};

const RespondentCard: FunctionComponent<RespondentProps> = (props) => {
    const { respondent } = props;

    const [disabled, setDisabled] = useState(true);
    const [facility, setFacility] = useState(respondent.name);
    const [address, setAddress] = useState(respondent.address.line1);
    const [city, setCity] = useState(respondent.address.city);
    const [state, setCountry] = useState(respondent.address.state);
    const [zipCode, setZipCode] = useState(respondent.address.zipcode);
    const [facilityType, setFacilityType] = useState(respondent.type);

    const classes = makeStyles(() => ({
        root: {
            width: 600,
            display: 'inline-block',
            '& .MuiTextField-root': {
                width: '38ch',
                '.MuiOutlinedInput-notchedOutline': {
                    border: 0,
                },
            },
            '& .MuiInputBase-root.Mui-disabled': {
                color: '#484848',
            },
            paddingRight: 10,
            paddingLeft: 40,
            paddingTop: 20,
        },

        inputCustomStyle: {
            fontSize: 13,
        },
        disabled: {
            color: '#484848 !important',
        },
        borderedInputs: {
            border: '1px solid rgb(0,0,0,0.23) !important',
            padding: 10,
            borderRadius: 3,
            marginBottom: '5px',
        },
        title: {
            color: '#3a96cd',
            fontSize: 14,
            fontWeight: 'bold',
            display: 'inline-block',
            marginTop: 12,
        },
        editIcon: {
            float: 'right',
            padding: 0,
            display: 'inline-block',
        },
        detailNode: {
            textAlign: 'right',
        },
        detailNodeLabel: {
            fontSize: 14,
            fontWeight: 550,
            marginRight: 20,
            verticalAlign: 'bottom',
            color: gray[800],
        },
        detailNodeValue: {
            fontSize: 13,
            fontWeight: 450,
            color: gray[700],
        },
        formLabel: {
            color: '#000',
            '&.Mui-focused': {
                color: '#000',
            },
        },
        caseDataContainer: {
            padding: 5,
            marginTop: 5,
        },
    }))();
    const customInputProps = classNames({
        [classes.inputCustomStyle]: true,
        [classes.disabled]: !disabled,
        [classes.borderedInputs]: !disabled,
    });

    const toggleDisable = () => {
        setDisabled(!disabled);
    };
    const handleCloseIcon = () => {
        setDisabled(true);
    };
    const handleCheckIcon = () => {
        const { editCaseDataRespondentBegin } = props;
        const respondentData = {
            name: facility,
            type: facilityType,
            address: { line1: address, city, zipcode: zipCode, state },
        };
        editCaseDataRespondentBegin(respondentData);
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
                    <Box display="flex" justifyContent="space-between">
                        <Typography className={classes.title}>RESPONDENT</Typography>
                        <CardActions className={classes.editIcon}>
                            {disabled ? (
                                <IconButton onClick={toggleDisable}>
                                    <EditIcon />
                                </IconButton>
                            ) : (
                                <>
                                    <IconButton style={{ color: 'red' }} onClick={handleCloseIcon}>
                                        <CloseIcon />
                                    </IconButton>

                                    <IconButton style={{ color: 'green' }} onClick={handleCheckIcon}>
                                        <CheckIcon />
                                    </IconButton>
                                </>
                            )}
                        </CardActions>
                    </Box>
                    <Box className={classes.caseDataContainer}>
                        <Box display="flex" className={classes.detailNode}>
                            <Box
                                display="flex"
                                width="40%"
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
                                    defaultValue={facility}
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
                                width="40%"
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
                                    defaultValue={address}
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
                                width="40%"
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
                                    defaultValue={city}
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
                                width="40%"
                                justifyContent="flex-end"
                                className={classes.detailNodeLabel}
                            >
                                State
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
                                    defaultValue={state}
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
                                width="40%"
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
                                    defaultValue={zipCode}
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
                                width="40%"
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
                                    defaultValue={facilityType}
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
