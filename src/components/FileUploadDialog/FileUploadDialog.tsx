import React, { FunctionComponent, useState } from 'react';
import { makeStyles, createStyles, Button, Box, Grid, Theme } from '@material-ui/core';
import FileDropzone from '../../components/FileDropzone';
import UploadedFile from '../UploadedFile';
import { ModalTypes } from '../../store/caseManagement.constants';

type FileUploadDialogProps = {
    onClose: (modalType?: string) => void;
    caseID: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        uploadDialog: {
            display: 'flex',
            flexGrow: 1,
        },
        filesContainer: {
            margin: theme.spacing(4),
            minHeight: '32vh',
        },
        paragraph: {
            color: '#6E7788',
            fontSize: 24,
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
            margin: 0,
        },
        dropzone: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'unset',
            minHeight: '100%',
            backgroundColor: '#F5F5F5',
        },
        footer: {
            margin: 20,
            display: 'flex',
            justifyContent: 'flex-end',
            '& button': {
                margin: theme.spacing(1),
            },
        },
    }),
);

const FileUploadDialog: FunctionComponent<FileUploadDialogProps> = (props) => {
    const { onClose, caseID } = props;
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isUploading, setUploading] = useState<boolean>(false);
    const [isDisabled, setDisabled] = useState<boolean>(true);

    const classes = useStyles();

    // Delete files upon uploading while dialog is open
    const deleteFiles = () => {
        setUploadedFiles([]);
    };

    // Uploading files through button or drag & drop
    const uploadFiles = (files: File[]) => {
        uploadedFiles.length > 0 && deleteFiles();
        setUploadedFiles(files);
        setDisabled(false);
    };

    // Invoked on 'Upload' button click
    const startUpload = () => {
        uploadedFiles.length !== 0 && setUploading(true);
        setDisabled(true);
    };

    // Invoked upon completion of subsequent uploads
    const nextUpload = (index: number) => {
        setActiveIndex(index);
    };

    // When all files have finished uploading, set active index to 0
    const stopUpload = () => {
        setUploading(false);
        setDisabled(true);
        setActiveIndex(0);
    };

    // Delete a file from uploading queue
    const removeFile = () => {
        if (!isUploading) {
            const newFilesList = uploadedFiles.filter((file) => uploadedFiles.indexOf(file));
            setUploadedFiles(newFilesList);
            !newFilesList.length && setDisabled(true);
        }
    };

    return (
        <Box className={classes.uploadDialog}>
            <Grid container>
                <Grid item xs={4}>
                    <FileDropzone isUploading={isUploading} uploadFiles={uploadFiles} />
                </Grid>
                <Grid item xs={8}>
                    <Box className={classes.filesContainer}>
                        {uploadedFiles.map((file, index) => (
                            <UploadedFile
                                key={index}
                                file={file}
                                fileIndex={index}
                                activeIndex={activeIndex}
                                nextUpload={nextUpload}
                                isUploading={isUploading}
                                filesCount={uploadedFiles.length}
                                stopUpload={stopUpload}
                                removeFile={removeFile}
                                isDisabled={isDisabled}
                                caseID={caseID}
                            />
                        ))}
                    </Box>
                    <Box className={classes.footer}>
                        <Button
                            disableElevation
                            variant="contained"
                            onClick={() => onClose(ModalTypes.CASE_FILE_UPLOAD)}
                        >
                            Close
                        </Button>
                        <Button
                            disabled={isDisabled}
                            disableElevation
                            color="primary"
                            variant="contained"
                            onClick={startUpload}
                        >
                            Upload
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FileUploadDialog;
