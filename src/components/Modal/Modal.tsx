import React, { FunctionComponent } from 'react';
import {
    makeStyles,
    createStyles,
    Theme,
    Dialog,
} from '@material-ui/core'

/* Modal Props */
type ModalProps = {
    open: boolean;
    maxWidth: any;
    fullWidth: boolean;
    minHeight:string;
};


const Modal: FunctionComponent<ModalProps> = (props) => {

    /* Styles for modal */
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            dialog: {
                minHeight: props.minHeight,
                padding: 30
            },
        }),
    );
    const { open, maxWidth, fullWidth } = props;

    const classes = useStyles();

    return (
        <Dialog classes={{ paper: classes.dialog }}
            open={open}
            maxWidth={maxWidth}
            fullWidth={fullWidth} >
            {props.children}
        </Dialog>
    )
}

export default Modal
