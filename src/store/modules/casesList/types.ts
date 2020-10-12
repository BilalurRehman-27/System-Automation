export type Case = {
    id: string;
    caseNumber: string;
    assignedUser: AssignedUser;
    dateOpened: string; // ISO datetime format
    dateClosed?: string; // ISO datetime format
    caseType: string;
    status: string;
    summary: string;
    complainant: Complainant;
    respondent: Respondent;
    investigator: string;
    additionalData?: Incident;
    description?: string;
    reportDate: string;
};
export type AssignedUser = {
    id: string;
    name: string;
};
export type CaseData = {
    caseNumber: string;
    investigator: AssignedUser;
    status: string;
    narrative: string;
    reportDate: string;
};

export type Complainant = {
    address: Address;
    email: string;
    id: number;
    name: string;
    phone: string;
    title: string;
};
export type Incident = {
    lossDate: string;
    lossLocation: string;
    drugs: Drugs[];
};

export type Drugs = {
    id: string;
    drug: string;
    quantity: number;
    strength: string;
    dosageForm: string;
};
export type Respondent = {
    id: number;
    name: string;
    type: string;
    address: Address;
};

export type Address = {
    line1: string;
    city: string;
    state: string;
    zipcode: string;
};
export type CaseList = Case[];

export type getCaseList = {
    id: number;
    caseNumber: string;
    caseType: {};
    dateOpened: string;
    status: string;
    facilityName: string;
    facilityAddress: string;
    investigator: string;
    summary: string;
}[];

export interface Error {
    errorMessage: string;
}

export const GET_CASES_REQUEST = '@todo/GET_CASES_REQUEST';

interface GetCasesList {
    data(data: CaseList): CaseList;
    status: string;
    type: typeof GET_CASES_REQUEST;
    payload: { case: CaseList };
}

export type CaseListActionTypes = GetCasesList;
