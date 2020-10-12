import React, { FunctionComponent, ChangeEvent } from 'react';
import { Box, Select, FormControl, InputLabel, MenuItem, makeStyles, createStyles, Theme } from '@material-ui/core';

type User = {
    id: string;
    name: string;
};

type DropDownComponent = {
    name: string;
    handleChange: (event: ChangeEvent<{ value: string; name: string }>) => void;
    data: User[];
    multiple?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    label: string;
    inputProps?: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            overflow: 'hidden',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            flexDirection: 'row',
        },
    }),
);

const CustomMultiSelect: FunctionComponent<DropDownComponent> = (props) => {
    const { name, handleChange, data, multiple, disabled, defaultValue, label } = props;
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <FormControl className={classes.formControl}>
                <InputLabel>{label ? label : ''}</InputLabel>
                <Select
                    name={name}
                    value={defaultValue}
                    multiple={multiple}
                    disabled={disabled}
                    onChange={(e: any) => handleChange(e)}
                >
                    {data.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                            {user.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomMultiSelect;
