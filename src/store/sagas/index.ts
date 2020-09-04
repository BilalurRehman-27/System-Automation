import { spawn, all } from "redux-saga/effects";
import caseListSagas from "./caseList.sagas";

export default function* rootSaga() {
  yield all([spawn(caseListSagas)]);
}
