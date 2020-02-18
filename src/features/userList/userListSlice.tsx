import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserList } from './types';
import fetchUsers from '../../api';
import { AppThunk, AppDispatch } from '../../configureStore';

const initialState: UserList = {
    isFetching: false,
    users: [],
    errorMessage: '',
};

const userListSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        fetchUserListRequest(state, action: PayloadAction<void>) {
            state.isFetching = true;
            state.errorMessage = '';
        },
        fetchUserListSuccess(state, action: PayloadAction<User[]>) {
            state.isFetching = false;
            state.users = action.payload;
            state.errorMessage = '';
        },
        fetchUserListFailure(state, action: PayloadAction<string>) {
            state.isFetching = false;
            state.errorMessage = action.payload;
        },
    },
});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchUserList = (): AppThunk => async (
    dispatch: AppDispatch,
    getState: Function
) => {
    dispatch(userListSlice.actions.fetchUserListRequest());

    try {
        const users: User[] = await delay(1000).then(() => fetchUsers());
        dispatch(userListSlice.actions.fetchUserListSuccess(users));
    } catch (error) {
        dispatch(userListSlice.actions.fetchUserListFailure(error.message));
    }
};

export const {
    fetchUserListRequest,
    fetchUserListSuccess,
} = userListSlice.actions;

export default userListSlice.reducer;
