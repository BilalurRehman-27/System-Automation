import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import {
    makeStyles,
    createStyles,
    Card,
    CardContent,
    Typography,
    CardActions,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Box,
} from '@material-ui/core';
import gray from '@material-ui/core/colors/grey';
import CheckIcon from '@material-ui/icons/Check';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { CaseTypes } from '../../../../../assets/mock/DummyData';
import InputTextComponent from '../../../../../components/InputTextField';
import DatePicker from '../../../../../components/DatePicker';
import MultiSelectComponent from '../../../../../components/MultiSelectComponent';
import { Incident } from '../../../../../store/modules/casesList/types';

type CaseIncidentProps = {
    incident: Incident | undefined;
    caseType: string;
    editCaseDataIncidentBegin: Function;
};

const useStyles = makeStyles(() =>
    createStyles({
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
            color: '#484848',
        },
        formLabel: {
            color: '#000',
            '&.Mui-focused': {
                color: '#000',
            },
        },

        caseIncidentContainer: {
            padding: 5,
        },
        dateOfLoss: {
            marginTop: 10,
        },
        incidentType: {
            marginTop: 10,
            alignItems: 'center',
        },
        table: {
            marginTop: 20,
            justifyContent: 'center',
            color: gray[800],
        },
        disabledLabel: {
            marginTop: 10,
        },
    }),
);

const CaseIncident: FunctionComponent<CaseIncidentProps> = (props) => {
    const { incident, caseType } = props;
    const classes = useStyles();
    const [disabled, setDisabled] = useState(true);
    const [dateOfLoss, setDateOfReport] = useState(new Date(incident?.lossDate!));
    const [specificLocationOfLoss, setSpecificLocationOfLoss] = useState(incident?.lossLocation);
    const [drugs] = useState(incident?.drugs);
    const [incidentType, setCaseType] = useState<string[]>([caseType]);

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
        const { editCaseDataIncidentBegin } = props;
        const caseIncident = {
            lossDate: dateOfLoss,
            lossLocation: specificLocationOfLoss!,
            drugs: drugs!,
        };
        setDisabled(true);
        editCaseDataIncidentBegin(caseIncident, typeof incidentType === 'string' ? incidentType : incidentType[0]);
    };

    const onChangeDateOfReport = (date: Date) => {
        setDateOfReport(date);
    };
    const onChangeSpecificLocationOfLoss = (value: string) => {
        setSpecificLocationOfLoss(value);
    };

    const handleCaseTypeChange = (event: React.ChangeEvent<{ value: string[]; name: string }>) => {
        setCaseType(event.target.value as string[]);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Typography className={classes.title}>INCIDENT</Typography>
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
                    <Box className={classes.caseIncidentContainer}>
                        <Box display="flex">
                            <Box
                                display="flex"
                                width="65%"
                                justifyContent="flex-end"
                                className={classNames(classes.detailNodeLabel, classes.dateOfLoss)}
                            >
                                Date of Loss
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
                                    defaultValue={dateOfLoss.toString()}
                                />
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box
                                display="flex"
                                width="65%"
                                justifyContent="flex-end"
                                className={classes.detailNodeLabel}
                            >
                                Specific Location of Loss
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
                                    defaultValue={specificLocationOfLoss!}
                                    className={classes.detailNodeValue}
                                    disableUnderline={disabled ? true : false}
                                    inputProps={customInputProps}
                                    fontSize="13"
                                    onChange={onChangeSpecificLocationOfLoss}
                                />
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box
                                display="flex"
                                width="65%"
                                justifyContent="flex-end"
                                className={classNames(classes.detailNodeLabel, classes.incidentType)}
                            >
                                Incident Type
                            </Box>
                            <Box
                                display="flex"
                                width="100%"
                                justifyContent="flex-start"
                                className={classes.detailNodeValue}
                            >
                                {!disabled ? (
                                    <MultiSelectComponent
                                        label=""
                                        data={CaseTypes}
                                        disabled={disabled}
                                        defaultValue={caseType[0]}
                                        multiple={false}
                                        onChange={handleCaseTypeChange}
                                        personName={incidentType}
                                        name={'types'}
                                    />
                                ) : (
                                    <span className={classes.disabledLabel}>{incidentType}</span>
                                )}
                            </Box>
                        </Box>
                        <Box display="flex">
                            <TableContainer className={classes.table}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.detailNodeLabel}>Drug</TableCell>
                                            <TableCell className={classes.detailNodeLabel} align="right">
                                                Quantity
                                            </TableCell>
                                            <TableCell className={classes.detailNodeLabel} align="right">
                                                Strength
                                            </TableCell>
                                            <TableCell className={classes.detailNodeLabel} align="right">
                                                Dossage From
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {drugs?.map((detail, index) => (
                                            <TableRow key={index}>
                                                <TableCell className={classes.detailNodeValue}>{detail.drug}</TableCell>
                                                <TableCell className={classes.detailNodeValue} align="right">
                                                    {detail.quantity}
                                                </TableCell>
                                                <TableCell className={classes.detailNodeValue} align="right">
                                                    {detail.strength}
                                                </TableCell>
                                                <TableCell className={classes.detailNodeValue} align="right">
                                                    {detail.dosageForm}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </form>
    );
};

export default CaseIncident;
