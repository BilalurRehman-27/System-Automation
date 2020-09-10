import React, {useEffect, FunctionComponent, useState} from "react";
import {makeStyles, Paper} from "@material-ui/core";
import {fileListData, modalData} from "../../../../assets/mock/DummyData";
import Loader from "../../../../components/Loader";
import Modal from "../../../../components/Modal";
import DeleteDialog from "../../../../components/DeleteDialog";
import DataTable from "../../../../components/DataTable";
type FilesProps = {
    isLoading?: boolean;
    data?: any;
    getFileList?: any
};
interface IColumn {
    id:
        | "name"
        | "dateUploaded"
        | "size"
        | "type"
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center";
    format?: (value: number) => string;
}
const columns: IColumn[] = [
    {id: "name", label: "Name", minWidth: 250},
    {id: "dateUploaded", label: "Date Uploaded", minWidth: 200},
    {
        id: "size",
        label: "Size",
        minWidth: 100,
        align: "left",
    },
    {
        id: "type",
        label: "Type",
        minWidth: 100,
        align: "left",
    }
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
const Files: FunctionComponent<FilesProps> = (props) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    /* State for modals */
    const [isOpen, setModal] = useState(false);
    const {getFileList, data} = props;

    useEffect(() => {
        getFileList();
    }, [getFileList]);

    const handleChangePage = (event: unknown, newPage: number) => {
         console.log('newPage',newPage);
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
         console.log('rowPage',event.target.value);
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    /* Handle delete case button */
    const handleDeleteCase = (id: any,e:any) => {
         e.stopPropagation();
        setModal(true);
        console.log('id', id);
    }
    const onClose = () => {
        setModal(false);
    }
    const onDelete = () => {
        console.log('onDelete() called');
        setModal(false);
    }
    const onClickRow = (id:number,e:any) => {
        e.stopPropagation();
        console.log('onCLICEKUD',id);

    }
    const isLoading = props.isLoading;
    if (isLoading) return <Loader/>;
    return (
        <Paper className="case-entries-container">
            <DataTable
                className={classes.container}
                columns={columns}
                data={data}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={fileListData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleDeleteCase={handleDeleteCase}
                onClickRow={onClickRow}
                deleteFlag={true}
                editFlag={false}/>
            <Modal open={isOpen} maxWidth={modalData[0].maxWidth} fullWidth={modalData[0].fullWidth} minHeight={'10vh'}>
                <DeleteDialog
                    onClose={onClose}
                    onDelete={onDelete}
                    contentTitle="Permanently delete this entry ?"
                    content=""
                />
            </Modal>
        </Paper>
    )
};

export default Files;
