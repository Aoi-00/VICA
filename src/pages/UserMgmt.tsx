import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { User } from '../data/data';
import { actionCreators, State } from '../redux/index';

function UserMgmt() {
    const dispatch = useDispatch(); //react redux hook to access dispatch
    const { addUser, removeUser, updateUser } = bindActionCreators(actionCreators, dispatch); //for easier access of our actionCreators
    const users = useSelector((state: State) => state.user.users);
    useEffect(() => {
        console.log(users);
    });
    return (
        <div>
            UserMgmt
            {users &&
                users.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.role}</p>
                        <p>{user.date.toLocaleDateString()}</p>
                    </div>
                ))}
        </div>
    );
}

export default UserMgmt;
