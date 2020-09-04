import { List } from "immutable";
import createSelector from "../../utils/reselect";

export const getCases = (state: any) => {
  const { cases } = state;
  return cases || List();
};

export const getCasesList = createSelector(getCases, (listItems) => {
  return listItems.get("caseResults") || List();
});

export const getCasesLoadingStatus = createSelector(getCases, (listItems) => {
  return listItems.getIn(["caseResults", "loading"]);
});
