import { sendGetRequest, sendPostRequest } from "Utils/api";
import { ApiPostTrackSessionRequestBody } from "Api/Interfaces/Api/Post/ApiPostTrackSession/apiPostTrackSessionRequestBody";
import { ApiPostLogInRequestBody } from "Api/Interfaces/Api/Post/ApiPostLogIn/apiPostLogInRequestBody";
import { ApiPostRegisterUserRequestBody } from "Api/Interfaces/Api/Post/ApiPostRegisterUser/apiPostRegisterUserRequestBody";
import { ApiPostDeleteUserRequestBody } from "Api/Interfaces/Api/Post/ApiPostDeleteUser/apiPostDeleteUserRequestBody";
import { ApiGetSessionsResponseBodyType } from "Api/Interfaces/Api/Get/ApiGetSessions/apiGetSessionsResponseBody";
import { ApiGetUsersResponseBody } from "Api/Interfaces/Api/Get/ApiGetUsers/apiGetUsersResponseBody";

export const apiGetUsers = () => sendGetRequest<ApiGetUsersResponseBody>("get-users").then((response) => response);

export const apiPostLoginUser = (data: ApiPostLogInRequestBody) =>
    sendPostRequest("/log-in", { ...data }).then((response) => response);

export const apiPostRegisterUser = (data: ApiPostRegisterUserRequestBody) =>
    sendPostRequest("/register-user", { ...data }).then((response) => response);

export const apiPostTrackSession = (data: ApiPostTrackSessionRequestBody) =>
    sendPostRequest("/track-session", data).then((response) => response);

export const apiPostDeleteUser = (data: ApiPostDeleteUserRequestBody) =>
    sendPostRequest("/delete-user", data).then((response) => response);

export const apiGetSessions = () =>
    sendGetRequest<ApiGetSessionsResponseBodyType>("/get-sessions").then((response) => response);
