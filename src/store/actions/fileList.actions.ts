import ACTIONS, { FETCH_STATUS } from "../caseManagement.constants";
import { FileList } from "../modules/fileList/types";

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
export const getFileListBegin = () => {
    return {
        type: ACTIONS.GET_FILE_LIST_BEGIN,
    };
};
