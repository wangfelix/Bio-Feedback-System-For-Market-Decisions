import { sendGetRequest } from "Utils/api";

export const apiGetUsers = () => sendGetRequest("get-users").then((response) => response);
