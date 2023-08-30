import { createStore, applyMiddleware } from "redux";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";

import { rootReducer } from "State/Reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

export type AppDispatch = typeof store.dispatch;

// TODO: Move to hooks.ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
