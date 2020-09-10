import React, {useEffect, useState} from "react";
import {
    makeStyles,
    Paper,
} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import Loader from "../../../components/Loader";
import {caseListData} from "../../../assets/mock/DummyData";
import DataTable from "../../../components/DataTable";

interface IColumn {
    id:
        | "caseNumber"
        | "caseType"
        | "dateOpened"
        | "dateClosed"
        | "status"
        | "respondent"
        | "investigator"
        | "summary";
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center";
    format?: (value: number) => string;
}

const columns: IColumn[] = [
    {id: "caseNumber", label: "Case Number", minWidth: 170},
    {id: "caseType", label: "Type", minWidth: 100},
    {
        id: "dateOpened",
        label: "Open Date",
        minWidth: 200,
        align: "left",
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "dateClosed",
        label: "Close Date",
        minWidth: 200,
        align: "left",
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "status",
        label: "Status",
        minWidth: 100,
        align: "left",
    },
    {
        id: "respondent",
        label: "Respondent",
        minWidth: 100,
        align: "left",
    },
    {
        id: "investigator",
        label: "Investigator",
        minWidth: 100,
        align: "left",
    },
    {
        id: "summary",
        label: "Summary",
        minWidth: 100,
        align: "left",
    },
];
const useStyles = makeStyles({
    root: {
        padding: 40,
        backgroundColor: "rgba(224, 224, 224, 1);",
    },
    container: {
        maxHeight: "100%",
        backgroundColor: "#FFFFFF",
    },
    editIcon: {
        opacity: 0,
    },
    rowContainer: {
        cursor: "pointer",
        "&:hover ": {
            backgroundColor: "#eeeeee",
            transition: "ease-in 200ms",
            "& button": {
                opacity: 1,
                transition: "ease-in 200ms",
            },
        },
    },
});

export default function CasesList(props: {
    isLoading?: boolean;
    caseList?: any;
    data?: any;
}) {
    const history = useHistory();
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const {caseList, data} = props;
    useEffect(() => {
        caseList();
    }, [caseList]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // const onRowClick = (path: string) => {
    //   history.push(path);
    // };
    const onClickRow = (id: number, e: any) => {
        e.stopPropagation();
        console.log('onCLICEKUD', id);
        let path = `/case/${id}/detail`;
        history.push(path);
    }
    const handleDeleteCase = (id: any,e:any) => {
        e.stopPropagation();
        console.log('id', id);
    }
    const isLoading = props.isLoading;
    if (isLoading) return <Loader/>;
    return (
        <Paper className={classes.root}>
            <DataTable
                className={classes.container}
                columns={columns}
                data={data}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={caseListData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleDeleteCase={handleDeleteCase}
                onClickRow={onClickRow}
                deleteFlag={false}
                editFlag={true}
            />
            {/*<TableContainer className={classes.container}>*/}
            {/*  <Table stickyHeader aria-label="sticky table">*/}
            {/*    <TableHead>*/}
            {/*      <TableRow>*/}
            {/*        {columns.map((column) => (*/}
            {/*          <TableCell*/}
            {/*            key={column.id}*/}
            {/*            align={column.align}*/}
            {/*            style={{*/}
            {/*              minWidth: column.minWidth,*/}
            {/*              fontWeight: "bold",*/}
            {/*              fontSize: "16px",*/}
            {/*            }}*/}
            {/*          >*/}
            {/*            {column.label}*/}
            {/*          </TableCell>*/}
            {/*        ))}*/}
            {/*        <TableCell />*/}
            {/*      </TableRow>*/}
            {/*    </TableHead>*/}
            {/*    <TableBody>*/}
            {/*      {data*/}
            {/*        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/}
            {/*        .map(*/}
            {/*          (row: {*/}
            {/*            [x: string]: any;*/}
            {/*            caseNumber: string | number | null | undefined;*/}
            {/*            id: any;*/}
            {/*          }) => {*/}
            {/*            return (*/}
            {/*              <TableRow*/}
            {/*                className={classes.rowContainer}*/}
            {/*                hover*/}
            {/*                role="checkbox"*/}
            {/*                tabIndex={-1}*/}
            {/*                key={row.caseNumber}*/}
            {/*                onClick={() => {*/}
            {/*                  onRowClick(`/case/${row.id}/detail`);*/}
            {/*                }}*/}
            {/*              >*/}
            {/*                {columns.map((column) => {*/}
            {/*                  const value = row[column.id];*/}
            {/*                  return (*/}
            {/*                    <TableCell key={column.id} align={column.align}>*/}
            {/*                      {value}*/}
            {/*                    </TableCell>*/}
            {/*                  );*/}
            {/*                })}*/}
            {/*                <TableCell>*/}
            {/*                  <IconButton className={classes.editIcon}>*/}
            {/*                    <EditIcon />*/}
            {/*                  </IconButton>*/}
            {/*                </TableCell>*/}
            {/*              </TableRow>*/}
            {/*            );*/}
            {/*          }*/}
            {/*        )}*/}
            {/*    </TableBody>*/}
            {/*  </Table>*/}
            {/*</TableContainer>*/}
            {/*<TablePagination*/}
            {/*  rowsPerPageOptions={[10, 25, 100]}*/}
            {/*  component="div"*/}
            {/*  count={caseListData.length}*/}
            {/*  rowsPerPage={rowsPerPage}*/}
            {/*  page={page}*/}
            {/*  onChangePage={handleChangePage}*/}
            {/*  onChangeRowsPerPage={handleChangeRowsPerPage}*/}
        </Paper>
    );
}
