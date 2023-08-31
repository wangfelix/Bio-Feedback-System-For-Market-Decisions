export type ApiGetUsersResponseBody = {
    users: {
        firstName: string;
        lastName: string;
        email: string;
        _id: string;
        isAdmin: boolean;
    }[];
};
