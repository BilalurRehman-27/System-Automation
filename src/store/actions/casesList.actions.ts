import ACTIONS, { FETCH_STATUS } from "../caseManagement.constants";
import { CaseList } from "../modules/casesList/types";

export const getCasesList = {
  pending: {
    type: ACTIONS.GET_CASES_LIST.PENDING,
    status: FETCH_STATUS.LOADING,
  },
  success: (data: CaseList) => ({
    type: ACTIONS.GET_CASES_LIST.SUCCESS,
    data,
    status: FETCH_STATUS.SUCCESS,
  }),
  error: (error: Error) => ({
    type: ACTIONS.GET_CASES_LIST.ERROR,
    error,
    status: FETCH_STATUS.ERROR,
  }),
};

export const getCasesListBegin = () => {
  return {
    type: ACTIONS.GET_CASES_LIST_BEGIN,
  };
};
