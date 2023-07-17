import { combineReducers } from "redux";

import { modalReducer } from "State/Reducers/registrationModalReducer";
import { meReducer } from "State/Reducers/meReducer";

export const rootReducer = combineReducers({
    modals: modalReducer,
    me: meReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
