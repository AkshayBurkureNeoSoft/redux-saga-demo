import { createStore, applyMiddleware, Store } from "redux";
import logger from "redux-logger";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import rootReducer from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware : SagaMiddleware = createSagaMiddleware();

type RootState = ReturnType<typeof rootReducer>;

const store : Store<RootState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;   
