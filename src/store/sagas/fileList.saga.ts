import { all, call, put, takeEvery } from "redux-saga/effects";
import ACTIONS from "../caseManagement.constants";
import { fileListActions } from "../actions";
import { fileListData } from "../../assets/mock/DummyData";
const delay = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));
function* getCaseList() {
    try {
        yield put(fileListActions.getFileList.pending);
        yield call(delay, 2000);
        const response = fileListData;
        yield put(fileListActions.getFileList.success(response));
    } catch (error) {
        yield put(fileListActions.getFileList.error(error));
    }
}
export default function* rootSaga() {
    yield all([takeEvery(ACTIONS.GET_FILE_LIST_BEGIN, getCaseList)]);
}
