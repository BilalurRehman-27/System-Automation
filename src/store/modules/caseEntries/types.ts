export type CaseJournalEntry = {
    modalTitle: string;
    modalBody: string;
    fullWidth: boolean;
    maxWidth: string;
    selectValues: [];
};

export type CaseEntryJournal = { id: string; date: Date; type: string; description: string };

export type CaseJournalEntryList = CaseJournalEntry[];

export interface Error {
    errorMessage: string;
}

export const GET_CASES_REQUEST = '@todo/GET_CASES_JOURNAL_ENTRY_REQUEST';

interface GetCaseJournalEntryList {
    data(data: CaseJournalEntryList): CaseJournalEntryList;
    status: string;
    type: typeof GET_CASES_REQUEST;
    payload: { caseJournalList: CaseJournalEntryList };
}

export type CaseJournalEntryActionTypes = GetCaseJournalEntryList;
