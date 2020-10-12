import React, { FunctionComponent, useState } from 'react';
import { Grid } from '@material-ui/core';
import CaseFilters from './CaseFilters';
import Header from '../../components/PageHeader/Header';
import Title from '../../components/PageHeader/Title';
import CasesList from './CasesList';

type CasesProps = {};
const Cases: FunctionComponent<CasesProps> = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const getPageNumber = (pageNumber: number) => {
        setPage(pageNumber);
    };
    return (
        <aside>
            <Header>
                <Grid item sm={12} md={1} lg={1}>
                    <Title titleText="Cases" />
                </Grid>
                <Grid item sm={12} md={11} lg={11}>
                    <CaseFilters getPageNumber={getPageNumber} />
                </Grid>
            </Header>
            <CasesList
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
            />
        </aside>
    );
};

export default Cases;
