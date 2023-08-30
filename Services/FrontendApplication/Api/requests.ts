import { sendGetRequest, sendPostRequest } from "Utils/api";
import { ApiPostTrackSessionRequestBody } from "Api/Interfaces/Api/Post/ApiPostTrackSessionRequestBody/apiPostTrackSessionRequestBody";
import { ApiPostLogInRequestBody } from "Api/Interfaces/Api/Post/ApiPostLogInRequestBody/apiPostLogInRequestBody";
import { ApiPostRegisterUserRequestBody } from "Api/Interfaces/Api/Post/ApiPostRegisterUserRequestBody/apiPostRegisterUserRequestBody";
import { ApiPostDeleteUserRequestBody } from "Api/Interfaces/Api/Post/ApiPostDeleteUserRequestBody/apiPostDeleteUserRequestBody";

export const apiGetUsers = () => sendGetRequest("get-users").then((response) => response);

export const apiPostLoginUser = (data: ApiPostLogInRequestBody) =>
    sendPostRequest("/log-in", { ...data }).then((response) => response);

export const apiPostRegisterUser = (data: ApiPostRegisterUserRequestBody) =>
    sendPostRequest("/register-user", { ...data }).then((response) => response);

export const apiPostTrackSession = (data: ApiPostTrackSessionRequestBody) =>
    sendPostRequest("/track-session", data).then((response) => response);

export const apiPostDeleteUser = (data: ApiPostDeleteUserRequestBody) =>
    sendPostRequest("/delete-user", data).then((response) => response);
