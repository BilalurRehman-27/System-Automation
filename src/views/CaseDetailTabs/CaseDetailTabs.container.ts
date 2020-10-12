import { connect } from 'react-redux';
import CaseDetailTabs from './CaseDetailTabs';
import {
    getCaseEntriesById,
    getCaseEntriesBegin,
    editCaseJournalEntryBegin,
    addCaseJournalEntryBegin,
    deleteCaseEntryRecordBegin,
} from '../../store/actions/caseEntries.actions';
import { setSelectedCaseId, getCasesDetailsBegin, updateCaseStatusBegin } from '../../store/actions/casesList.actions';
import { getCasesEntriesList, getCaseEntryById } from '../../store/selectors/caseEntries.selectors';
import { getCaseDetails, getCaseDetailsLoadingStatus } from '../../store/selectors/caseList.selectors';
import {
    getFileListBegin,
    deleteCaseFileRecordBegin,
    downloadCaseFileBegin,
} from '../../store/actions/caseFileList.actions';
import { CaseJournalEntryList } from '../../store/modules/caseEntries/types';

const mapStateToProps = (state: CaseJournalEntryList, props: { match: { params: { id: any } } }) => {
    const caseId = props.match.params.id;
    const selectedCaseEntryJournal = getCaseEntryById(state);
    const selectedCaseId = caseId;
    const data = getCasesEntriesList(state);
    const selectedCaseData = getCaseDetails(state);
    const isLoading = getCaseDetailsLoadingStatus(state);
    return { data, selectedCaseData, selectedCaseEntryJournal, selectedCaseId, isLoading };
};
const mapDispatchToProps = {
    getCaseEntries: getCaseEntriesBegin,
    getFileList: getFileListBegin,
    getCaseEntriesById: getCaseEntriesById,
    editCaseJournalEntryBegin,
    addCaseJournalEntryBegin,
    deleteCaseEntryRecordBegin,
    setSelectedCaseId,
    getCasesDetailsBegin,
    deleteCaseFileRecordBegin,
    downloadCaseFileBegin,
    updateCaseStatusBegin,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseDetailTabs);
