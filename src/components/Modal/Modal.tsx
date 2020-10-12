import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Dialog } from '@material-ui/core';

/* Modal Props */
type ModalProps = {
    open: boolean;
    maxWidth: any;
    fullWidth: boolean;
    minHeight: string;
};

const Modal: FunctionComponent<ModalProps> = (props) => {
    /* Styles for modal */
    const { open, maxWidth, fullWidth, minHeight, children } = props;
    const useStyles = makeStyles(() =>
        createStyles({
            dialog: {
                minHeight: minHeight,
            },
        }),
    );

    const classes = useStyles();

    return (
        <Dialog classes={{ paper: classes.dialog }} open={open} maxWidth={maxWidth} fullWidth={fullWidth}>
            {children}
        </Dialog>
    );
};

export default Modal;
