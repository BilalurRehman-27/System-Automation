import ACTIONS, { FETCH_STATUS } from '../caseManagement.constants';
import { CaseData, Complainant, Respondent, Incident } from '../modules/casesList/types';

export const editCaseData = {
    pending: {
        type: ACTIONS.EDIT_CASE_DATA_ENTRY.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: CaseData) => ({
        type: ACTIONS.EDIT_CASE_DATA_ENTRY.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.EDIT_CASE_DATA_ENTRY.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const editCaseDataRespondent = {
    pending: {
        type: ACTIONS.EDIT_CASE_DATA_RESPONDENT.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: Respondent) => ({
        type: ACTIONS.EDIT_CASE_DATA_RESPONDENT.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.EDIT_CASE_DATA_RESPONDENT.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};
export const editCaseDataComplainant = {
    pending: {
        type: ACTIONS.EDIT_CASE_DATA_COMPLAINANT.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: Complainant) => ({
        type: ACTIONS.EDIT_CASE_DATA_COMPLAINANT.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.EDIT_CASE_DATA_COMPLAINANT.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};
export const editCaseDataIncident = {
    pending: {
        type: ACTIONS.EDIT_CASE_DATA_INCIDENT.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: Incident, caseType: string) => ({
        type: ACTIONS.EDIT_CASE_DATA_INCIDENT.SUCCESS,
        data,
        caseType,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.EDIT_CASE_DATA_INCIDENT.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const editCaseEntryDataBegin = (caseData: CaseData) => {
    return {
        type: ACTIONS.EDIT_CASE_DATA_ENTRY_BEGIN,
        payload: caseData,
    };
};

export const editCaseDataRespondentBegin = (respondentData: Respondent) => {
    return {
        type: ACTIONS.EDIT_CASE_DATA_RESPONDENT_BEGIN,
        payload: respondentData,
    };
};

export const editCaseDataComplainantBegin = (complainantData: Complainant) => {
    return {
        type: ACTIONS.EDIT_CASE_DATA_COMPLAINANT_BEGIN,
        payload: complainantData,
    };
};

export const editCaseDataIncidentBegin = (incidentData: Incident, caseType: string) => {
    return {
        type: ACTIONS.EDIT_CASE_DATA_INCIDENT_BEGIN,
        payload: { incidentData, caseType },
    };
};
