import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import ACTIONS from '../caseManagement.constants';
import { caseDataActions } from '../actions';
import { CaseData, Complainant, Incident, Respondent } from '../modules/casesList/types';
import { getSelectedCaseID } from '../selectors/caseList.selectors';
import api from '../service/service';

function* editCaseDataEntry(state: { type: string; payload: CaseData }) {
    try {
        yield put(caseDataActions.editCaseData.pending);
        const selectedCaseId = yield select(getSelectedCaseID);
        yield call(api.addCaseDataEntry, selectedCaseId, state.payload);
        yield put(caseDataActions.editCaseData.success(state.payload));
    } catch (error) {
        yield put(caseDataActions.editCaseData.error(error));
    }
}

function* editCaseDataRespondent(state: { type: string; payload: Respondent }) {
    try {
        yield put(caseDataActions.editCaseDataRespondent.pending);
        const selectedCaseId = yield select(getSelectedCaseID);
        yield call(api.editCaseDataRespondent, selectedCaseId, state.payload);
        yield put(caseDataActions.editCaseDataRespondent.success(state.payload));
    } catch (error) {
        yield put(caseDataActions.editCaseDataRespondent.error(error));
    }
}

function* editCaseDataComplainant(state: { type: string; payload: Complainant }) {
    try {
        yield put(caseDataActions.editCaseDataComplainant.pending);
        const selectedCaseId = yield select(getSelectedCaseID);
        yield call(api.editCaseDataComplainant, selectedCaseId, state.payload);
        yield put(caseDataActions.editCaseDataComplainant.success(state.payload));
    } catch (error) {
        yield put(caseDataActions.editCaseDataComplainant.error(error));
    }
}
function* editCaseDataIncident(state: { type: string; payload: { incidentData: Incident; caseType: string } }) {
    try {
        yield put(caseDataActions.editCaseDataIncident.pending);
        const selectedCaseId = yield select(getSelectedCaseID);
        yield call(api.editCaseDataIncident, selectedCaseId, state.payload.incidentData, state.payload.caseType);
        yield put(caseDataActions.editCaseDataIncident.success(state.payload.incidentData, state.payload.caseType));
    } catch (error) {
        yield put(caseDataActions.editCaseDataIncident.error(error));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(ACTIONS.EDIT_CASE_DATA_ENTRY_BEGIN, editCaseDataEntry),
        takeEvery(ACTIONS.EDIT_CASE_DATA_RESPONDENT_BEGIN, editCaseDataRespondent),
        takeEvery(ACTIONS.EDIT_CASE_DATA_COMPLAINANT_BEGIN, editCaseDataComplainant),
        takeEvery(ACTIONS.EDIT_CASE_DATA_INCIDENT_BEGIN, editCaseDataIncident),
    ]);
}
