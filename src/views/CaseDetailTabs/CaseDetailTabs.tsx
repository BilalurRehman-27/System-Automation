import React, { FunctionComponent, Fragment, useState } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Box, Typography, makeStyles, Theme, Slide } from "@material-ui/core";
import Header from "../../components/PageHeader/Header";
import Title from "../../components/PageHeader/Title";
import Entries from "./Tabs/Entries/Entries";
import Files from "./Tabs/Files/Files";
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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const CaseDetailTabs: FunctionComponent<CaseDetailTabsProps> = (props) => {
  const [value, setValue] = useState(0);
  const [doShowDetail, setDoShowDetail] = useState(true);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const tabsClasses = makeStyles((theme: Theme) => ({
    indicator: {
      backgroundColor: theme.palette.primary.main
    }
  }))();
  const tabClasses = makeStyles((theme: Theme) => ({
    root: {
      fontSize: 16,
      textTransform: "none",
      fontWeight: "bold"
    },
    selected: {
      color: theme.palette.primary.light,
    }
  }))();

  const classes = makeStyles((theme: Theme) => ({
    header: {
      color: theme.palette.primary.light,
      fontWeight: 500
    }
  }))();

  return (
    <Fragment>
      <Header>
        <Title titleText="Case #2021-001" respondent={{ name: "Jay Mendez" }} registrant={{ name: "Dean Lyons" }} />
      </Header>
      <Box width="100%" display="flex" className="case-detail">
        <Slide in={doShowDetail} direction="right" mountOnEnter={true} unmountOnExit={true}>
          < Box className="case-detail-container">
            <h3 className={classes.header}>DETAILS</h3>
            <CaseDetailNode key="1" label="Type" value="Audit" isEditable={true} onChange={() => { alert('change') }} />
            <CaseDetailNode key="2" label="Open Date" value="4/01/2020" isEditable={false} onChange={() => { alert('change') }} />
            <CaseDetailNode key="3" label="Close Date" value="4/01/2021" isEditable={false} onChange={() => { alert('change') }} />
            <CaseDetailNode key="4" label="Status" value="Closed" isEditable={true} onChange={() => { alert('change') }} />
            <CaseDetailNode key="5" label="Investigator" value="Jon Carlos" isEditable={true} onChange={() => { alert('change') }} />
            <CaseDetailNode key="6" label="Address" value="123 Main st" isEditable={false} onChange={() => { alert('change') }} />
            <CaseDetailNode key="7" label="City" value="Columbia" isEditable={false} onChange={() => { alert('change') }} />
            <CaseDetailNode key="8" label="State" value="MD" isEditable={false} onChange={() => { alert('change') }} />
            <CaseDetailNode key="9" label="Zip" value="54000" isEditable={false} onChange={() => { alert('change') }} />
            <CaseDetailNode key="10" label="Complaintant" value="James Brown" isEditable={false} onChange={() => { alert('change') }} />
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
              <Tab classes={tabClasses} className="case-detail-tab" label="Entries" {...a11yProps(0)} />
              <Tab classes={tabClasses} className="case-detail-tab" label="Audit History" {...a11yProps(1)} />
              <Tab classes={tabClasses} className="case-detail-tab" label="Reports" {...a11yProps(2)} />
              <Tab classes={tabClasses} className="case-detail-tab" label="Case Data" {...a11yProps(3)} />
              <Tab classes={tabClasses} className="case-detail-tab" label="Files" {...a11yProps(4)} />
            </Tabs>
          </div>
          <div className="d-flex tab-container">
            {doShowDetail &&
              <ArrowLeft className="case-detail-show-hide-btn opened" onClick={() => {
                setDoShowDetail(!doShowDetail)
              }} />
            }
            {!doShowDetail &&
              <ArrowRight className="case-detail-show-hide-btn closed" onClick={() => {
                setDoShowDetail(!doShowDetail)
              }} />
            }
            <TabPanel value={value} index={0}>
              <Entries />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AuditHistory />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Reports
          </TabPanel>
            <TabPanel value={value} index={3}>
              <CaseData />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Files />
            </TabPanel>
          </div>
        </Box>
      </Box>
    </Fragment >
  );
};

export default CaseDetailTabs;
