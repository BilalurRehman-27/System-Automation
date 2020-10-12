import React, { FunctionComponent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles, createStyles, Box, Button, Theme } from '@material-ui/core';

type FileDropZoneProps = {
    uploadFiles: (files: File[]) => void;
    isUploading: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dropContainer: {
            minHeight: '100%',
            backgroundColor: '#F5F5F5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        dropText: {
            color: '#6E7788',
            fontSize: 24,
            fontWeight: 500,
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
            margin: theme.spacing(1),
            '&:hover': {
                cursor: 'pointer',
            },
        },
        selectBtn: {
            width: '100%',
        },
    }),
);

const FileDropzone: FunctionComponent<FileDropZoneProps> = ({ uploadFiles, isUploading }) => {
    const classes = useStyles();

    /* react-dropzone initialization */
    const onDrop = useCallback(
        (acceptedFiles) => {
            uploadFiles(acceptedFiles);
        },
        [uploadFiles],
    );
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <Box className={classes.dropContainer}>
            <div {...getRootProps()}>
                <input disabled={isUploading} {...getInputProps()} />
                <div className={classes.dropText}>Drag and drop files</div>
                <div className={classes.dropText} style={{ fontWeight: 'unset' }}>
                    or
                </div>
                <Button
                    disabled={isUploading}
                    className={classes.selectBtn}
                    variant="contained"
                    disableElevation
                    color="primary"
                    onClick={() => onDrop}
                >
                    Select File
                </Button>
            </div>
        </Box>
    );
};

export default FileDropzone;
