import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { RootState } from '../../rootReducer';

interface Props {
    count: number;
    increment: Function;
    decrement: Function;
}

const Counter = ({ count, increment, decrement }: Props) => {
    const onIncrement = () => {
        increment();
    };
    const onDecrement = () => {
        decrement();
    };

    return (
        <div className="hello">
            <div className="greeting">Counter: {count}</div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    count: state.counter.count,
});
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
