import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles, Theme } from "@material-ui/core";

type deleteModalProps = {
    onClose: () => void;
    onDelete: () => void;
    contentTitle: string;
    content: string;
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            '& button': {
                margin: theme.spacing(1)
            }
        },
        deleteButton: {
            backgroundColor: "#D32F2F",
            color: "#fff",
            "&:hover": {
                backgroundColor: "#bd2a2a",
                color: "#fff"
            }
        }
    }),
);
const DeleteDialog: FunctionComponent<deleteModalProps> = ({ ...props }) => {
    const { onDelete, onClose, contentTitle, content } = props;
    const classes = useStyles();

    return (
        <div>
            <DialogTitle id="alert-dialog-title">{contentTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.footer}>
                <Button
                    disableElevation
                    variant="contained"
                    onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                    disableElevation
                    variant="contained"
                    onClick={onDelete}
                    className={classes.deleteButton}
                    autoFocus
                >
                    Yes, Delete
                </Button>
            </DialogActions>
        </div>
    );
}
export default DeleteDialog;