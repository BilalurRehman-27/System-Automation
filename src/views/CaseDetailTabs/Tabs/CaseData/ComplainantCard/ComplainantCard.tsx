import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Card, IconButton, Box, Typography, CardActions, CardContent } from '@material-ui/core';
import gray from '@material-ui/core/colors/grey';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import InputTextComponent from '../../../../../components/InputTextField';
import { Complainant } from '../../../../../store/modules/casesList/types';

type ComplainantProps = {
    complainant: Complainant;
    editCaseDataComplainantBegin: Function;
};

const ComplainantCard: FunctionComponent<ComplainantProps> = (props) => {
    const { complainant } = props;
    const [disabled, setDisabled] = useState(true);
    const [report, setReport] = useState(complainant.name);
    const [title, setTitle] = useState(complainant.title);
    const [phoneNumber, setPhoneNumber] = useState(complainant.phone);
    const [email, setEmail] = useState(complainant.email);

    const classes = makeStyles(() => ({
        root: {
            width: 550,
            //minWidth: 275,
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
        const { editCaseDataComplainantBegin } = props;
        const complainant = {
            name: report,
            title,
            email,
            phone: phoneNumber,
        };
        setDisabled(true);
        editCaseDataComplainantBegin(complainant);
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
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Typography className={classes.title}>COMPLAINANT</Typography>
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
                                    defaultValue={report}
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
                                    defaultValue={title}
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
                                Contact&apos;s Phone
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
                                    defaultValue={phoneNumber}
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
                                Contact&apos;s Email
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
                                    defaultValue={email}
                                    className={classes.detailNodeValue}
                                    disableUnderline={disabled ? true : false}
                                    inputProps={customInputProps}
                                    fontSize="13"
                                    onChange={onChangeEmailInput}
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
