import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import ACTIONS from '../caseManagement.constants';
import { caseEntriesActions } from '../actions';
import api from '../service/service';
import { CaseEntryJournal } from '../modules/caseEntries/types';
import { getSelectedCaseID } from '../selectors/caseList.selectors';
import { getCaseEntryById } from '../selectors/caseEntries.selectors';

type Params = { id: string; type: string };
function* getCaseJournalEntryList({ id }: Params) {
    try {
        yield put(caseEntriesActions.getCaseEntriesList.pending);
        const response = yield call(api.getCaseJournalEntryList, id);
        yield put(caseEntriesActions.getCaseEntriesList.success(response));
    } catch (error) {
        yield put(caseEntriesActions.getCaseEntriesList.error(error));
    }
}

function* addCaseJournalEntry(payload: { type: string; caseEntry: CaseEntryJournal }) {
    const { caseEntry } = payload;
    const selectedCaseId = yield select(getSelectedCaseID);
    try {
        yield put(caseEntriesActions.addCaseEntry.pending);
        const response = yield call(api.addCaseEntry, caseEntry, selectedCaseId);
        yield put(caseEntriesActions.addCaseEntry.success(response));
    } catch (error) {
        yield put(caseEntriesActions.addCaseEntry.error(error));
    }
}

function* editCaseJournalEntry(payload: { type: string; caseEntry: CaseEntryJournal }) {
    const { caseEntry } = payload;
    const selectedCaseId = yield select(getSelectedCaseID);
    const selectedCaseEntry = yield select(getCaseEntryById);
    try {
        yield put(caseEntriesActions.editCaseEntry.pending);
        yield call(api.editCaseEntry, caseEntry, selectedCaseId, selectedCaseEntry.id);
        yield put(caseEntriesActions.editCaseEntry.success(selectedCaseEntry, caseEntry));
    } catch (error) {
        yield put(caseEntriesActions.editCaseEntry.error(error));
    }
}

function* deleteCaseJournalEntry({ id }: Params) {
    try {
        const selectedCaseId = yield select(getSelectedCaseID);
        yield put(caseEntriesActions.deleteCaseEntry.pending);
        yield call(api.deleteCaseEntry, selectedCaseId, id);
        yield put(caseEntriesActions.deleteCaseEntry.success(id));
    } catch (error) {
        yield put(caseEntriesActions.deleteCaseEntry.error(error));
    }
}
export default function* rootSaga() {
    yield all([
        takeEvery(ACTIONS.GET_CASE_ENTRIES_LIST_BEGIN, getCaseJournalEntryList),
        takeEvery(ACTIONS.EDIT_CASE_JOURNAL_ENTRY_BEGIN, editCaseJournalEntry),
        takeEvery(ACTIONS.ADD_CASE_JOURNAL_ENTRY_BEGIN, addCaseJournalEntry),
        takeEvery(ACTIONS.DELETE_CASE_JOURNAL_ENTRY_BEGIN, deleteCaseJournalEntry),
    ]);
}
