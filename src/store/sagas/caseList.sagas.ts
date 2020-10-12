import { all, call, put, takeEvery } from 'redux-saga/effects';
import ACTIONS from '../caseManagement.constants';
import { caseListActions } from '../actions';
import api from '../service/service';

function* getCaseList(state: { type: string; payload: { order: string[]; where: {} } }) {
    try {
        yield put(caseListActions.getCasesList.pending);
        const caseList = yield call(api.getCaseList, state.payload);
        yield put(caseListActions.getCasesList.success(caseList));
    } catch (error) {
        yield put(caseListActions.getCasesList.error(error));
    }
}

function* getCaseDetails(state: { type: string; payload: string }) {
    try {
        yield put(caseListActions.getCaseDetails.pending);
        const caseDetails = yield call(api.getCaseDetails, state.payload);
        yield put(caseListActions.getCaseDetails.success(caseDetails));
    } catch (error) {
        yield put(caseListActions.getCaseDetails.error(error));
    }
}

function* updateCaseStatus(state: { type: string; payload: { caseState: string; selectedCaseId: string } }) {
    try {
        yield put(caseListActions.updateCaseStatus.pending);
        yield call(api.updateCaseStatus, state.payload.caseState, state.payload.selectedCaseId);
        yield put(caseListActions.updateCaseStatus.success(state.payload.caseState));
    } catch (error) {
        yield put(caseListActions.updateCaseStatus.error(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(ACTIONS.GET_CASES_LIST_BEGIN, getCaseList),
        takeEvery(ACTIONS.GET_CASE_DETAILS_BEGIN, getCaseDetails),
        takeEvery(ACTIONS.UPDATE_CASE_STATUS_BEGIN, updateCaseStatus),
    ]);
}
