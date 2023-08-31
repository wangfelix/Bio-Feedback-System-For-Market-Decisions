import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "State/Reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
