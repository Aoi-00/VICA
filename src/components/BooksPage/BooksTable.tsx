import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Book } from '../../data/data';

import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useSelector } from 'react-redux';
import { State } from '../../redux/index';
import NewBook from './NewBook';

interface IBooksTableProps {
    books: Book[];
    addBook: Function;
    removeBook: Function;
    updateBook: Function;
}

const BooksTable: React.FC<IBooksTableProps> = ({ books, addBook, removeBook, updateBook }) => {
    const users = useSelector((state: State) => state.user.users);
    let names = users.map((x) => {
        return x.name;
    });

    const gridRef = useRef() as MutableRefObject<AgGridReact<Book>>;
    const [rowData, setRowData] = useState<Book[]>([]);
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const saveNewValue = (params) => {
        let field = params.column.colId;
        let newRow = { ...params.data };
        newRow[field] = params.newValue;
        updateBook(newRow);
        return false;
    };

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: 'id' },
        { field: 'title', editable: sessionStorage.getItem('role') !== 'member' },
        {
            field: 'description',
            cellEditor: 'agLargeTextCellEditor',
            cellEditorPopup: true,
            editable: sessionStorage.getItem('role') !== 'member'
        },
        { field: 'genre', editable: sessionStorage.getItem('role') !== 'member' },
        { field: 'author', editable: sessionStorage.getItem('role') !== 'member' },
        { field: 'year', editable: sessionStorage.getItem('role') !== 'member' },
        { field: 'availability', editable: sessionStorage.getItem('role') !== 'member' },
        {
            field: 'lastBorrower',
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
                values: names
            },
            editable: sessionStorage.getItem('role') !== 'member'
        }
    ]);

    useEffect(() => {
        setRowData(books);
    }, [books]);

    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: true,
            flex: 1,
            valueSetter: saveNewValue
        }),
        []
    );

    const deleteBook = useCallback(() => {
        const selectedNodes = gridRef.current.api.getSelectedNodes();
        const selectedIds = selectedNodes.map((node) => node?.data.id); //optional chaining to check for null/undefined, will return undefined otherwise
        let delBook = books.filter((book) => selectedIds.indexOf(book.id) >= 0);
        delBook.forEach((eachBook) => {
            removeBook(eachBook);
        });
        books = books.filter((book) => selectedIds.indexOf(book.id) < 0);
        setRowData(books);
    }, []);

    const borrowBook = useCallback(() => {
        const selectedNodes = gridRef.current.api.getSelectedNodes();
        const selectedIds = selectedNodes.map((node) => node?.data.id); //optional chaining to check for null/undefined, will return undefined otherwise
        let borrow = books.filter((book) => selectedIds.indexOf(book.id) >= 0);
        borrow.forEach((eachBook) => {
            if (eachBook.availability >= 1) {
                updateBook({ ...eachBook, availability: eachBook.availability - 1, lastBorrower: sessionStorage.getItem('name') });
            }
        });
    }, []);

    return (
        <MDBContainer>
            <div className="mb-2">
                <MDBBtn color="success" outline floating tag="a" onClick={borrowBook}>
                    <MDBIcon fas icon="book" />
                </MDBBtn>
                {sessionStorage.getItem('role') !== 'member' && (
                    <div>
                        <MDBBtn outline color="danger" floating tag="a" onClick={deleteBook}>
                            <MDBIcon fas icon="trash-alt" />
                        </MDBBtn>
                        <MDBBtn outline className="ms-3" floating tag="a" onClick={toggleShow}>
                            <MDBIcon fas icon="plus" />
                        </MDBBtn>
                    </div>
                )}
            </div>
            <NewBook basicModal={basicModal} setBasicModal={setBasicModal} addBook={addBook} />

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
export default BooksTable;
