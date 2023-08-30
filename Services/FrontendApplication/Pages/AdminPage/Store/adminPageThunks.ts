import { AppDispatch } from "State/store";
import { apiGetUsers } from "../../../Api/requests";
import { setUsers } from "State/Actions/actionCreators";

export const initialLoad = () => (dispatch: AppDispatch) => {
    apiGetUsers().then((response) => {
        const users = response.data.users;

        dispatch(setUsers(users) as any);
    });
};
