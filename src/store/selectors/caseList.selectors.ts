import { List } from 'immutable';
import createSelector from '../../utils/reselect';
import { Case } from '../modules/casesList/types';

export const getCases = (state: any) => {
    const { cases } = state;
    return cases || List();
};
export const getCasesList = createSelector(getCases, (caseItems) => {
    return caseItems.getIn(['caseResults', 'data']) || List();
});

export const getCasesLoadingStatus = createSelector(getCases, (caseItems) => {
    return caseItems.getIn(['caseResults', 'loading']);
});

export const getSelectedCaseID = createSelector(getCases, (caseItems) => {
    return caseItems.get('selectedCaseId');
});

export const getCaseDetails = createSelector(getCases, (caseDetails) => {
    return caseDetails.getIn(['caseDetails', 'data']) || List();
});

export const getCaseDetailsLoadingStatus = createSelector(getCases, (caseDetails) => {
    return caseDetails.getIn(['caseDetails', 'loading']);
});

export const getSelectedCaseDetails = (caseId: string) =>
    createSelector(getCasesList, (listItems) => {
        const selectedCaseDetails = listItems.filter((data: Case) => data.id === caseId);
        return selectedCaseDetails[0];
    });

export const getCaseCurrentStatus = createSelector(getCases, (caseDetails) => {
    return caseDetails.getIn(['caseDetails', 'data', 'status']);
});
