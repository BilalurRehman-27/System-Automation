import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//TODO: Need to check with Jeff
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import MultiSelectComponent from "../../../components/MultiSelectComponent";
import {
  Assignees,
  CaseTypes,
  CaseStatus,
} from "../../../assets/mock/DummyData";
import DateFrom from "../../../components/DatePicker";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filters: {
      flexGrow: 1,
      width: "100%",
    },
    root: {
      width: "200px",
      ".makeStyles-formControl-10": {
        width: "200px",
      },
    },
    mr: {
      marginRight: "10px",
    },
    inline: {
      display: "inline-flex",
    },
  })
);

export default function CaseFilters() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //TODO: Need to check with Jeff
  //const [checked, setChecked] = React.useState(true);
  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  //   console.log(checked);
  // };
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="case-filters-container">
      <div className={classes.filters}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {/* <Tab
            label=""
            icon={
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        defaultChecked
                        color="default"
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                        value="myCases"
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Only my cases"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>
            }
          />
          <Divider orientation="vertical" flexItem /> */}
          <Tab
            label=""
            icon={
              <div className={classes.root}>
                <MultiSelectComponent label="Assigned To" data={Assignees} />
              </div>
            }
          />
          <Divider orientation="vertical" flexItem />
          <Tab
            label=""
            icon={
              <div className={classes.root}>
                <MultiSelectComponent label="Types" data={CaseTypes} />
              </div>
            }
          />
          <Divider orientation="vertical" flexItem />
          <Tab
            label=""
            icon={
              <div className={classes.root}>
                <MultiSelectComponent label="Status" data={CaseStatus} />
              </div>
            }
          />
          <Divider orientation="vertical" flexItem />
          <Tab
            label=""
            icon={
              <aside className={classes.inline}>
                <div className={classes.mr}>
                  <DateFrom label="Date From" />
                </div>
                <div className={classes.mr}>
                  <DateFrom label="Date To" />
                </div>
              </aside>
            }
          />
        </Tabs>
      </div>
    </div>
  );
}
