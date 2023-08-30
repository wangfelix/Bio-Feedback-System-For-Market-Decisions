import { AppDispatch } from "State/store";
import { apiGetUsers, apiPostDeleteUser } from "Api/requests";
import { deleteUserByAdmin, setUsers } from "State/Actions/actionCreators";
import { ApiPostDeleteUserRequestBody } from "Api/Interfaces/Api/Post/ApiPostDeleteUserRequestBody/apiPostDeleteUserRequestBody";

export const initialLoad = () => (dispatch: AppDispatch) => {
    apiGetUsers().then((response) => {
        const users = response.data.users;

        dispatch(setUsers(users) as any);
    });
};

export const deleteUser =
    ({ me, email }: ApiPostDeleteUserRequestBody) =>
    (dispatch: AppDispatch) => {
        apiPostDeleteUser({ me: { email: me.email }, email: email }).then(() => dispatch(deleteUserByAdmin(email)));
    };
