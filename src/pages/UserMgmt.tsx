import { MDBBtn, MDBContainer, MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRadio } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserTable from '../components/UserTable';
import { User } from '../data/data';
import { actionCreators, State } from '../redux/index';

function UserMgmt() {
    const dispatch = useDispatch(); //react redux hook to access dispatch
    const { addUser, removeUser, updateUser } = bindActionCreators(actionCreators, dispatch); //for easier access of our actionCreators
    const users = useSelector((state: State) => state.user.users);

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const [newUser, setNewUser] = useState({} as User);
    const [error, setError] = useState(false);
    useEffect(() => {
        console.log(newUser);
    }, [newUser]);

    const onSubmit = () => {
        if (newUser.name === undefined || newUser.name === '' || newUser.role === undefined) {
            setError(true);
        } else {
            setError(false);
            let form = { ...newUser, id: Object.keys(users).length + 1, date: new Date().toLocaleDateString() };
            addUser(form);
            toggleShow();
            setNewUser({ ...newUser, name: '' });
        }
    };

    return (
        <MDBContainer className="pb-5">
            <p className="h3 responsive mt-2 d-flex justify-content-between">
                User Management{' '}
                <MDBBtn floating tag="a" onClick={toggleShow}>
                    <MDBIcon fas icon="plus" />
                </MDBBtn>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>New User</MDBModalTitle>
                                <MDBBtn className="btn-close" color="none" onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <div className="h6 responsive">
                                    {error && <p className="text-danger">Please enter all fields</p>}
                                    <MDBInput className="mb-2" label="Name" type="text" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                                    <MDBRadio inline name="flexRadioDefault" label="Admin" value="admin" onClick={(e) => setNewUser({ ...newUser, role: (e.target as HTMLInputElement).value })} />
                                    <MDBRadio inline name="flexRadioDefault" label="Editor" value="editor" onClick={(e) => setNewUser({ ...newUser, role: (e.target as HTMLInputElement).value })} />
                                    <MDBRadio inline name="flexRadioDefault" label="Member" value="member" onClick={(e) => setNewUser({ ...newUser, role: (e.target as HTMLInputElement).value })} />
                                </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="danger" onClick={toggleShow}>
                                    Cancel
                                </MDBBtn>
                                <MDBBtn onClick={onSubmit}>Submit</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </p>
            <hr />

            {users && <UserTable users={users} />}
        </MDBContainer>
    );
}

export default UserMgmt;
