/* Audit History interface declaration */
export interface AuditHistoryType {
    id: string;
    date: string; // ISO datetime format
    type: string;
    user: { id: string; name: string };
    details: {
        id?: string;
        newValue?: {
            status?: string;
            reportDate?: string;
            caseType?: string;
            respondent?: any;
            dateClosed?: string;
            complainant?: any;
            description?: string;
            assignedUser?: any;
        };
        date?: string;
        description?: string;
        type?: string;
    };
}

export interface Error {
    errorMessage: string;
}
