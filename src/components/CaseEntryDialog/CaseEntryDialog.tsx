import React, { FunctionComponent, useState, MouseEvent } from 'react';
import DateFnsUtils from '@date-io/date-fns';
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
    FormControl,
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
/* TODO: Mock data import Need to remove it in futre*/
import { caseEntryJournalTypes } from '../../assets/mock/DummyData';
import Loader from '../../components/Loader';
import { ModalTypes } from '../../store/caseManagement.constants';

type CaseEntryProps = {
    isEdit: boolean;
    data?: any;
    onClose: () => void;
    onSave: Function;
    setEntryDate: Function;
    setDescription: Function;
    setType: Function;
    isLoading: boolean;
};

/* Styles for dialog */
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
        },
        title: {
            color: '#757575',
            padding: 0,
        },
        body: {
            display: 'inherit',
            justifyContent: 'space-between',
            padding: 16,
        },
        typeFilter: {
            alignItems: 'flex-end',
        },
        datePicker: {
            maxWidth: 160,
            '& .MuiOutlinedInput-adornedEnd': {
                padding: 'unset',
            },
        },
        footer: {
            display: 'inherit',
            justifyContent: 'flex-end',
            '& button': {
                margin: theme.spacing(1),
            },
        },
    }),
);

const CaseEntryDialog: FunctionComponent<CaseEntryProps> = (props) => {
    const classes = useStyles();

    const { isEdit, data, onClose, onSave, setType, setDescription, setEntryDate, isLoading } = props;

    const [entryDetail, setEntryDetail] = useState<string>(isEdit ? data.description : '');
    const [selectedDate, handleDateChange] = useState<Date | null>(data ? data.date : Date);
    const [selectedType, setSelectedType] = useState<string>(data ? data.type : 'Interview');

    const handleTypeSelect = (event: React.ChangeEvent<{ name?: string; value: any }>) => {
        setSelectedType(event.target.value);
        setType(event.target.value);
    };

    const setEntryDescription = (e: React.ChangeEvent<{ name?: string; value: any }>) => {
        setEntryDetail(e.target.value);
        setDescription(e.target.value);
    };

    const handleEntryDate = (date: Date | null) => {
        handleDateChange(date);
        setEntryDate(date);
    };

    if (isLoading) return <Loader />;
    return (
        <Box className={classes.container}>
            <Box className={classes.body}>
                <DialogTitle className={classes.title}>{isEdit ? 'Journal Entry' : 'Add Journal Entry'}</DialogTitle>
            </Box>
            <Box className={classes.body}>
                <TextField
                    style={{ flexGrow: 1 }}
                    variant="outlined"
                    placeholder={!isEdit ? 'Add note...' : ''}
                    multiline
                    rows={20}
                    value={entryDetail}
                    defaultValue={entryDetail}
                    onChange={(e): void => setEntryDescription(e)}
                />
                <Box ml={5}>
                    <FormControl className={classes.typeFilter} variant="outlined">
                        <Box>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    className={classes.datePicker}
                                    variant="inline"
                                    inputVariant="outlined"
                                    value={selectedDate}
                                    placeholder="10/10/2020"
                                    onChange={(date) => handleEntryDate(date)}
                                    format="MM/dd/yyyy"
                                />
                            </MuiPickersUtilsProvider>
                        </Box>
                        <Box mt={2}>
                            <Select style={{ minWidth: 160 }} value={selectedType} onChange={handleTypeSelect}>
                                {caseEntryJournalTypes.map((item) => {
                                    return (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </Box>
                    </FormControl>
                </Box>
            </Box>
            <Box mt={2} className={classes.footer}>
                <Button disableElevation variant="contained" onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    onClick={(e: MouseEvent<HTMLElement>) =>
                        onSave(e, isEdit ? ModalTypes.CASE_ENTRY_EDIT : ModalTypes.CASE_ENTRY_ADD)
                    }
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
};

export default CaseEntryDialog;
