import ACTIONS, { FETCH_STATUS } from '../caseManagement.constants';
import { FileList } from '../modules/fileList/types';

export const getFileList = {
    pending: {
        type: ACTIONS.GET_FILE_LIST.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (data: FileList) => ({
        type: ACTIONS.GET_FILE_LIST.SUCCESS,
        data,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.GET_FILE_LIST.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};
export const deleteFileEntry = {
    pending: {
        type: ACTIONS.DELETE_CASE_FILE.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (id: string) => ({
        type: ACTIONS.DELETE_CASE_FILE.SUCCESS,
        id,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.DELETE_CASE_FILE.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};
export const downloadCaseFile = {
    pending: {
        type: ACTIONS.DOWNLOAD_CASE_FILE.PENDING,
        status: FETCH_STATUS.LOADING,
    },
    success: (id: string) => ({
        type: ACTIONS.DOWNLOAD_CASE_FILE.SUCCESS,
        data: id,
        status: FETCH_STATUS.SUCCESS,
    }),
    error: (error: Error) => ({
        type: ACTIONS.DOWNLOAD_CASE_FILE.ERROR,
        error,
        status: FETCH_STATUS.ERROR,
    }),
};

export const getFileListBegin = (state: string) => {
    return {
        type: ACTIONS.GET_FILE_LIST_BEGIN,
        payload: state,
    };
};
export const deleteCaseFileRecordBegin = (id: string) => {
    return {
        type: ACTIONS.DELETE_CASE_FILE_BEGIN,
        id,
    };
};
export const downloadCaseFileBegin = (id: string, name: string) => {
    return {
        type: ACTIONS.DOWNLOAD_CASE_FILE_BEGIN,
        id,
        name,
    };
};
