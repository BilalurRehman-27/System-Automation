import React, { FunctionComponent, Fragment, useState, MouseEvent } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {
  Box,
  Typography,
  makeStyles,
  Theme,
  Slide,
  InputBase,
  createStyles,
  withStyles,
  Select,
  MenuItem,
  Grid,
  Button,
} from "@material-ui/core";
import Header from "../../components/PageHeader/Header";
import Title from "../../components/PageHeader/Title";
import Entries from "./Tabs/Entries/Entries";
import Files from "./Tabs/Files";
import CaseData from "./Tabs/CaseData/CaseData";
import AuditHistory from "./Tabs/AuditHistory/AuditHistory";
import CaseDetailNode from "./CaseDetailNode/CaseDetailNode";

type CaseDetailTabsProps = {};
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CaseDetailTabs: FunctionComponent<CaseDetailTabsProps> = (props) => {
  const [caseState, setCaseState] = useState(0);
  const [value, setValue] = useState(0);
  const [doShowDetail, setDoShowDetail] = useState(true);

  /* State for modals */
  const [isOpen, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  /* Handle edit case button */
  const handleEditCase = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setModal(true);
    setEditModal(true);
  };

  /* Handle add case button */
  const handleAddCase = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setModal(true);
    setAddModal(true);
  };

  /* Handle delete case button */
  const handleDeleteCase = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setModal(true);
    setDeleteModal(true);
  };

  /* Common onClose handler */
  const onClose = () => {
    console.log("onClose() called");
    setModal(false);
    setEditModal(false);
    setAddModal(false);
    setDeleteModal(false);
  };

  /* Common onSave handler */
  const onSave = () => {
    console.log("onSave() called");
    setModal(false);
    setEditModal(false);
    setAddModal(false);
  };

  const onDelete = () => {
    console.log("onDelete() called");
    setModal(false);
    setDeleteModal(false);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabsClasses = makeStyles((theme: Theme) => ({
    indicator: {
      backgroundColor: theme.palette.primary.main,
    },
  }))();
  const tabClasses = makeStyles((theme: Theme) => ({
    root: {
      fontSize: 16,
      textTransform: "none",
      fontWeight: "bold",
    },
    selected: {
      color: theme.palette.primary.light,
    },
  }))();

  const classes = makeStyles((theme: Theme) => ({
    header: {
      color: theme.palette.primary.light,
      fontWeight: 500,
    },
    addBtnContainer: {
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-end",
      "& button": {
        maxHeight: 30,
        maxWidth: 90,
        alignSelf: "center",
      },
    },
  }))();
  //TODO: Might need in future
  // const statusClasses = makeStyles((theme: Theme) => ({
  //   statusbox: {
  //     padding: 10,
  //     backgroundColor: "#fff2e5",
  //     color: "#f67b00",
  //     marginRight: 50,
  //     minWidth: 100,
  //   },
  // }))();

  //TODO: Might need in future
  // const statusClasses = makeStyles((theme: Theme) => ({
  //   statusbox: {
  //     padding: 10,
  //     backgroundColor: "#fff2e5",
  //     color: "#f67b00",
  //     marginRight: 50,
  //     minWidth: 100,
  //   },
  //   alarmIcon: {
  //     fontSize: 20,
  //     paddingRight: 5,
  //   },
  // }))();

  const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
      root: {
        "label + &": {
          marginTop: theme.spacing(3),
        },
      },
      input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        "&:focus": {
          borderRadius: 4,
          borderColor: "#80bdff",
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        },
      },
    })
  )(InputBase);

  const handleCaseChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCaseState(event.target.value as number);
  };

  return (
    <Fragment>
      <Header>
        <Title
          titleText="Case #2021-001"
          respondent={{ name: "Jay Mendez" }}
          registrant={{ name: "Dean Lyons" }}
        />
        <Grid item sm={12} md={8} lg={8}>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-end"
            mt={2}
            mb={2}
            ml={5}
            mr={5}
          >
            {/* TODO: Updated in mockups. Not needed for now. Might need in future
             <Box display="flex" className={statusClasses.statusbox}>
              <Alarm className={statusClasses.alarmIcon} />
            INACTIVE FOR 90 DAYS &nbsp;<b>Provide status update</b>
            </Box> */}
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={caseState}
              onChange={handleCaseChange}
              input={<BootstrapInput />}
              autoWidth={true}
            >
              <MenuItem value={0}>Assigned</MenuItem>
              <MenuItem value={1}>Investigation Started</MenuItem>
              <MenuItem value={2}>Ready To Review</MenuItem>
              <MenuItem value={3}>Criminal Hold</MenuItem>
              <MenuItem value={4}>Closed</MenuItem>
              <MenuItem value={5}>Refferral</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Header>
      <Box width="100%" display="flex" className="case-detail">
        <Slide
          in={doShowDetail}
          direction="right"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Box className="case-detail-container">
            <h3 className={classes.header}>DETAILS</h3>
            <CaseDetailNode
              key="1"
              label="Type"
              value="Audit"
              isEditable={true}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="2"
              label="Open Date"
              value="4/01/2020"
              isEditable={false}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="3"
              label="Close Date"
              value="4/01/2021"
              isEditable={false}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="4"
              label="Status"
              value="Closed"
              isEditable={true}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="5"
              label="Investigator"
              value="Jon Carlos"
              isEditable={true}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="6"
              label="Address"
              value="123 Main st"
              isEditable={false}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="7"
              label="City"
              value="Columbia"
              isEditable={false}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="8"
              label="State"
              value="MD"
              isEditable={false}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="9"
              label="Zip"
              value="54000"
              isEditable={false}
              onChange={() => {
                alert("change");
              }}
            />
            <CaseDetailNode
              key="10"
              label="Complaintant"
              value="James Brown"
              isEditable={false}
              onChange={() => {
                alert("change");
              }}
            />
          </Box>
        </Slide>
        <Box width="100%">
          <div className="d-flex tab-nav-container">
            <Tabs
              classes={tabsClasses}
              value={value}
              onChange={handleChange}
              aria-label="full width tabs example"
            >
              <Tab
                classes={tabClasses}
                className="case-detail-tab"
                label="Entries"
                {...a11yProps(0)}
              />
              <Tab
                classes={tabClasses}
                className="case-detail-tab"
                label="Files"
                {...a11yProps(1)}
              />
              <Tab
                classes={tabClasses}
                className="case-detail-tab"
                label="Case Data"
                {...a11yProps(2)}
              />
              <Tab
                classes={tabClasses}
                className="case-detail-tab"
                label="Audit History"
                {...a11yProps(3)}
              />
              {/* <Tab
                classes={tabClasses}
                className="case-detail-tab"
                label="Reports"
                {...a11yProps(4)}
              /> */}
              
              
              <div className={classes.addBtnContainer}>
                {value === 0 && <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={(e: MouseEvent<HTMLElement>) => handleAddCase(e)}
                >
                  Add Entry
                </Button>}
                {value === 1 && <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  onClick={() => console.log('File Upload!')}
                >
                  Upload File
                </Button>}
              </div>
            </Tabs>
          </div>
          <div className="d-flex tab-container">
            {doShowDetail && (
              <ArrowLeft
                className="case-detail-show-hide-btn opened"
                onClick={() => {
                  setDoShowDetail(!doShowDetail);
                }}
              />
            )}
            {!doShowDetail && (
              <ArrowRight
                className="case-detail-show-hide-btn closed"
                onClick={() => {
                  setDoShowDetail(!doShowDetail);
                }}
              />
            )}
            <TabPanel value={value} index={0}>
              <Entries
                isOpen={isOpen}
                editModal={editModal}
                handleEditCase={handleEditCase}
                deleteModal={deleteModal}
                handleDeleteCase={handleDeleteCase}
                addModal={addModal}
                onSave={onSave}
                onDelete={onDelete}
                onClose={onClose}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Files />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <CaseData />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <AuditHistory />
            </TabPanel>
            {/* <TabPanel value={value} index={4}>
              Reports
            </TabPanel> */}
            
          </div>
        </Box>
      </Box>
    </Fragment>
  );
};

export default CaseDetailTabs;
