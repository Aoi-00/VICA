import { MDBBtn, MDBContainer, MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBRadio } from 'mdb-react-ui-kit';
import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { User } from '../../data/data';

import { AgGridReact } from 'ag-grid-react';
import { ColDef, RowSelectedEvent } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface IUserTableProps {
    users: User[];
    addUser: Function;
    removeUser: Function;
    updateUser: Function;
}

const UserTable: React.FC<IUserTableProps> = ({ users, addUser, removeUser, updateUser }) => {
    const gridRef = useRef() as MutableRefObject<AgGridReact<User>>;
    const [rowData, setRowData] = useState<User[]>([]);

    const saveNewValue = (params) => {
        let field = params.column.colId;
        let newRow = { ...params.data };
        newRow[field] = params.newValue;
        updateUser(newRow);
        return false;
    };

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: 'id' },
        { field: 'name', editable: sessionStorage.getItem('role') === 'admin' },
        {
            field: 'role',
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: ['admin', 'editor', 'member']
            },
            editable: sessionStorage.getItem('role') === 'admin'
        },
        { field: 'date' }
    ]);

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const [newUser, setNewUser] = useState({} as User);
    const [error, setError] = useState(false);

    useEffect(() => {
        setRowData(users);
    }, [users]);

    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: true,
            flex: 1,
            valueSetter: saveNewValue
        }),
        []
    );

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

    const deleteUser = useCallback(() => {
        const selectedNodes = gridRef.current.api.getSelectedNodes();
        const selectedIds = selectedNodes.map((node) => node?.data.id); //optional chaining to check for null/undefined, will return undefined otherwise
        let delUser = users.filter((user) => selectedIds.indexOf(user.id) >= 0);
        delUser.forEach((eachUser) => {
            removeUser(eachUser);
        });
        users = users.filter((user) => selectedIds.indexOf(user.id) < 0);
        setRowData(users);
    }, []);

    return (
        <MDBContainer>
            {sessionStorage.getItem('role') === 'admin' && (
                <div className="mb-2">
                    <MDBBtn outline color="danger" floating tag="a" onClick={deleteUser}>
                        <MDBIcon fas icon="trash-alt" />
                    </MDBBtn>
                    <MDBBtn outline className="ms-3" floating tag="a" onClick={toggleShow}>
                        <MDBIcon fas icon="plus" />
                    </MDBBtn>
                </div>
            )}
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
            <div className="ag-theme-alpine mh-100" style={{ height: '50vh' }}>
                <AgGridReact
                    ref={gridRef}
                    rowSelection="multiple"
                    rowMultiSelectWithClick={true}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    pagination={true}
                    paginationAutoPageSize={true}
                />
            </div>
        </MDBContainer>
    );
};
export default UserTable;
