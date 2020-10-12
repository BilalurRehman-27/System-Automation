import React, { FunctionComponent, MouseEvent } from 'react';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    IconButton,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

type DataTableProps = {
    className?: string;
    columns: any;
    data: [];
    rowsPerPageOptions: any;
    component?: any;
    count: number;
    rowsPerPage: number;
    page: number;
    handleChangePage?: any;
    handleChangeRowsPerPage?: any;
    handleDeleteCase: (e: MouseEvent<HTMLElement>, id: string) => void;
    downloadCaseFile: (e: MouseEvent<HTMLElement>, id: string, fileName: string) => void;
    onClickRow?: any;
    deleteFlag: boolean;
    editFlag: boolean;
};
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
const DataTable: FunctionComponent<DataTableProps> = (props) => {
    const classes = useStyles();
    const {
        className,
        columns,
        data,
        rowsPerPageOptions,
        component,
        count,
        rowsPerPage,
        page,
        handleChangePage,
        handleChangeRowsPerPage,
        handleDeleteCase,
        onClickRow,
        deleteFlag,
        editFlag,
        downloadCaseFile,
    } = props;
    return (
        <div>
            <TableContainer className={className}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column: any) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: { [x: string]: any; id: any }, index: any) => {
                                return (
                                    <TableRow
                                        className={classes.rowContainer}
                                        hover
                                        tabIndex={-1}
                                        key={index}
                                        onClick={(e: MouseEvent<HTMLElement>) => onClickRow(row.id, e)}
                                    >
                                        {columns.map((column: any) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell>
                                            {deleteFlag && (
                                                <IconButton
                                                    className={classes.editIcon}
                                                    onClick={(e: MouseEvent<HTMLElement>) =>
                                                        downloadCaseFile(e, row.id, row.fileName)
                                                    }
                                                >
                                                    <GetAppRoundedIcon />
                                                </IconButton>
                                            )}
                                            {deleteFlag && (
                                                <IconButton
                                                    onClick={(e: MouseEvent<HTMLElement>) =>
                                                        handleDeleteCase(e, row.id)
                                                    }
                                                    className={classes.editIcon}
                                                >
                                                    <Delete />
                                                </IconButton>
                                            )}
                                            {editFlag && (
                                                <IconButton className={classes.editIcon}>
                                                    <EditIcon />
                                                </IconButton>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component={component}
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
};
export default DataTable;
