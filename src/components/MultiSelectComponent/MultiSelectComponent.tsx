import React, { FunctionComponent, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";

type MultiSelectComponentProps = {
  data: string[];
  label: string;
  defaultValue?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 200,
    },
  })
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

const MultiSelectComponent: FunctionComponent<MultiSelectComponentProps> = (
  props
) => {
  const classes = useStyles();
  //TODO: Need add props.defaultValue for the dropdown to be selected for default values
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
    console.log(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="multi-select-label">{props.label}</InputLabel>
        <Select
          labelId="multi-select-label"
          id="multi-select"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(", ")}
          MenuProps={MenuProps}
        >
          {props.data &&
            props.data.map((name: string) => {
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
