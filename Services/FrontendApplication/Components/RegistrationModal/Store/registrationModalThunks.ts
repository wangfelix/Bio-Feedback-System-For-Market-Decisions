import { batch } from "react-redux";
import { toast } from "react-toastify";

import { RegistrationFormState } from "Components/RegistrationModal/Utils/registrationFormTypes";
import { logInMe, setRegistrationModalOpen } from "State/Actions/actionCreators";
import { AppDispatch } from "State/store";
import { apiPostLoginUser, apiPostRegisterUser } from "Api/requests";
import { ERROR_MESSAGE } from "Utils/helpers";

export const registerUser = (formState: RegistrationFormState) => (dispatch: AppDispatch) =>
    apiPostRegisterUser(formState)
        .then(() => dispatch(setRegistrationModalOpen(false)))
        .catch(() => toast.error(ERROR_MESSAGE.UNKNOW));

export const logInUser = (formState: RegistrationFormState) => (dispatch: AppDispatch) => {
    return apiPostLoginUser(formState)
        .then((response) => {
            batch(() => {
                dispatch(setRegistrationModalOpen(false));
                dispatch(logInMe(response.data.user));
            });
        })
        .catch(() => toast.error(ERROR_MESSAGE.UNKNOW));
};
