import ACTIONS, { FETCH_STATUS } from '../caseManagement.constants';
import { CaseEntryJournal } from '../../store/modules/caseEntries/types';

export const getCaseEntriesList = {
    pending: {
        type: ACTIONS.GET_CASE_ENTRIES_LIST.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: any) => ({
        type: ACTIONS.GET_CASE_ENTRIES_LIST.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.GET_CASE_ENTRIES_LIST.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const editCaseEntry = {
    pending: {
        type: ACTIONS.EDIT_CASE_JOURNAL_ENTRY.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: CaseEntryJournal, caseEntry: CaseEntryJournal) => ({
        type: ACTIONS.EDIT_CASE_JOURNAL_ENTRY.SUCCESS,
        data,
        caseEntry,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.EDIT_CASE_JOURNAL_ENTRY.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const addCaseEntry = {
    pending: {
        type: ACTIONS.ADD_CASE_JOURNAL_ENTRY.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: boolean) => ({
        type: ACTIONS.ADD_CASE_JOURNAL_ENTRY.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.ADD_CASE_JOURNAL_ENTRY.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const deleteCaseEntry = {
    pending: {
        type: ACTIONS.DELETE_CASE_JOURNAL_ENTRY.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (id: string) => ({
        type: ACTIONS.DELETE_CASE_JOURNAL_ENTRY.SUCCESS,
        id,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.DELETE_CASE_JOURNAL_ENTRY.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const getCaseEntriesBegin = (id: string) => {
    return {
        type: ACTIONS.GET_CASE_ENTRIES_LIST_BEGIN,
        id,
    };
};
export const getCaseEntriesById = (id: string) => {
    return {
        type: ACTIONS.GET_CASE_ENTRIES_BY_ID,
        id,
    };
};

export const editCaseJournalEntryBegin = (caseEntry: CaseEntryJournal) => {
    return {
        type: ACTIONS.EDIT_CASE_JOURNAL_ENTRY_BEGIN,
        caseEntry,
    };
};
export const addCaseJournalEntryBegin = (caseEntry: CaseEntryJournal) => {
    return {
        type: ACTIONS.ADD_CASE_JOURNAL_ENTRY_BEGIN,
        caseEntry,
    };
};

export const deleteCaseEntryRecordBegin = (id: string) => {
    return {
        type: ACTIONS.DELETE_CASE_JOURNAL_ENTRY_BEGIN,
        id,
    };
};
