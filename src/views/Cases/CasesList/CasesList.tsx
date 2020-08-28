import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import MultiSelectComponent from "../../../components/MultiSelectComponent";
import { caseListData } from "../../../assets/mock/DummyData";
interface Data {
  caseNumber: string;
  caseType: string;
  dateOpened: number;
  size: number;
  density: number;
}

interface Column {
  id:
    | "caseNumber"
    | "caseType"
    | "dateOpened"
    | "dateClosed"
    | "status"
    | "respondant"
    | "investigator"
    | "summary";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "caseNumber", label: "Case-Number", minWidth: 170 },
  { id: "caseType", label: "Type", minWidth: 100 },
  {
    id: "dateOpened",
    label: "Open Date",
    minWidth: 100,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "dateClosed",
    label: "Close Date",
    minWidth: 100,
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
    id: "respondant",
    label: "Respondant",
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
});

export default function CasesList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" ,fontSize:'12px'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {caseListData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.caseNumber}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {typeof value === "string" ? (
                            value
                          ) : (
                            <MultiSelectComponent data={value} label="" />
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={caseListData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
