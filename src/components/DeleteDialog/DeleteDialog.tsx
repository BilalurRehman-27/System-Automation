import React, { FunctionComponent, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

type deleteModalProps = {
    onClose: () => void;
    onDelete: (e: MouseEvent<HTMLElement>, type: string) => void;
    contentTitle: string;
    content: string;
    type: string;
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: 10,
        },
        footer: {
            '& button': {
                margin: theme.spacing(1),
            },
        },
        deleteButton: {
            backgroundColor: '#D32F2F',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#bd2a2a',
                color: '#fff',
            },
        },
    }),
);
const DeleteDialog: FunctionComponent<deleteModalProps> = ({ ...props }) => {
    const { onDelete, onClose, contentTitle, content, type } = props;
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <DialogTitle id="alert-dialog-title">{contentTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
            </DialogContent>
            <DialogActions className={classes.footer}>
                <Button disableElevation variant="contained" onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    disableElevation
                    variant="contained"
                    onClick={(e) => onDelete(e, type)}
                    className={classes.deleteButton}
                    autoFocus
                >
                    Yes, Delete
                </Button>
            </DialogActions>
        </Box>
    );
};
export default DeleteDialog;
