import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';

type MultiSelectComponentProps = {
    data: string[];
    label: string;
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<{ value: string[]; name: string }>) => void;
    personName: any;
    name: string;
    disabled?: boolean;
    multiple?: boolean;
    inputProps?: string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            maxWidth: 200,
            flexDirection: 'row',
        },
    }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 300,
        },
    },
};

const MultiSelectComponent: FunctionComponent<MultiSelectComponentProps> = (props) => {
    const classes = useStyles();
    const { name, personName, onChange, disabled, label, data, multiple = true, defaultValue, inputProps } = props;
    //TODO: Need add props.defaultValue for the dropdown to be selected for default values
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="multi-select-label">{label}</InputLabel>
                <Select
                    name={name}
                    labelId="multi-select-label"
                    id="multi-select"
                    multiple={multiple}
                    value={personName || defaultValue}
                    onChange={(e: any) => onChange(e)}
                    input={<Input />}
                    renderValue={(selected) => {
                        if (typeof selected !== 'string') return (selected as string[]).join(', ');
                        else return selected;
                    }}
                    inputProps={{
                        classes: {
                            input: inputProps,
                        },
                        disableUnderline: true,
                    }}
                    MenuProps={MenuProps}
                    disabled={disabled}
                >
                    {data &&
                        data.map((name: string) => {
                            return (
                                <MenuItem key={name} value={name}>
                                    {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
                                    <ListItemText primary={name} />
                                </MenuItem>
                            );
                        })}
                </Select>
            </FormControl>
        </div>
    );
};

export default MultiSelectComponent;
