import { createLogger } from 'redux-logger';
import rootReducer, { RootState } from './rootReducer';
import {
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';

const middleware = [createLogger(), ...getDefaultMiddleware()];
const store = configureStore({
    reducer: rootReducer,
    middleware,
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./rootReducer', () => {
//         const newRootReducer = require('./rootReducer').default;
//         store.replaceReducer(newRootReducer)
//     })
// }

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
