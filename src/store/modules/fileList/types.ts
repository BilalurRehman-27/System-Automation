export type File = {
    id: number;
    name: string,
    dateUploaded: string,
    size: string,
    type: string
};
export type FileList = File[];
export interface Error {
    errorMessage: string;
}
export const GET_CASES_REQUEST = "@todo/GET_CASES_REQUEST";
interface GetFileList {
    data(data: FileList): FileList;
    status: string;
    type: typeof GET_CASES_REQUEST;
    payload: { file: FileList };
}
export type FileListActionTypes = GetFileList;
