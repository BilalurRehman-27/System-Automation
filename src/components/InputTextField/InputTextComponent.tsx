import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";

type InputTextComponentProps = {
  disabled: boolean;
  size: "small";
  defaultValue: string;
  className: string;
  id: string;
  fontSize: string;
  customInputProps?: string;
  inputProps?: string;
  disableUnderline?: boolean;
  multiline?: boolean;
  onChange: Function;
  variant?: string;
};
const InputTextComponent: FunctionComponent<InputTextComponentProps> = (
  props
) => {
  const setInputText = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    props.onChange(e.target.value);
  };
  return (
    <TextField
      disabled={props.disabled}
      size={props.size}
      id={props.id}
      defaultValue={props.defaultValue}
      className={props.className}
      InputProps={{
        classes: {
          input: props.inputProps,
        },
        disableUnderline: true,
      }}
      multiline={props.multiline ? true : false}
      onChange={setInputText}
    />
  );
};
export default InputTextComponent;
