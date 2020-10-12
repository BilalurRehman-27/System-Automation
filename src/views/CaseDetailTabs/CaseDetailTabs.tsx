import React, { FunctionComponent, Fragment, useState, MouseEvent, useEffect } from 'react';
import moment from 'moment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
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
    FormControl,
} from '@material-ui/core';
import Header from '../../components/PageHeader/Header';
import Title from '../../components/PageHeader/Title';
import Entries from './Tabs/Entries';
import Files from './Tabs/Files';
import CaseData from './Tabs/CaseData';
import AuditHistory from './Tabs/AuditHistory';
import CaseDetailNode from './CaseDetailNode/CaseDetailNode';
import { CASE_DETAIL_TABS, ModalTypes, CASE_TYPES } from '../../store/caseManagement.constants';
import { CaseEntryJournal } from '../../store/modules/caseEntries/types';
import { compareDates } from '../../utils/utils';
import { Case } from '../../store/modules/casesList/types';
import Loader from '../../components/Loader';

type CaseDetailTabsProps = {
    getCaseEntries: Function;
    getFileList: Function;
    data?: any;
    getCaseEntriesById: Function;
    selectedCaseEntryJournal: CaseEntryJournal;
    editCaseJournalEntryBegin: Function;
    selectedCaseId: string;
    addCaseJournalEntryBegin: Function;
    deleteCaseEntryRecordBegin: Function;
    setSelectedCaseId: Function;
    selectedCaseData: Case;
    getCasesDetailsBegin: Function;
    deleteCaseFileRecordBegin: Function;
    downloadCaseFileBegin: Function;
    updateCaseStatusBegin: Function;
    isLoading: boolean;
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const TabPanel: FunctionComponent<TabPanelProps> = (props: TabPanelProps) => {
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
};

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const CaseDetailTabs: FunctionComponent<CaseDetailTabsProps> = (props) => {
    const {
        getCaseEntries,
        getFileList,
        selectedCaseEntryJournal,
        selectedCaseId,
        setSelectedCaseId,
        selectedCaseData,
        getCasesDetailsBegin,
        updateCaseStatusBegin,
        isLoading,
    } = props;

    const { caseType, dateOpened, dateClosed, status, assignedUser, complainant, respondent } = selectedCaseData;

    const BootstrapInput = withStyles((theme: Theme) =>
        createStyles({
            root: {
                'label + &': {
                    marginTop: theme.spacing(3),
                },
            },
            input: {
                borderRadius: 4,
                position: 'relative',
                backgroundColor: theme.palette.background.paper,
                border: '1px solid #ced4da',
                fontSize: 16,
                padding: '10px 26px 10px 12px',
                transition: theme.transitions.create(['border-color', 'box-shadow']),
                // Use the system font instead of the default Roboto font.
                '&:focus': {
                    borderRadius: 4,
                    borderColor: '#80bdff',
                    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                },
            },
        }),
    )(InputBase);

    const [id, setModalDeleteId] = useState<string>('');
    const [value, setValue] = useState(0);
    const [doShowDetail, setDoShowDetail] = useState(true);
    /*Need to use let because we need to assign default value
    if user doesn't change anything in the modal popup */
    let [date, setEntryDate] = useState<Date | null>(new Date());
    let [description, setDescription] = useState('');
    let [type, setType] = useState('');

    /* Selective properties to show on case details panel */

    /* State for modals */
    const [isOpen, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);

    useEffect(() => {
        getCasesDetailsBegin(selectedCaseId);
        getCaseEntries(selectedCaseId);
        getFileList(selectedCaseId);
        setSelectedCaseId(selectedCaseId);
    }, [getCaseEntries, getFileList, selectedCaseId, setSelectedCaseId, getCasesDetailsBegin]);

    /* Handle edit case button */
    const handleEditCase = (e: MouseEvent<HTMLElement>, id: string, type: string) => {
        e.stopPropagation();
        if (type === ModalTypes.CASE_ENTRY_EDIT) {
            const { getCaseEntriesById } = props;
            getCaseEntriesById(id);
        }
        setModal(true);
        setEditModal(true);
    };

    /* Handle add case button */
    const handleAddCase = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setModal(true);
        setAddModal(true);
    };

    /* Common onClose handler */
    const onClose = (modalType?: string) => {
        setModal(false);
        setEditModal(false);
        setAddModal(false);
        setDeleteModal(false);
        setUploadModal(false);
        modalType === ModalTypes.CASE_FILE_UPLOAD && getFileList(selectedCaseId);
    };

    /* Common onSave handler */
    const onSave = (e: MouseEvent<HTMLElement>, caseEntryType: string) => {
        e.stopPropagation();
        const { editCaseJournalEntryBegin, addCaseJournalEntryBegin } = props;
        if (caseEntryType === ModalTypes.CASE_ENTRY_ADD) {
            //TODO: Need to change the hard coded value to the first item of the API response
            type = type ? type : 'Interview';
            const addCaseEntry = {
                description,
                date,
                type,
            };
            //Need to reset the fields so that when user comes next time,
            //it should not be using previous state values
            setType('');
            setDescription('');

            addCaseJournalEntryBegin(addCaseEntry);
        } else if (caseEntryType === ModalTypes.CASE_ENTRY_EDIT) {
            description = description ? description : selectedCaseEntryJournal.description;
            type = type ? type : selectedCaseEntryJournal.type;
            date = compareDates(date, selectedCaseEntryJournal.date);
            const caseEntry = {
                description,
                date,
                type,
            };

            //Need to reset the fields so that when user comes next time,
            //it should not be using previous state values
            setEntryDate(new Date());
            setType('');
            setDescription('');
            editCaseJournalEntryBegin(caseEntry);
        }
        setModal(false);
        setEditModal(false);
        setAddModal(false);
    };

    const onDelete = (e: MouseEvent<HTMLElement>, type: string) => {
        e.stopPropagation();
        const { deleteCaseEntryRecordBegin, deleteCaseFileRecordBegin } = props;
        if (type === CASE_DETAIL_TABS.ENTRIES) {
            deleteCaseEntryRecordBegin(id);
        } else if (type === CASE_DETAIL_TABS.FILES) {
            deleteCaseFileRecordBegin(id);
        }
        setModal(false);
        setDeleteModal(false);
    };

    const downloadCaseFile = (e: MouseEvent<HTMLElement>, type: string, name: string) => {
        e.stopPropagation();
        const { downloadCaseFileBegin } = props;
        downloadCaseFileBegin(type, name);
    };

    const handleUploadFile = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setModal(true);
        setUploadModal(true);
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    /* Handle delete case button */
    const handleDeleteCase = (e: MouseEvent<HTMLElement>, id: string) => {
        setModalDeleteId(id);
        e.stopPropagation();
        setModal(true);
        setDeleteModal(true);
    };

    const handleCaseChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const caseState = event.target.value as string;
        updateCaseStatusBegin({ caseState, selectedCaseId });
    };
    /* Create a single string for the address field */
    const createAddress = (): string => {
        const { line1, city, state, zipcode } = respondent?.address;
        const addressString = `${line1}, ${city}, ${state} ${zipcode}`;
        return addressString;
    };

    const tabsClasses = makeStyles((theme: Theme) => ({
        indicator: {
            backgroundColor: theme.palette.primary.main,
        },
    }))();
    const tabClasses = makeStyles((theme: Theme) => ({
        root: {
            fontSize: 16,
            textTransform: 'none',
            fontWeight: 'bold',
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
        btnContainer: {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'flex-end',
            '& button': {
                maxWidth: 100,
                alignSelf: 'center',
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

    const handleEntryDate = (value: Date | null) => {
        setEntryDate(value);
    };

    const handleDescription = (value: string) => {
        setDescription(value);
    };

    const handleType = (value: string) => {
        setType(value);
    };

    return (
        <Fragment>
            {isLoading && <Loader />}
            <Header>
                <Grid container>
                    <Grid item sm={4} md={4} lg={4}>
                        {selectedCaseData?.caseNumber && (
                            <Title
                                titleText={`Case # ${selectedCaseData?.caseNumber}`}
                                respondent={{ name: selectedCaseData.respondent?.name }}
                            />
                        )}
                    </Grid>
                    <Grid item sm={8} md={8} lg={8}>
                        <Box display="flex" alignItems="flex-end" justifyContent="flex-end" mt={2} mb={2} ml={5} mr={5}>
                            {/* TODO: Updated in mockups. Not needed for now. Might need in future
             <Box display="flex" className={statusClasses.statusbox}>
             <Alarm className={statusClasses.alarmIcon} />
             INACTIVE FOR 90 DAYS &nbsp;<b>Provide status update</b>
            </Box> */}
                            <FormControl>
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={status ? status : ''}
                                    onChange={handleCaseChange}
                                    input={<BootstrapInput />}
                                    autoWidth={true}
                                >
                                    {Object.values(CASE_TYPES).map((caseType, index) => (
                                        <MenuItem key={index} value={caseType}>
                                            {caseType}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Header>
            <Box width="100%" display="flex" className="case-detail">
                {!doShowDetail && <Box className="case-detail-container-closed"></Box>}
                <Slide in={doShowDetail} direction="right" mountOnEnter={true} unmountOnExit={true}>
                    <Box className="case-detail-container">
                        <h3 className={classes.header}>DETAILS</h3>
                        <CaseDetailNode label="Type" value={caseType ? caseType : ''} />
                        <CaseDetailNode
                            label="Open Date"
                            value={dateOpened ? moment(dateOpened).format('M/DD/YYYY') : ''}
                        />
                        <CaseDetailNode
                            label="Close Date"
                            value={
                                status === CASE_TYPES.CLOSED && dateClosed ? moment(dateClosed).format('M/DD/YYYY') : ''
                            }
                        />
                        <CaseDetailNode label="Investigator" value={assignedUser ? assignedUser.name : ''} />
                        <CaseDetailNode label="Address" value={respondent && createAddress()} />
                        <CaseDetailNode label="Complainant" value={complainant ? complainant.name : ''} />
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
                            <Tab classes={tabClasses} className="case-detail-tab" label="Files" {...a11yProps(1)} />
                            <Tab classes={tabClasses} className="case-detail-tab" label="Case Data" {...a11yProps(2)} />
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

                            <div className={classes.btnContainer}>
                                {value === 0 && (
                                    <Button
                                        disableElevation
                                        variant="contained"
                                        color="primary"
                                        onClick={(e: MouseEvent<HTMLElement>) => handleAddCase(e)}
                                    >
                                        Add Entry
                                    </Button>
                                )}
                                {value === 1 && (
                                    <Button
                                        disableElevation
                                        variant="contained"
                                        color="primary"
                                        onClick={(e: MouseEvent<HTMLElement>) => handleUploadFile(e)}
                                    >
                                        Upload File
                                    </Button>
                                )}
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
                                selectedCaseEntryJournal={selectedCaseEntryJournal}
                                setEntryDate={handleEntryDate}
                                setDescription={handleDescription}
                                setType={handleType}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Files
                                handleDeleteCase={handleDeleteCase}
                                uploadModal={uploadModal}
                                deleteModal={deleteModal}
                                isOpen={isOpen}
                                onClose={onClose}
                                onDelete={onDelete}
                                downloadCaseFile={downloadCaseFile}
                            />
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
