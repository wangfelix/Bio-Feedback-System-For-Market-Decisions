import { combineReducers } from "redux";

import { modalReducer } from "State/Reducers/registrationModalReducer";
import { meReducer } from "State/Reducers/meReducer";
import { adminPageReducer } from "State/Reducers/adminPageReducer";
import { sessionPageReducer } from "State/Reducers/sessionPageReducer";

export const rootReducer = combineReducers({
    modals: modalReducer,
    me: meReducer,
    adminPage: adminPageReducer,
    sessionPage: sessionPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
