import React, { MouseEvent, useState } from 'react';
import moment from 'moment';
import { makeStyles, createStyles, Divider, Button, Box } from '@material-ui/core';
import { payload } from '../../../store/caseManagement.constants';
import { users, CaseTypes, CaseStatus } from '../../../assets/mock/DummyData';
import DateFrom from '../../../components/DatePicker';
import MultiSelectComponent from '../../../components/MultiSelectComponent';
import CustomMultiSelect from '../../../components/CustomMultiSelect';
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '200px',
        },
        mr: {
            paddingTop: '2px',
            paddingLeft: '5px',
            width: 'auto',
        },
        mtml: {
            marginTop: '20px',
            marginLeft: '10px',
        },
        filters: {
            flexGrow: 1,
            width: '100%',
        },
    }),
);
export default function CaseFilters(props: {
    caseList?: (payload: { order: string[]; where: {} }) => void;
    getPageNumber: Function;
}) {
    const classes = useStyles();
    ///  const [payLoad, setPayload] = useState(payload);
    const [assignedTo, setAssignedTo] = useState<string[]>([]);
    const [type, setType] = useState<string[]>([]);
    const [status, setStatus] = useState<string[]>(['Assigned']);
    const [dateFrom, setDateFrom] = useState<Date | null>();
    const [dateTo, setDateTo] = useState<Date | null>();
    const { caseList, getPageNumber } = props;
    const handleDateFromChange = (date: Date) => {
        setDateFrom(date);
    };
    const handleDateToChange = (date: Date) => {
        setDateTo(date);
    };
    const handleChange = (event: React.ChangeEvent<{ value: string[]; name: string }>) => {
        const name = event.target.name;
        if (name === 'assignedTo') {
            setAssignedTo(event.target.value as string[]);
        } else if (name === 'types') {
            setType(event.target.value as string[]);
        } else {
            setStatus(event.target.value as string[]);
        }
    };
    const submitSearch = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        const date = {
            dateFrom: moment(dateFrom).format('X'),
            dateTo: moment(dateTo).format('X'),
        };
        var caseListWhereObj: any = { where: {} };
        if (assignedTo.length > 0) {
            caseListWhereObj.where['assignedUser.id'] = {
                inq: assignedTo,
            };
        }
        if (status.length > 0) {
            caseListWhereObj.where['status'] = {
                inq: status,
            };
        }
        if (type.length > 0) {
            caseListWhereObj.where['caseType'] = {
                inq: type,
            };
        }
        if (dateFrom !== undefined && dateFrom !== null) {
            let dateToEpoch = date.dateTo;
            if (dateTo === null) {
                dateToEpoch = moment(new Date()).format('X');
            }
            caseListWhereObj.where['and'] = [
                {
                    dateOpened: {
                        gte: parseInt(`${date.dateFrom}000`),
                    },
                },
                {
                    dateOpened: {
                        lte: parseInt(`${dateToEpoch}000`),
                    },
                },
            ];
        }
        payload.where = JSON.stringify(caseListWhereObj.where);
        caseList && caseList(payload);
        getPageNumber(0);
    };
    return (
        <Box display="flex" justifyContent="flex-end" className="case-filters-container" flexWrap="wrap">
            <Box>
                <div className={classes.root}>
                    <CustomMultiSelect
                        name={'assignedTo'}
                        handleChange={handleChange}
                        data={users}
                        assignedTo={assignedTo}
                    />

                    {/* <MultiSelectComponent
                            label="Assigned To"
                            data={Assignees}
                            name={'assignedTo'}
                            onChange={handleChange}
                            personName={assignedTo}
                        /> */}
                </div>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
                <div className={classes.root}>
                    <MultiSelectComponent
                        label="Types"
                        name={'types'}
                        data={CaseTypes}
                        onChange={handleChange}
                        personName={type}
                    />
                </div>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
                <div className={classes.root}>
                    <MultiSelectComponent
                        label="Status"
                        name={'Status'}
                        data={CaseStatus}
                        onChange={handleChange}
                        personName={status}
                    />
                </div>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
                <div className={classes.mr}>
                    <DateFrom onChange={handleDateFromChange} label="Date From" disableUnderline={false} />
                </div>
            </Box>
            <Box>
                <div className={classes.mr}>
                    <DateFrom onChange={handleDateToChange} label="Date To" disableUnderline={false} />
                </div>
            </Box>
            <Box>
                <div className={classes.mtml}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e: MouseEvent<HTMLElement>) => submitSearch(e)}
                    >
                        Search
                    </Button>
                </div>
            </Box>
        </Box>
    );
}
