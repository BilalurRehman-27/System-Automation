import { List } from 'immutable';
import createSelector from '../../utils/reselect';

export const getFiles = (state: any) => {
    const { cases } = state;
    return cases || List();
};

export const getFilesList = createSelector(getFiles, (listItems) => {
    return listItems.getIn(['caseFileResults', 'data']) || List();
});

export const getFileListLoadingStatus = createSelector(getFiles, (listItems) => {
    return listItems.getIn(['caseFileResults', 'loading']);
});
export const getDownloadedFile = createSelector(getFiles, (listItems) => {
    return listItems.get('fileResponse') || null;
});
