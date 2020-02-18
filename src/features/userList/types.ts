export type User = {
    id: number;
    name: string;
};

export type UserList = {
    users: User[];
    isFetching: boolean;
    errorMessage: string;
};
