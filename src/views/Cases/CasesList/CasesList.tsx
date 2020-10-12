import React, { useEffect, MouseEvent } from 'react';
import moment from 'moment';
import { makeStyles, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Loader from '../../../components/Loader';
import DataTable from '../../../components/DataTable';
import { Case } from '../../../store/modules/casesList/types';

type caseListType = {
    id: string;
    caseNumber: string;
    caseType: {};
    dateOpened: string;
    status: string;
    facilityName: string;
    facilityAddress: string;
    investigator: string;
    summary?: string;
};
type CaseListProps = {
    isLoading?: boolean;
    getCaseList?: any;
    data?: any;
    handleChangePage: Function;
    handleChangeRowsPerPage: Function;
    page: number;
    rowsPerPage: number;
};

interface IColumn {
    id:
        | 'caseNumber'
        | 'caseType'
        | 'dateOpened'
        | 'status'
        | 'facilityName'
        | 'facilityAddress'
        | 'investigator'
        | 'summary';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
    format?: (value: number) => string;
}

const columns: IColumn[] = [
    { id: 'caseNumber', label: 'Case Number', minWidth: 100 },
    { id: 'caseType', label: 'Type', minWidth: 100 },
    {
        id: 'dateOpened',
        label: 'Open Date',
        minWidth: 100,
        align: 'left',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    { id: 'status', label: 'Status', minWidth: 100, align: 'left' },
    { id: 'facilityName', label: 'Facility Name', minWidth: 100, align: 'left' },
    { id: 'facilityAddress', label: 'Facility Address', minWidth: 100, align: 'left' },
    { id: 'investigator', label: 'Investigator', minWidth: 100, align: 'left' },
    { id: 'summary', label: 'Summary', minWidth: 80, align: 'left' },
];

const useStyles = makeStyles({
    root: {
        padding: 40,
        backgroundColor: 'rgba(224, 224, 224, 1);',
    },
    container: {
        maxHeight: '100%',
        backgroundColor: '#FFFFFF',
    },
    editIcon: {
        opacity: 0,
    },
    rowContainer: {
        cursor: 'pointer',
        '&:hover ': {
            backgroundColor: '#eeeeee',
            transition: 'ease-in 200ms',
            '& button': {
                opacity: 1,
                transition: 'ease-in 200ms',
            },
        },
    },
});

export default function CasesList(props: CaseListProps) {
    const history = useHistory(),
        classes = useStyles(),
        { getCaseList, data, isLoading, handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } = props,
        filteredCaseList: caseListType[] = [];
    if (data.length) {
        data.map((caseItem: Case) => {
            return filteredCaseList.push({
                id: caseItem.id,
                caseNumber: caseItem.caseNumber,
                caseType: caseItem.caseType,
                dateOpened: moment(caseItem.dateOpened).format('M/DD/YYYY'),
                status: caseItem.status,
                facilityName: caseItem.respondent.name,
                facilityAddress:
                    caseItem.respondent.address.line1 +
                    ', ' +
                    caseItem.respondent.address.city +
                    ', ' +
                    caseItem.respondent.address.state,
                investigator: caseItem.assignedUser.name,
                summary: caseItem.description,
            });
        });
    }
    useEffect(() => {
        getCaseList({
            order: [],
            where: `{"status":{"inq":["Assigned"]}}`,
        });
    }, [getCaseList]);

    const onClickRow = (id: string, e: any) => {
        e.stopPropagation();
        const path = `/mcm/case/${id}/activities`;
        history.push(path);
    };
    //TODO: Need to check in future
    const handleDeleteCase = (e: MouseEvent<HTMLElement>, id: string) => {
        e.stopPropagation();
        //Need to check in future
        // eslint-disable-next-line no-console
        console.log('id', id);
    };
    if (isLoading) return <Loader />;
    return (
        <Paper className={classes.root}>
            <DataTable
                className={classes.container}
                columns={columns}
                data={filteredCaseList}
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={filteredCaseList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleDeleteCase={handleDeleteCase}
                onClickRow={onClickRow}
                deleteFlag={false}
                editFlag={true}
            />
        </Paper>
    );
}
