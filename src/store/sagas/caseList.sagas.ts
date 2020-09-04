import { all, call, put, takeEvery } from "redux-saga/effects";
import ACTIONS from "../caseManagement.constants";
import { caseListActions } from "../actions";
import { caseListData } from "../../assets/mock/DummyData";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

function* getCaseList() {
  try {
    yield put(caseListActions.getCasesList.pending);
    yield call(delay, 2000);
    //const responses = yield all({});
    const response = caseListData;
    yield put(caseListActions.getCasesList.success(response));
  } catch (error) {
    debugger;
    console.log(error);
    yield put(caseListActions.getCasesList.error(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(ACTIONS.GET_CASES_LIST_BEGIN, getCaseList)]);
}
