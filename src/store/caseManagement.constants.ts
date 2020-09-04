import { asyncActionType } from "../utils/reduxActions";

export const FILTER_ACTIONS = {
  GET_CASES_LIST: asyncActionType("[CASE_MANAGEMENT]GET_CASES_LIST"),
  GET_CASES_LIST_BEGIN: "[CASE_MANAGEMENT]GET_CASE_LIST_BEGIN",
};

// Status types
export const FETCH_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export default {
  ...FILTER_ACTIONS,
};
