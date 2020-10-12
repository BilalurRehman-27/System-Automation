import React, { FunctionComponent, ChangeEvent } from 'react';
import { Box, Select, FormControl, InputLabel, MenuItem, makeStyles, createStyles, Theme } from '@material-ui/core';

type User = {
    id: string;
    name: string;
};

type CustomMultiSelectProps = {
    name: string;
    handleChange: (event: ChangeEvent<{ value: string[]; name: string }>) => void;
    data: User[];
    assignedTo: string[];
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            overflow: 'hidden',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 160,
        },
    }),
);

const CustomMultiSelect: FunctionComponent<CustomMultiSelectProps> = (props) => {
    const { name, handleChange, data, assignedTo } = props;
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <FormControl className={classes.formControl}>
                <InputLabel>Assigned To</InputLabel>
                <Select name={name} value={assignedTo} multiple={true} onChange={(e: any) => handleChange(e)}>
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
