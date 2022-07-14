import React, { useState } from 'react';
import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBBtn,
    MDBCheckbox,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle,
    MDBTextArea
} from 'mdb-react-ui-kit';
import { MDBInputGroup } from 'mdb-react-ui-kit';
import { Book } from '../../data/data';
import { useSelector } from 'react-redux';
import { State } from '../../redux/index';

interface INewBookProps {
    basicModal: boolean;
    setBasicModal: Function;
    addBook: Function;
}

const NewBook: React.FC<INewBookProps> = ({ basicModal, setBasicModal, addBook }) => {
    const [newBook, setNewBook] = useState({} as Book);
    const books = useSelector((state: State) => state.book.book);
    const onChange = (e: any) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    const onSubmit = () => {
        if (
            ![newBook.title, newBook.description, newBook.genre, newBook.author, newBook.year, newBook.availability].some((eachValue) =>
                eachValue === null || eachValue === undefined || eachValue === '' ? true : false
            )
        ) {
            let form: Book = { ...newBook, id: Object.keys(books).length + 1, lastBorrower: null, genre: newBook.genre.toString().toLowerCase().split(',') };
            addBook(form);
            setBasicModal(!basicModal);
        }
    };

    return (
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>New Book</MDBModalTitle>
                        <MDBBtn className="btn-close" color="none" onClick={() => setBasicModal(!basicModal)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBValidation className="row g-3 pb-5 mb-5">
                            <MDBValidationItem className="col-md-6" feedback="Please provide a valid title." invalid>
                                <MDBInput value={newBook.title} name="title" onChange={onChange} required label="Title" />
                            </MDBValidationItem>
                            <MDBValidationItem className="col-md-6" feedback="Please provide a valid author." invalid>
                                <MDBInput value={newBook.author} name="author" onChange={onChange} id="validationCustom03" required label="Author" />
                            </MDBValidationItem>
                            <MDBValidationItem className="col-12" feedback="Please provide a valid description." invalid>
                                <MDBTextArea value={newBook.description} name="description" onChange={onChange} required label="Description" />
                            </MDBValidationItem>
                            <MDBValidationItem feedback="Please enter a genre." invalid className="col-md-12">
                                <MDBInput value={newBook.genre} name="genre" onChange={onChange} required label="Genre" />
                            </MDBValidationItem>

                            <MDBValidationItem className="col-md-6" feedback="Please provide a valid year." invalid>
                                <MDBInput value={newBook.year} name="year" onChange={onChange} required label="Year" type={'number'} min={'1000'} max={'2022'} step={'1'} />
                            </MDBValidationItem>
                            <MDBValidationItem className="col-md-6" feedback="Please provide a valid availability." invalid>
                                <MDBInput value={newBook.availability} name="availability" onChange={onChange} required label="Number of copies" type="number" min={1} step={1} />
                            </MDBValidationItem>
                            <div className="col-12 d-flex justify-content-evenly">
                                <MDBBtn type="reset" color="danger" onClick={() => setBasicModal(!basicModal)}>
                                    Cancel
                                </MDBBtn>
                                <MDBBtn onClick={onSubmit}>Submit</MDBBtn>
                            </div>
                        </MDBValidation>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};
export default NewBook;
