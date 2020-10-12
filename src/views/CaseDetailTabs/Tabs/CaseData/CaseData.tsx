import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CaseDataCard from './CaseDataCard';
import RespondentCard from './RespondentCard';
import ComplainantCard from './ComplainantCard';
import Incident from './Incident';
import { Case } from '../../../../store/modules/casesList/types';
import Loader from '../../../../components/Loader';

type CaseDataProps = { selectedCaseDetails: Case; isLoading: boolean };
const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        verticalAlign: 'top',
    },
});
const CaseData: FunctionComponent<CaseDataProps> = (props) => {
    const classes = useStyles();
    const { selectedCaseDetails, isLoading } = props;
    const {
        complainant,
        respondent,
        additionalData,
        caseNumber,
        status,
        assignedUser,
        description,
        reportDate,
        caseType,
    } = selectedCaseDetails;

    const caseData = {
        caseNumber,
        status,
        investigator: assignedUser,
        reportDate,
        narrative: description!,
    };
    if (isLoading) return <Loader />;
    return (
        <Box display="flex">
            <Box display="flex" flexDirection="column">
                <Box className={classes.root}>
                    <CaseDataCard caseData={caseData} />
                </Box>
                <Box className={classes.root}>
                    <ComplainantCard complainant={complainant} />
                </Box>
            </Box>

            <Box display="flex" flexDirection="column">
                <Box className={classes.root}>
                    <RespondentCard respondent={respondent} />
                </Box>

                <Box className={classes.root}>
                    <Incident incident={additionalData} caseType={caseType} />
                </Box>
            </Box>
        </Box>
    );
};

export default CaseData;
