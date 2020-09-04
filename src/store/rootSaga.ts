import { all, spawn } from "redux-saga/effects";
import caseManagementSagas from "./sagas";

export default function* root() {
  yield all([spawn(caseManagementSagas)]);
}
