import React, { FunctionComponent, useState, MouseEvent } from 'react';
import moment from 'moment';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { modalData } from '../../../../assets/mock/DummyData';
import Loader from '../../../../components/Loader';
import Modal from '../../../../components/Modal';
import DeleteDialog from '../../../../components/DeleteDialog';
import DataTable from '../../../../components/DataTable';
import FileUploadDialog from '../../../../components/FileUploadDialog';
import { CASE_DETAIL_TABS } from '../../../../store/caseManagement.constants';
import { File } from '../../../../store/modules/fileList/types';
import prettyBytes from 'pretty-bytes';

type FilesProps = {
    isLoading?: boolean;
    data?: any;
    handleDeleteCase: (e: MouseEvent<HTMLElement>, id: string) => void;
    isOpen: boolean;
    onClose: (modalType?: string) => void;
    onDelete: (e: MouseEvent<HTMLElement>, type: string) => void;
    downloadCaseFile: (e: MouseEvent<HTMLElement>, type: string, name: string) => void;
    uploadModal: boolean;
    deleteModal: boolean;
    caseID: string;
};
type fileListType = {
    id: number;
    fileName: string;
    size: string;
    uploadedDate: string;
    documentType: string;
};

interface IColumn {
    id: 'fileName' | 'uploadedDate' | 'size' | 'documentType';
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
    format?: (value: number) => string;
}

const columns: IColumn[] = [
    { id: 'fileName', label: 'Name', minWidth: 250 },
    { id: 'uploadedDate', label: 'Date Uploaded', minWidth: 200 },
    {
        id: 'size',
        label: 'Size',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'documentType',
        label: 'Type',
        minWidth: 100,
        align: 'left',
    },
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
const Files: FunctionComponent<FilesProps> = (props) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    /* State for modals */
    const {
        data,
        handleDeleteCase,
        isOpen,
        onClose,
        onDelete,
        downloadCaseFile,
        uploadModal,
        deleteModal,
        isLoading,
        caseID,
    } = props;
    const getFileList: fileListType[] = [];
    if (data.length) {
        data.map((caseItem: File) => {
            const name = caseItem.fileName;
            const fileExtension = caseItem.fileName.slice(name.lastIndexOf('.'), name.length);
            return getFileList.push({
                id: caseItem.id,
                fileName: caseItem.metadata.fileName !== name ? `${caseItem.metadata.fileName}${fileExtension}` : name,
                uploadedDate: moment(caseItem.uploadedDate).format('M/DD/YYYY'),
                size: prettyBytes(parseFloat(caseItem.size)),
                documentType: caseItem.metadata.type,
            });
        });
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const onClickRow = (id: number, e: any) => {
        e.stopPropagation();
    };
    if (isLoading) return <Loader />;
    return (
        <>
            {getFileList.length > 0 ? (
                <Paper className="case-entries-container">
                    {
                        <DataTable
                            className={classes.container}
                            columns={columns}
                            data={getFileList}
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={getFileList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            handleChangePage={handleChangePage}
                            handleChangeRowsPerPage={handleChangeRowsPerPage}
                            handleDeleteCase={handleDeleteCase}
                            onClickRow={onClickRow}
                            deleteFlag={true}
                            editFlag={false}
                            downloadCaseFile={downloadCaseFile}
                        />
                    }
                </Paper>
            ) : (
                <Typography variant="subtitle2" align="center">
                    No Files found
                </Typography>
            )}
            <Modal open={isOpen} maxWidth={modalData[0].maxWidth} fullWidth={modalData[0].fullWidth} minHeight={'20vh'}>
                {deleteModal && (
                    <DeleteDialog
                        onClose={onClose}
                        onDelete={onDelete}
                        contentTitle="Permanently delete this entry ?"
                        content=""
                        type={CASE_DETAIL_TABS.FILES}
                    />
                )}
                {uploadModal && <FileUploadDialog onClose={onClose} caseID={caseID} />}
            </Modal>
        </>
    );
};

export default Files;
