export type Case = {
  id: number;
  caseNumber: string;
  assignedUser?: {};
  dateOpened: string; // ISO datetime format
  dateClose?: string; // ISO datetime format
  caseType: {};
  status: string;
  summary: string;
  complainant: {};
  respondent: string;
  investigator: string;
  addtionalData?: {};
};

export type CaseList = Case[];

export interface Error {
  errorMessage: string;
}

export const GET_CASES_REQUEST = "@todo/GET_CASES_REQUEST";

interface GetCasesList {
  data(data: CaseList): CaseList;
  status: string;
  type: typeof GET_CASES_REQUEST;
  payload: { case: CaseList };
}

export type CaseListActionTypes = GetCasesList;
