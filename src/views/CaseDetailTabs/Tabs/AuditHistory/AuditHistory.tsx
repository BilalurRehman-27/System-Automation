import React, { FunctionComponent, useEffect, useState } from 'react';
import { Box, Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

import { AuditHistoryType } from '../../../../store/modules/auditHistory/types';
import AuditHistoryNode from './AuditHistoryNode';
import Loader from '../../../../components/Loader';
import { CASE_TYPES, MESSAGES, HISTORY_TYPES } from '../../../../store/caseManagement.constants';
import { api } from '../../../../store/service/service';
import moment from 'moment';

type AuditHistoryProps = {
    caseID: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        error: {
            marginLeft: theme.spacing(4),
            color: '#616161',
        },
    }),
);

const AuditHistory: FunctionComponent<AuditHistoryProps> = (props) => {
    const { caseID } = props;
    const [auditHistoryData, setAuditHistoryData] = useState<AuditHistoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const classes = useStyles();

    const sortAuditHistory = (auditHistoryList: AuditHistoryType[]) => {
        return auditHistoryList.sort((a: any, b: any) => {
            const date1 = new Date(b.date).valueOf();
            const date2 = new Date(a.date).valueOf();
            return date1 - date2;
        });
    };

    useEffect(() => {
        const dataList = api.getAuditHistory(caseID);
        dataList.then((response) => {
            const sortedList = sortAuditHistory(response.data);
            setLoading(false);
            setAuditHistoryData(sortedList);
        });
    }, [caseID]);

    const createDescription = (history: AuditHistoryType) => {
        const name = history.user.name;
        const detail = history.details;
        let description = '';
        switch (history.type) {
            case HISTORY_TYPES.EDIT:
                if (detail.newValue?.status && detail.newValue?.status !== CASE_TYPES.CLOSED) {
                    description = `${name} changed the status to ${detail.newValue.status}`;
                } else if (detail.newValue?.dateClosed) {
                    description = `${name} changed the status to Closed on ${moment(detail.newValue.dateClosed).format(
                        'MM/DD/YYYY',
                    )}`;
                } else if (detail.newValue?.assignedUser) {
                    description = `${name} changed the investigator to ${detail.newValue.assignedUser.name}`;
                } else if (detail.newValue?.caseType) {
                    description = `${name} changed the case type to ${detail.newValue.caseType}`;
                } else if (detail.newValue?.complainant) {
                    description = `${name} changed the complainant to ${detail.newValue.complainant.name}`;
                } else if (detail.newValue?.reportDate) {
                    description = `${name} changed the report date to ${moment(detail.newValue.reportDate).format(
                        'MM/DD/YYYY',
                    )}`;
                } else if (detail.newValue?.respondent) {
                    description = `${name} changed the respondent ${''.concat(
                        detail.newValue.respondent.name ? detail.newValue.respondent.name : '',
                    )}`;
                } else {
                    description = `${name} changed the case data`;
                }
                break;
            case HISTORY_TYPES.ADD_ACTIVITY:
                description = `${name} added a case entry`;
                break;
            case HISTORY_TYPES.EDIT_ACTIVITY:
                description = `${name} edited a case entry`;
                break;
            case HISTORY_TYPES.DELETE_ACTIVITY:
                description = `${name} deleted a case entry`;
                break;
            case HISTORY_TYPES.ADD_ATTACHMENT:
                description = `${name} added a file attachment`;
                break;
            case HISTORY_TYPES.DELETE_ATTACHMENT:
                description = `${name} deleted a file attachment`;
                break;
        }
        return description;
    };

    return (
        <>
            {!loading ? (
                <Box>
                    {auditHistoryData.length ? (
                        auditHistoryData.map((history) => (
                            <AuditHistoryNode
                                key={history.id}
                                date={history.date}
                                description={createDescription(history)}
                            />
                        ))
                    ) : (
                        <Typography className={classes.error} variant="subtitle2">
                            {MESSAGES.NO_AUDIT_HISTORY}
                        </Typography>
                    )}
                </Box>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default AuditHistory;
