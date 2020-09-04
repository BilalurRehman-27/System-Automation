import React, { FunctionComponent, useState } from 'react';
import {
    makeStyles,
    createStyles,
    Theme,
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl
} from '@material-ui/core'
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

/* Modal Props */
type ModalProps = {
    open: boolean;
    data: any;
    maxWidth: any;
    fullWidth: boolean;
    onClose: () => void;
    onSave: () => void;
};

/* Styles for modal */
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialog: {
            minHeight: '80vh',
            padding: 20
        },
        title: {
            color: '#757575',
            padding: 0,
        },
        body: {
            display: "inherit",
            justifyContent: "space-between",
        },
        typeFilter: {
            flexGrow: 1,
            alignItems: "flex-end",
        },
        datePicker: {
            maxWidth: 160,
            '& .MuiOutlinedInput-adornedEnd': {
                padding: "unset"
            }
        },
        footer: {
            display: "inherit",
            justifyContent: "flex-end",
            flex: "unset",
            padding: 20,
            '& button': {
                margin: theme.spacing(1),
            }
        }
    }),
);

const Modal: FunctionComponent<ModalProps> = (props) => {

    const {
        open,
        data,
        onClose,
        onSave,
        maxWidth,
        fullWidth
    } = props;

    const classes = useStyles();
    const [entryDetail, setEntryDetail] = useState(data.modalBody);
    const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
    const [selectedType, setSelectedType] = useState(data.selectValues[0]);

    return (
        <Dialog classes={{ paper: classes.dialog }}
            open={open}
            maxWidth={maxWidth}
            fullWidth={fullWidth} >
            <DialogContent className={classes.body}>
                <DialogTitle className={classes.title}>
                    {data.modalTitle}
                </DialogTitle>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className={classes.datePicker}
                        variant="inline"
                        inputVariant="outlined"
                        value={selectedDate}
                        placeholder="10/10/2018"
                        onChange={date => handleDateChange(date)}
                        format="MM/dd/yyyy"
                    />
                </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogContent className={classes.body}>
                <TextField
                    style={{ flexGrow: 2 }}
                    variant="outlined"
                    // InputProps={{ disableUnderline: true }}
                    multiline
                    rows={20}
                    value={entryDetail}
                    onChange={(e): void => setEntryDetail(e.target.value)} />
                <FormControl className={classes.typeFilter} variant="outlined">
                    <Select
                        style={{ minWidth: 160 }}
                        value={selectedType}
                        onChange={(e): void => setSelectedType(e.target.value)}>
                        {data && data.selectValues.map((value: string, index: number) => {
                            return (
                                <MenuItem key={index} value={value}>{value}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogContent className={classes.footer}>
                <Button
                    disableElevation
                    variant="contained"
                    onClick={onClose} >
                    Cancel
                    </Button>
                <Button
                    disableElevation
                    variant="contained"
                    color='primary'
                    onClick={onSave} >
                    Save
                    </Button>
            </DialogContent>
        </Dialog>
    )
}

export default Modal
