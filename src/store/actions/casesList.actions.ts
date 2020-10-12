import ACTIONS, { FETCH_STATUS } from '../caseManagement.constants';
import { CaseList, Case } from '../modules/casesList/types';

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

export const getCaseDetails = {
    pending: {
        type: ACTIONS.GET_CASE_DETAILS.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: Case) => ({
        type: ACTIONS.GET_CASE_DETAILS.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.GET_CASE_DETAILS.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const updateCaseStatus = {
    pending: {
        type: ACTIONS.UPDATE_CASE_STATUS.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: string) => ({
        type: ACTIONS.UPDATE_CASE_STATUS.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.UPDATE_CASE_STATUS.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const getCasesListBegin = (state: { order: string[]; where: {} }) => {
    return {
        type: ACTIONS.GET_CASES_LIST_BEGIN,
        payload: state,
    };
};

export const getCasesDetailsBegin = (id: string) => {
    return { type: ACTIONS.GET_CASE_DETAILS_BEGIN, payload: id };
};

export const updateCaseStatusBegin = (data: { caseStatus: string; caseID: string }) => {
    return { type: ACTIONS.UPDATE_CASE_STATUS_BEGIN, payload: data };
};

export const setSelectedCaseId = (id: string) => {
    return { type: ACTIONS.SET_SELECTED_CASE_ID, payload: id };
};
