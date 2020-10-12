import { List } from 'immutable';
import createSelector from '../../utils/reselect';

export const getCases = (state: any) => {
    const { cases } = state;
    return cases || List();
};
export const getCasesEntriesList = createSelector(getCases, (cases) => {
    //sorting the list
    cases.getIn(['caseEntriesResults', 'data']) &&
        cases.getIn(['caseEntriesResults', 'data']).sort((a: any, b: any) => {
            const date1 = new Date(b.date).valueOf();
            const date2 = new Date(a.date).valueOf();
            return date1 - date2;
        });

    return cases.getIn(['caseEntriesResults', 'data']) || List();
});

export const getCasesEntriesLoadingStatus = createSelector(getCases, (cases) => {
    return cases.getIn(['caseEntriesResults', 'loading']);
});

export const getSelectedCaseEntryId = createSelector(getCases, (cases) => {
    return cases.getIn(['caseEntriesResults', 'selectedCaseEntryId']);
});

export const getCaseEntryById = createSelector(
    getCasesEntriesList,
    getSelectedCaseEntryId,
    (cases, selectedCaseEntryJournalId) => {
        const caseEntry = cases.filter((item: { id: string; name: string }) => item.id === selectedCaseEntryJournalId);
        return caseEntry[0];
    },
);
