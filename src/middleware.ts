import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/rootSaga";
export const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

export default [sagaMiddleware];
