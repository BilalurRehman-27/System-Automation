import { fromJS } from 'immutable';
import ACTIONS, { CASE_TYPES } from '../caseManagement.constants';
import { CaseEntryJournal } from '../modules/caseEntries/types';
import { File } from '../modules/fileList/types';

export default function caseListReducer(
    state = fromJS({
        caseResults: {},
        caseFileResults: {},
        caseEntriesResults: {},
        caseDetails: {},
    }),
    action: any,
) {
    switch (action.type) {
        case ACTIONS.GET_CASES_LIST.PENDING: {
            return state.setIn(['caseResults', 'loading'], action.status === 'LOADING' ? true : false);
        }
        case ACTIONS.GET_CASES_LIST.SUCCESS: {
            return state.setIn(['caseResults', 'loading'], false).setIn(['caseResults', 'data'], action.data);
        }
        case ACTIONS.GET_CASES_LIST.ERROR: {
            return state.setIn(['caseResults', 'loading'], false);
        }
        case ACTIONS.GET_FILE_LIST.PENDING: {
            return state.setIn(['caseFileResults', 'loading'], action.status === 'LOADING' ? true : false);
        }
        case ACTIONS.GET_FILE_LIST.SUCCESS: {
            return state.setIn(['caseFileResults', 'loading'], false).setIn(['caseFileResults', 'data'], action.data);
        }
        case ACTIONS.GET_CASE_ENTRIES_LIST.PENDING: {
            return state.setIn(['caseEntriesResults', 'loading'], action.status === 'LOADING' ? true : false);
        }
        case ACTIONS.GET_CASE_ENTRIES_LIST.SUCCESS: {
            return state
                .setIn(['caseEntriesResults', 'loading'], false)
                .setIn(['caseEntriesResults', 'data'], action.data);
        }
        case ACTIONS.SET_SELECTED_CASE_ID: {
            return state.set('selectedCaseId', action.payload);
        }
        case ACTIONS.GET_CASE_ENTRIES_BY_ID: {
            return state.setIn(['caseEntriesResults', 'selectedCaseEntryId'], action.id);
        }
        case ACTIONS.EDIT_CASE_JOURNAL_ENTRY.PENDING: {
            return state.setIn(['caseEntriesResults', 'loading'], true);
        }
        case ACTIONS.EDIT_CASE_JOURNAL_ENTRY.SUCCESS: {
            const caseEntries = state
                .getIn(['caseEntriesResults', 'data'])
                .filter((item: CaseEntryJournal) => item.id !== action.data.id);
            const updateEntry = {
                id: action.data.id,
                ...action.caseEntry,
            };
            caseEntries.push(updateEntry);
            return state
                .setIn(['caseEntriesResults', 'loading'], false)
                .setIn(['caseEntriesResults', 'data'], caseEntries);
        }
        case ACTIONS.ADD_CASE_JOURNAL_ENTRY.PENDING: {
            return state.setIn(['caseEntriesResults', 'loading'], true);
        }
        case ACTIONS.ADD_CASE_JOURNAL_ENTRY.SUCCESS: {
            const caseEntry = action.data;
            return state
                .setIn(['caseEntriesResults', 'loading'], false)
                .updateIn(['caseEntriesResults', 'data'], (v: any): void => v.concat(caseEntry));
        }
        case ACTIONS.DELETE_CASE_JOURNAL_ENTRY.PENDING: {
            return state.setIn(['caseEntriesResults', 'loading'], true);
        }
        case ACTIONS.DELETE_CASE_JOURNAL_ENTRY.SUCCESS: {
            const caseEntries = state.getIn(['caseEntriesResults', 'data']);
            const filteredCaseList = caseEntries.filter((item: CaseEntryJournal) => item.id !== action.id);
            return state
                .setIn(['caseEntriesResults', 'loading'], false)
                .setIn(['caseEntriesResults', 'data'], filteredCaseList);
        }
        case ACTIONS.GET_CASE_DETAILS.PENDING: {
            return state.setIn(['caseDetails', 'loading'], action.status === 'LOADING' ? true : false);
        }
        case ACTIONS.GET_CASE_DETAILS.SUCCESS: {
            return state.setIn(['caseDetails', 'loading'], false).setIn(['caseDetails', 'data'], action.data);
        }
        case ACTIONS.GET_CASE_DETAILS.ERROR: {
            return state.setIn(['caseDetails', 'loading'], false);
        }
        case ACTIONS.DELETE_CASE_FILE.PENDING: {
            return state.setIn(['caseFileResults', 'loading'], true);
        }
        case ACTIONS.DELETE_CASE_FILE.ERROR: {
            return state.setIn(['caseFileResults', 'loading'], false);
        }
        case ACTIONS.DELETE_CASE_FILE.SUCCESS: {
            const caseFile = state.getIn(['caseFileResults', 'data']);
            const filteredCaseFile = caseFile.filter((item: File) => item.id !== action.id);
            return state
                .setIn(['caseFileResults', 'loading'], false)
                .setIn(['caseFileResults', 'data'], filteredCaseFile);
        }
        case ACTIONS.UPDATE_CASE_STATUS.PENDING: {
            return state.setIn(['caseDetails', 'loading'], action.status === 'LOADING' ? true : false);
        }
        case ACTIONS.UPDATE_CASE_STATUS.SUCCESS: {
            return state
                .setIn(['caseDetails', 'loading'], false)
                .setIn(['caseDetails', 'data', 'status'], action.data)
                .setIn(
                    ['caseDetails', 'data', 'dateClosed'],
                    action.data === CASE_TYPES.CLOSED ? new Date().toISOString() : null,
                );
        }
        case ACTIONS.UPDATE_CASE_STATUS.ERROR: {
            return state.setIn(['caseDetails', 'loading'], false);
        }
        case ACTIONS.EDIT_CASE_DATA_ENTRY.PENDING: {
            return state.setIn(['caseDetails', 'loading'], true);
        }
        case ACTIONS.EDIT_CASE_DATA_ENTRY.SUCCESS: {
            const { data } = action;
            return state
                .setIn(['caseDetails', 'loading'], false)
                .setIn(['caseDetails', 'data', 'assignedUser'], data.assignedUser)
                .setIn(['caseDetails', 'data', 'status'], data.status)
                .setIn(['caseDetails', 'data', 'description'], data.description)
                .setIn(['caseDetails', 'data', 'reportDate'], data.reportDate);
        }
        case ACTIONS.EDIT_CASE_DATA_ENTRY.ERROR: {
            return state.setIn(['caseDetails', 'loading'], false);
        }
        case ACTIONS.EDIT_CASE_DATA_RESPONDENT.PENDING: {
            return state.setIn(['caseDetails', 'loading'], true);
        }
        case ACTIONS.EDIT_CASE_DATA_RESPONDENT.SUCCESS: {
            const { data } = action;
            return state.setIn(['caseDetails', 'loading'], false).setIn(['caseDetails', 'data', 'respondent'], data);
        }
        case ACTIONS.EDIT_CASE_DATA_RESPONDENT.ERROR: {
            return state.setIn(['caseDetails', 'loading'], false);
        }
        case ACTIONS.EDIT_CASE_DATA_COMPLAINANT.PENDING: {
            return state.setIn(['caseDetails', 'loading'], true);
        }
        case ACTIONS.EDIT_CASE_DATA_COMPLAINANT.SUCCESS: {
            const { data } = action;
            return state.setIn(['caseDetails', 'loading'], false).setIn(['caseDetails', 'data', 'complainant'], data);
        }
        case ACTIONS.EDIT_CASE_DATA_COMPLAINANT.ERROR: {
            return state.setIn(['caseDetails', 'loading'], false);
        }
        case ACTIONS.EDIT_CASE_DATA_INCIDENT.PENDING: {
            return state.setIn(['caseDetails', 'loading'], true);
        }
        case ACTIONS.EDIT_CASE_DATA_INCIDENT.SUCCESS: {
            const { data, caseType } = action;
            return state
                .setIn(['caseDetails', 'loading'], false)
                .setIn(['caseDetails', 'data', 'additionalData'], data)
                .setIn(['caseDetails', 'data', 'caseType'], caseType);
        }
        case ACTIONS.EDIT_CASE_DATA_INCIDENT.ERROR: {
            return state.setIn(['caseDetails', 'loading'], false);
        }
        case ACTIONS.DOWNLOAD_CASE_FILE.PENDING: {
            return state.setIn(['caseFileResults', 'loading'], true);
        }
        case ACTIONS.DOWNLOAD_CASE_FILE.SUCCESS: {
            return state.setIn(['caseFileResults', 'loading'], false);
        }
        case ACTIONS.DOWNLOAD_CASE_FILE.ERROR: {
            return state.setIn(['caseFileResults', 'loading'], false);
        }
        default: {
            return state;
        }
    }
}
