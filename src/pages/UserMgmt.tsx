import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserTable from '../components/UserTable';
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
        <MDBContainer className="pb-5">
            <p className="h3 responsive mt-2">User Management</p>
            <hr />
            {users && <UserTable users={users} />}
        </MDBContainer>
    );
}

export default UserMgmt;
