import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "State/Reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

export type AppDispatch = typeof store.dispatch;
