import {List} from "immutable";
import createSelector from "../../utils/reselect";
export const getFiles = (state: any) => {
    const {caseFiles} = state;
    return caseFiles || List();
};

export const getFilesList = createSelector(getFiles, (listItems) => {
    return listItems.getIn(["caseFileResults", "data"]) || List();
});

export const getFileListLoadingStatus = createSelector(getFiles, (listItems) => {
    return listItems.getIn(["caseFileResults", "loading"]);
});
