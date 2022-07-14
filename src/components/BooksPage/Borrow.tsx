import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { State } from '../../redux';
import { Book } from '../../data/data';

interface IBorrowProps {
    updateBook: Function;
}

const Borrow: React.FC<IBorrowProps> = ({ updateBook }) => {
    const books = useSelector((state: State) => state.book.book);
    const [borrowed, setBorrowed] = useState({} as Book[]);
    useEffect(() => {
        let myBooks = books.filter((eachBook) => eachBook.lastBorrower === sessionStorage.getItem('name'));
        setBorrowed(myBooks);
    }, [books]);

    const onReturn = (e) => {
        let book = books.filter((each) => each.id.toString() === e.target.id)[0];
        updateBook({ ...book, availability: book.availability + 1, lastBorrower: null });
    };

    return (
        <MDBTable className="caption-top mb-5 pb-5">
            <caption>Borrowed Books</caption>
            <MDBTableHead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Author</th>
                    <th scope="col">Year</th>
                    <th scope="col">Return</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {!Object.keys(borrowed).length ? (
                    <p></p>
                ) : (
                    borrowed.map((book) => {
                        return (
                            <tr>
                                <th scope="row">{book.id}</th>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                                <td>
                                    {book.genre.map((x) => {
                                        return `${x} `;
                                    })}
                                </td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>
                                    <MDBBtn id={book.id.toString()} outline onClick={(e) => onReturn(e)}>
                                        Return
                                    </MDBBtn>
                                </td>
                            </tr>
                        );
                    })
                )}
            </MDBTableBody>
        </MDBTable>
    );
};
export default Borrow;
