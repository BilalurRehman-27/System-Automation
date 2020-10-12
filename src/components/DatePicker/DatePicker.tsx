import 'date-fns';
import React, { FunctionComponent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

type DatePickerProps = {
    label?: string;
    disabled?: boolean;
    inputProps?: string;
    onChange: Function;
    disableUnderline: boolean;
    defaultValue?: string;
};
const DatePicker: FunctionComponent<DatePickerProps> = (props) => {
    const { inputProps, disableUnderline, disabled, label, defaultValue } = props;
    const [selectedDate, setSelectedDate] = useState<Date | null>(defaultValue ? new Date(defaultValue) : null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        props.onChange(date);
    };

    return (
        <div style={{ marginTop: 0 }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="dense"
                        id="date-picker-inline"
                        defaultValue={defaultValue ? defaultValue : null}
                        disabled={disabled}
                        label={label}
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        InputProps={{
                            classes: {
                                input: inputProps,
                            },
                            disableUnderline: disableUnderline,
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
};
export default DatePicker;
