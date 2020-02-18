import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';
import { fetchUserList } from './userListSlice';

const UserList = () => {
    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state.userList.users);

    const errorMessage = useSelector(
        (state: RootState) => state.userList.errorMessage
    );
    const isFetching = useSelector(
        (state: RootState) => state.userList.isFetching
    );

    useEffect(() => {
        dispatch(fetchUserList());
    }, [dispatch]);

    if (isFetching) {
        return <p style={{ textAlign: 'center' }}>Loading ...</p>;
    }

    if (errorMessage) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Error: {errorMessage}</p>
                <button onClick={() => dispatch(fetchUserList())}>Retry</button>
            </div>
        );
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '40px' }}>User List:</p>
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;
