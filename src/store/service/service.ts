import axios from 'axios';
import { CaseEntryJournal } from '../modules/caseEntries/types';
import { CaseData, Complainant, Respondent, Incident } from '../modules/casesList/types';
import { CASE_TYPES } from '../caseManagement.constants';

//TODO: TBD
export const BASE_URL = `${window.location.origin}/api`;
//'https://vedas.test.mylicenseone.com/api';

export const api = {
    getCaseList(payload: { order: string[]; where: {} }) {
        const FILTER_OPTION = `?filter={"order":[${payload.order}],"where":${payload.where}}`;
        return axios.get(`${BASE_URL}/cases${FILTER_OPTION}`).then((response) => response.data);
    },

    getCaseJournalEntryList: (id: string) => {
        return axios.get(`${BASE_URL}/cases/${id}/activities`).then((response) => {
            return response.data;
        });
    },

    editCaseEntry: (caseEntry: CaseEntryJournal, caseId: string, caseEntryId: string) => {
        return axios.patch(`${BASE_URL}/cases/${caseId}/activities/${caseEntryId}`, caseEntry).then((response) => {
            return response.data;
        });
    },
    addCaseEntry: (caseEntry: CaseEntryJournal, caseId: string) => {
        return axios.post(`${BASE_URL}/cases/${caseId}/activities`, caseEntry).then((response) => {
            return response.data;
        });
    },
    deleteCaseEntry: (caseId: string, caseEntryId: string) => {
        return axios.delete(`${BASE_URL}/cases/${caseId}/activities/${caseEntryId}`).then((response) => {
            return response.data;
        });
    },
    deleteCaseFile: (caseId: string, caseDeleteId: string) => {
        const encodeURI = encodeURIComponent(encodeURIComponent(caseDeleteId));
        return axios.delete(`${BASE_URL}/cases/${caseId}/attachments/${encodeURI}`).then((response) => {
            return response.data;
        });
    },
    downloadCaseFile: (caseId: string, attachmentId: string, fileName: string) => {
        const encodeURI = encodeURIComponent(encodeURIComponent(attachmentId));
        return axios.get(`${BASE_URL}/cases/${caseId}/attachments/${encodeURI}/token`).then((response) => {
            const link = document.createElement('a');
            link.href = `${BASE_URL}/files/${encodeURI}/?token=${response.data.token}`;
            link.download = fileName;
            link.target = '_blank';
            link.click();
        });
    },
    uploadCaseFile: (data: FormData, caseID: string, options: any) => {
        return axios.post(`${BASE_URL}/cases/${caseID}/attachments`, data, options);
    },
    getAuditHistory(caseId: string) {
        const AUDIT_HISTORY_PARAMS = `${caseId}/history`;
        return axios.get(`${BASE_URL}/cases/${AUDIT_HISTORY_PARAMS}`);
    },

    getCaseDetails(caseId: string) {
        return axios.get(`${BASE_URL}/cases/${caseId}`).then((response) => response.data);
    },
    getFileList(id: string) {
        const FILE_LIST_PARAMS = `${id}/attachments`;
        return axios.get(`${BASE_URL}/cases/${FILE_LIST_PARAMS}`).then((response) => response.data);
    },

    updateCaseStatus(caseState: string, selectedCaseId: string) {
        const caseStatusWithClosedStatus = {
            status: caseState,
            dateClosed: new Date().toISOString(),
        };
        const caseStatusWithoutClosedStatus = {
            status: caseState,
        };

        return axios
            .patch(
                `${BASE_URL}/cases/${selectedCaseId}`,
                caseState === CASE_TYPES.CLOSED ? caseStatusWithClosedStatus : caseStatusWithoutClosedStatus,
            )
            .then((response) => response.data);
    },
    addCaseDataEntry(selectedCaseId: string, caseDataEntry: CaseData) {
        return axios.patch(`${BASE_URL}/cases/${selectedCaseId}`, caseDataEntry).then((response) => response.data);
    },
    editCaseDataRespondent(selectedCaseId: string, caseDataRespondent: Respondent) {
        return axios
            .patch(`${BASE_URL}/cases/${selectedCaseId}`, { respondent: caseDataRespondent })
            .then((response) => response.data);
    },
    editCaseDataComplainant(selectedCaseId: string, caseDataComplainant: Complainant) {
        return axios
            .patch(`${BASE_URL}/cases/${selectedCaseId}`, { complainant: caseDataComplainant })
            .then((response) => response.data);
    },
    editCaseDataIncident(selectedCaseId: string, caseDataIncident: Incident, caseType: string) {
        return axios
            .patch(`${BASE_URL}/cases/${selectedCaseId}`, { additionalData: caseDataIncident, caseType })
            .then((response) => response.data);
    },
};
export default api;
