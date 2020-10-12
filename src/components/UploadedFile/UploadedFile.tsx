import React, { FunctionComponent, useState, useEffect } from 'react';
import prettyBytes from 'pretty-bytes';
import {
    makeStyles,
    createStyles,
    Theme,
    TextField,
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
    LinearProgress,
    Box,
    Tooltip,
} from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

import { caseList } from '../../assets/mock/DummyData';
import { MESSAGES } from '../../store/caseManagement.constants';
import { api } from '../../store/service/service';

type UploadedFileProps = {
    file: File;
    activeIndex: number;
    fileIndex: number;
    nextUpload: (index: number) => void;
    isUploading: boolean;
    filesCount: number;
    stopUpload: () => void;
    removeFile: () => void;
    isDisabled: boolean;
    caseID: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: '100%',
            '& .MuiOutlinedInput-input': {
                padding: theme.spacing(1),
            },
        },
        container: {
            alignItems: 'center',
        },
        fileSize: {
            color: '#6E7788',
            textAlign: 'center',
        },
        indicator: {
            margin: '-6px 10px 8px',
        },
    }),
);

const UploadedFile: FunctionComponent<UploadedFileProps> = (props) => {
    const {
        file,
        fileIndex,
        activeIndex,
        nextUpload,
        isUploading,
        filesCount,
        stopUpload,
        removeFile,
        isDisabled,
        caseID,
    } = props;

    const [selectedType, setSelectedType] = useState<string>('');
    const [percentage, setPercentage] = useState<number>(0);
    const [status, setStatus] = useState<string>('');
    const [fileName, setFileName] = useState<string>(file.name);

    const makeFile = (file: File) => {
        let data = new FormData();
        data.append('files', file);
        data.append('type', selectedType);
        data.append('fileName', fileName);
        data.append('size', file.size.toString());
        return data;
    };

    const data = makeFile(file);

    const options = {
        onUploadProgress: (progressEvent: any) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            // console.log(`${loaded} bytes of ${total} bytes | ${percent}%`);
            if (percent <= 100) {
                setPercentage(percent);
            }
        },
    };

    useEffect(() => {
        if (isUploading && activeIndex === fileIndex) {
            api.uploadCaseFile(data, caseID, options)
                .then(() => setStatus(MESSAGES.FILE_UPLOAD_SUCCESS))
                .catch(() => setStatus(MESSAGES.FILE_UPLOAD_FAIL))
                .finally(() => nextUpload(fileIndex + 1));
        }
        activeIndex > filesCount - 1 && stopUpload();
        // eslint-disable-next-line
    }, [isUploading, activeIndex, stopUpload]);

    const classes = useStyles();

    return (
        <Grid className={classes.container} container spacing={2}>
            <Grid item xs={5}>
                <TextField
                    disabled={isDisabled}
                    classes={{ root: classes.root }}
                    variant="outlined"
                    value={fileName}
                    onChange={(e: any) => setFileName(e.target.value)}
                />
            </Grid>
            <Grid item xs={4}>
                <FormControl disabled={isDisabled} variant="outlined" className={classes.root}>
                    <Select
                        displayEmpty
                        value={selectedType}
                        onChange={(e: any): void => setSelectedType(e.target.value)}
                    >
                        <MenuItem value="">Type</MenuItem>
                        {caseList.map((caseItem) => (
                            <MenuItem
                                key={caseItem.id}
                                value={caseItem.additionalData ? caseItem.additionalData.tag : 'Generic'}
                            >
                                {caseItem.additionalData ? caseItem.additionalData.tag : 'Generic'}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid className={classes.fileSize} item xs={2}>
                <Typography variant="caption">{prettyBytes(file.size)}</Typography>
            </Grid>
            <Grid className={classes.fileSize} item xs={1}>
                {status === '' && (
                    <Tooltip title="Remove" placement="top">
                        <Box onClick={removeFile}>
                            <CancelOutlinedIcon />
                        </Box>
                    </Tooltip>
                )}
                {status === MESSAGES.FILE_UPLOAD_SUCCESS && (
                    <Tooltip title="Completed" placement="top">
                        <Box>
                            <CheckCircleOutlinedIcon color="primary" />
                        </Box>
                    </Tooltip>
                )}
                {status === MESSAGES.FILE_UPLOAD_FAIL && (
                    <Tooltip title="Failed" placement="top">
                        <Box>
                            <ErrorOutlineOutlinedIcon color="error" />
                        </Box>
                    </Tooltip>
                )}
            </Grid>
            {status === MESSAGES.FILE_UPLOAD_FAIL && (
                <Box className={classes.indicator}>
                    <Typography color="error" variant="caption">
                        Upload failed
                    </Typography>
                </Box>
            )}
            {isUploading && fileIndex === activeIndex && (
                <Grid item xs={12}>
                    <LinearProgress value={percentage} variant="determinate" />
                </Grid>
            )}
        </Grid>
    );
};

export default UploadedFile;
