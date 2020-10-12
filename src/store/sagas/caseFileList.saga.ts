import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../caseManagement.constants';
import { fileListActions } from '../actions';
import api from '../service/service';
import { getSelectedCaseID } from '../selectors/caseList.selectors';

function* getCaseList(state: { type: string; payload: string }) {
    try {
        yield put(fileListActions.getFileList.pending);
        const fileList = yield call(api.getFileList, state.payload);
        yield put(fileListActions.getFileList.success(fileList));
    } catch (error) {
        yield put(fileListActions.getFileList.error(error));
    }
}

type Params = { id: string; type: string };

function* deleteCaseFile({ id }: Params) {
    try {
        const selectedCaseId = yield select(getSelectedCaseID);
        yield put(fileListActions.deleteFileEntry.pending);
        yield call(api.deleteCaseFile, selectedCaseId, id);
        yield put(fileListActions.deleteFileEntry.success(id));
    } catch (error) {
        yield put(fileListActions.deleteFileEntry.error(error));
    }
}

type fileParams = { id: string; name: string; type: string };

function* downloadCaseFile({ id, name }: fileParams) {
    try {
        const selectedCaseId = yield select(getSelectedCaseID);
        yield put(fileListActions.downloadCaseFile.pending);
        const downloadCaseFile = yield call(api.downloadCaseFile, selectedCaseId, id, name);
        yield put(fileListActions.downloadCaseFile.success(downloadCaseFile));
    } catch (error) {
        yield put(fileListActions.downloadCaseFile.error(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(ACTIONS.GET_FILE_LIST_BEGIN, getCaseList),
        takeEvery(ACTIONS.DELETE_CASE_FILE_BEGIN, deleteCaseFile),
        takeEvery(ACTIONS.DOWNLOAD_CASE_FILE_BEGIN, downloadCaseFile),
    ]);
}
