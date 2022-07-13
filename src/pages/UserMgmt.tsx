import { MDBBtn, MDBContainer, MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRadio } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';
import UserTable from '../components/UserPage/UserTable';
import { User } from '../data/data';
import { actionCreators, State } from '../redux/index';

function UserMgmt() {
    let navigate = useNavigate();
    const dispatch = useDispatch(); //react redux hook to access dispatch
    const { addUser, removeUser, updateUser } = bindActionCreators(actionCreators, dispatch); //for easier access of our actionCreators
    const users = useSelector((state: State) => state.user.users);

    useEffect(() => {
        if (sessionStorage.getItem('role') === 'member') {
            navigate('/book');
        }
        if (sessionStorage.getItem('role') === null) {
            navigate('/');
        }
    }, []);

    return (
        <MDBContainer className="pb-5">
            <p className="h3 responsive mt-2">User Management </p>
            <hr />
            {users && <UserTable users={users} addUser={addUser} removeUser={removeUser} updateUser={updateUser} />}
        </MDBContainer>
    );
}

export default UserMgmt;
