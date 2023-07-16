import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "State/Reducers";
import { useDispatch } from "react-redux";

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
