import { fromJS } from "immutable";
import ACTIONS from "../caseManagement.constants";
import { FileList, FileListActionTypes } from "../modules/fileList/types";

export default function fileListReducer(state = fromJS({ caseFileResults: {} }), action: FileListActionTypes):
    FileList {
    switch (action.type) {
        case ACTIONS.GET_FILE_LIST.PENDING: {
            return state.setIn(
                ["caseFileResults", "loading"],
                action.status === "LOADING" ? true : false
            );
        }
        case ACTIONS.GET_FILE_LIST.SUCCESS: {
            return state
                .setIn(["caseFileResults", "loading"], false)
                .setIn(["caseFileResults", "data"], action.data);
        }
        default: {
            return state;
        }
    }
}
