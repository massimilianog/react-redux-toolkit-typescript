import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './features/counter/counterSlice';
import userListReducer from './features/userList/userListSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    userList: userListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
