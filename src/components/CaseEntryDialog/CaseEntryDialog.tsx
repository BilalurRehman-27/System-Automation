import React, { FunctionComponent, useState } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import {
    makeStyles,
    createStyles,
    Theme,
    DialogTitle,
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl
} from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

/* Mock data import */
import { caseList } from '../../assets/mock/DummyData';

type CaseEntryProps = {
    isEdit: boolean
    data: any;
    onClose: () => void;
    onSave: () => void;
}

/* Styles for dialog */
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dialog: {
            minHeight: '80vh',
            padding: 20
        },
        title: {
            color: '#757575',
            padding: 0
        },
        body: {
            display: "inherit",
            justifyContent: "space-between",
            padding: 8
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
            padding: 10,
            '& button': {
                margin: theme.spacing(1),
            }
        }
    }),
);

const CaseEntryDialog: FunctionComponent<CaseEntryProps> = (props) => {

    const classes = useStyles();

    const { isEdit, data, onClose, onSave } = props;

    const [entryDetail, setEntryDetail] = useState(isEdit ? data.description : "");
    const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
    const [selectedType, setSelectedType] = useState(data.additionalData.tag);

    return (
        <>
            <Box className={classes.body}>
                <DialogTitle className={classes.title}>
                    {isEdit ? "Journal Entry" : "Add Journal Entry"}
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
            </Box>
            <Box className={classes.body}>
                <TextField
                    style={{ flexGrow: 2 }}
                    variant="outlined"
                    placeholder={!isEdit ? "Add note..." : ""}
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
                        {caseList.map((item) => {
                            return (
                                <MenuItem
                                    key={item.id}
                                    value={item.additionalData ?
                                        item.additionalData.tag : "Generic"}
                                >
                                    {item.additionalData ?
                                        item.additionalData.tag : "Generic"}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.footer}>
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
            </Box>
        </>
    )
}

export default CaseEntryDialog
