import { MDBContainer } from 'mdb-react-ui-kit';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { User } from '../data/data';

import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

interface IUserTableProps {
    users: User[];
}

const UserTable: React.FC<IUserTableProps> = ({ users }) => {
    const [rowData, setRowData] = useState<User[]>([]);
    const [columnDefs, setColumnDefs] = useState<{ field: string }[]>([{ field: 'id' }, { field: 'name' }, { field: 'role' }, { field: 'date' }]);
    useEffect(() => {
        setRowData(users);
    }, [users]);

    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: true,
            //editable: false,
            flex: 1
        }),
        []
    );

    const cellClickedListener = useCallback((e: any) => {
        console.log('cellClicked', e.data);
    }, []);

    return (
        //rowSelection = 'multiple'
        <MDBContainer>
            <div className="ag-theme-material mh-100" style={{ height: '60vh' }}>
                <AgGridReact
                    onCellClicked={cellClickedListener}
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
