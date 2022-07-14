import { MDBContainer } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';
import BooksTable from '../components/BooksPage/BooksTable';
import { actionCreators, State } from '../redux/index';

function BookMgmt() {
    let navigate = useNavigate();
    const dispatch = useDispatch(); //react redux hook to access dispatch
    const { addBook, removeBook, updateBook } = bindActionCreators(actionCreators, dispatch); //for easier access of our actionCreators
    const books = useSelector((state: State) => state.book.book);

    useEffect(() => {
        if (sessionStorage.getItem('role') === null) {
            navigate('/');
        }
    }, []);

    return (
        <MDBContainer className="pb-5">
            <p className="h3 responsive mt-2">Book Management </p>
            <hr />
            <BooksTable books={books} addBook={addBook} removeBook={removeBook} updateBook={updateBook} />
        </MDBContainer>
    );
}

export default BookMgmt;
