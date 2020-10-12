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
import { CaseData } from '../../../../../store/modules/casesList/types';
import DatePicker from '../../../../../components/DatePicker';
import { CaseStatus, users } from '../../../../../assets/mock/DummyData';
import MultiSelectComponent from '../../../../../components/MultiSelectComponent';
import SingleSelectComponent from '../../../../../components/DropDownComponent';

type CaseDataCardProps = {
    caseData: CaseData;
    editCaseEntryDataBegin: Function;
    caseCurrentStatus: string;
};

const CaseDataCard: FunctionComponent<CaseDataCardProps> = (props) => {
    const { caseData, caseCurrentStatus } = props;
    const [disabled, setDisabled] = useState(true);
    const [caseId, setCaseId] = useState(caseData.caseNumber);
    const [status, setStatus] = useState<string[]>([caseData.status]);
    const [investigator, setInvestigator] = useState(caseData.investigator.id);
    const investigatorName = users.filter((user) => user.id === investigator)[0].name;
    const [narrative, setNarrative] = useState(caseData.narrative);
    const [dateOfReport, setDateOfReport] = useState(new Date(caseData.reportDate));
    const classes = makeStyles(() => ({
        root: {
            width: 550,
            // //minWidth: 275,
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
        dateOfReport: {
            marginTop: 10,
        },
        customNarrative: {
            marginTop: '0',
        },
        investigator: {
            marginTop: 10,
            alignItems: 'center',
        },
        caseStatus: {
            marginTop: 10,
            alignItems: 'center',
        },
        disabledLabel: {
            marginTop: 10,
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
        const { editCaseEntryDataBegin } = props;
        const selectedUser = users.filter((user) => user.id === investigator)[0];
        const caseDetail = {
            status: typeof status === 'string' ? status : status[0],
            assignedUser: {
                id: selectedUser.id,
                name: selectedUser.name,
            },
            reportDate: dateOfReport,
            description: narrative,
        };
        setDisabled(true);
        editCaseEntryDataBegin(caseDetail);
    };

    const onChangeCaseIdInput = (text: string) => {
        setCaseId(text);
    };

    const onChangeStatusInput = (event: React.ChangeEvent<{ value: string[]; name: string }>) => {
        setStatus(event.target.value as string[]);
    };
    const onChangeInvestigator = (event: React.ChangeEvent<{ value: string; name: string }>) => {
        setInvestigator(event.target.value);
    };
    const onChangeDateOfReport = (date: Date) => {
        setDateOfReport(date);
    };
    const onChangeNarrativeInput = (text: string) => {
        setNarrative(text);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Typography className={classes.title}>CASE DATA</Typography>
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
                                    disabled={true}
                                    size="small"
                                    id="standard-disabled"
                                    defaultValue={caseId}
                                    className={classes.detailNodeValue}
                                    disableUnderline={disabled ? true : false}
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
                                className={classNames(classes.detailNodeLabel, classes.caseStatus)}
                            >
                                Status
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
                                        data={CaseStatus}
                                        disabled={disabled}
                                        defaultValue={'Assigned'}
                                        multiple={false}
                                        onChange={onChangeStatusInput}
                                        personName={status}
                                        name={'status'}
                                    />
                                ) : (
                                    <span className={classes.disabledLabel}>{caseCurrentStatus}</span>
                                )}
                            </Box>
                        </Box>
                        <Box display="flex" className={classes.detailNode}>
                            <Box
                                display="flex"
                                width="50%"
                                justifyContent="flex-end"
                                className={classNames(classes.detailNodeLabel, classes.investigator)}
                            >
                                Investigator
                            </Box>
                            <Box
                                display="flex"
                                width="100%"
                                justifyContent="flex-start"
                                className={classes.detailNodeValue}
                            >
                                {!disabled ? (
                                    <>
                                        <SingleSelectComponent
                                            label={''}
                                            name={investigator}
                                            handleChange={onChangeInvestigator}
                                            data={users}
                                            multiple={false}
                                            disabled={disabled}
                                            defaultValue={investigator}
                                        />
                                    </>
                                ) : (
                                    <span className={classes.disabledLabel}>{investigatorName}</span>
                                )}
                            </Box>
                        </Box>
                        <Box display="flex" className={classes.detailNode}>
                            <Box
                                display="flex"
                                width="50%"
                                justifyContent="flex-end"
                                className={classNames(classes.detailNodeLabel, classes.dateOfReport)}
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
                                    defaultValue={dateOfReport.toString()}
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
                                    defaultValue={narrative}
                                    className={classes.detailNodeValue}
                                    disableUnderline={disabled}
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

export default CaseDataCard;
