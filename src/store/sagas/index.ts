import { spawn, all } from 'redux-saga/effects';
import caseListSagas from './caseList.sagas';
import fileListSagas from './caseFileList.saga';
import caseEntriesSagas from './caseEntries.sagas';
import caseDataEntry from './caseData.sagas';

export default function* rootSaga() {
    yield all([spawn(caseListSagas), spawn(fileListSagas), spawn(caseEntriesSagas), spawn(caseDataEntry)]);
}
