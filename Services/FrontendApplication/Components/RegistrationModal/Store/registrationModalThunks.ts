import { sendPostRequest } from "Utils/api";
import { RegistrationFormState } from "Components/RegistrationModal/Utils/registrationFormTypes";
import { setRegistrationModalOpen } from "State/Actions/actionCreators";
import { AppDispatch } from "State/store";

export const registerUser = (formState: RegistrationFormState) => (dispatch: AppDispatch) =>
    sendPostRequest("/register-user", { ...formState }).then((response) => {
        dispatch(setRegistrationModalOpen(false));
        console.log(response);
    });

export const logInUser = (formState: RegistrationFormState) => (dispatch: AppDispatch) => {
    return sendPostRequest("/log-in", { ...formState }).then((response) => {
        dispatch(setRegistrationModalOpen(false));
        console.log(response);
    });
};
