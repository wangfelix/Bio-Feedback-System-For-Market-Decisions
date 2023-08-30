import { batch } from "react-redux";

import { RegistrationFormState } from "Components/RegistrationModal/Utils/registrationFormTypes";
import { logInMe, setRegistrationModalOpen } from "State/Actions/actionCreators";
import { AppDispatch } from "State/store";
import { apiPostLoginUser, apiPostRegisterUser } from "../../../Api/requests";

export const registerUser = (formState: RegistrationFormState) => (dispatch: AppDispatch) =>
    apiPostRegisterUser(formState).then(() => dispatch(setRegistrationModalOpen(false)));

export const logInUser = (formState: RegistrationFormState) => (dispatch: AppDispatch) => {
    return apiPostLoginUser(formState).then((response) => {
        batch(() => {
            dispatch(setRegistrationModalOpen(false));
            dispatch(logInMe(response.data.user));
        });
    });
};
