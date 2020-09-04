import { fromJS } from "immutable";
import ACTIONS from "../caseManagement.constants";
import { CaseList, CaseListActionTypes } from "../modules/casesList/types";

export default function caseListReducer(
  state = fromJS({ caseResults: {} }),
  action: CaseListActionTypes
): CaseList {
  switch (action.type) {
    case ACTIONS.GET_CASES_LIST.PENDING: {
      return state.setIn(
        ["caseResults", "loading"],
        action.status === "LOADING" ? true : false
      );
    }
    case ACTIONS.GET_CASES_LIST.SUCCESS: {
      return state
        .setIn(["caseResults", "loading"], false)
        .setIn(["caseResults", "data"], action.data);
    }
    default: {
      return state;
    }
  }
}
