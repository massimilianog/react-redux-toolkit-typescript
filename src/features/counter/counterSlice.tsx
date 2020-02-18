import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Counter } from './types';

const initialState: Counter = { count: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state: Counter, action: PayloadAction<null>) {
            state.count += 1;
        },
        decrement(state: Counter, action: PayloadAction<null>) {
            state.count -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export type CounterState = ReturnType<typeof counterSlice.reducer>;

export default counterSlice.reducer;
