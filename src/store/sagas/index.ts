import {spawn, all} from "redux-saga/effects";
import caseListSagas from "./caseList.sagas";
import fileListSagas from "./fileList.saga";

export default function* rootSaga() {
    yield all([spawn(caseListSagas), spawn(fileListSagas)]);
}
