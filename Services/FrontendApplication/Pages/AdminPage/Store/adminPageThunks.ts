import { toast } from "react-toastify";

import { AppDispatch } from "State/store";
import { apiGetSessions, apiGetUsers, apiPostDeleteUser } from "Api/requests";
import { deleteUserByAdmin, setSessions, setUsers } from "State/Actions/actionCreators";
import { ApiPostDeleteUserRequestBody } from "Api/Interfaces/Api/Post/ApiPostDeleteUser/apiPostDeleteUserRequestBody";
import { ERROR_MESSAGE } from "Utils/helpers";

export const initialLoad = () => (dispatch: AppDispatch) => {
    apiGetUsers()
        .then((response) => {
            const users = response.data.users;

            dispatch(setUsers(users) as any);
        })
        .catch(() => toast.error(ERROR_MESSAGE.UNKNOW));

    apiGetSessions()
        .then(({ data }) => dispatch(setSessions(data.sessions)))
        .catch(() => toast.error(ERROR_MESSAGE.UNKNOW));
};

export const deleteUser =
    ({ me, email }: ApiPostDeleteUserRequestBody) =>
    (dispatch: AppDispatch) =>
        apiPostDeleteUser({ me: { email: me.email }, email: email })
            .then(() => dispatch(deleteUserByAdmin(email)))
            .catch(() => toast.error(ERROR_MESSAGE.UNKNOW));
