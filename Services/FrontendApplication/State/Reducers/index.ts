import { combineReducers } from "redux";

import { modalReducer } from "State/Reducers/registrationModalReducer";
import { meReducer } from "State/Reducers/meReducer";
import { adminPageReducer } from "State/Reducers/adminPageReducer";

export const rootReducer = combineReducers({
    modals: modalReducer,
    me: meReducer,
    adminPage: adminPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
