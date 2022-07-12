import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MDBNavbar, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBNavbarToggler, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function Signin() {
    let navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('role') != null) {
            navigate('/book');
        }
    }, []); //run only once like componentdidmount

    const btnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        sessionStorage.setItem('role', (e.target as HTMLAnchorElement).id);
    };

    return (
        <header>
            <div className="p-5 text-center bg-image" style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '80vh' }}>
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Welcome to ABC Book Fan Club</h1>
                            <h4 className="mb-3">Sign in as</h4>
                            <a id="admin" className="btn btn-outline-light btn-lg me-3" href="/book" role="button" onClick={(e) => btnClick(e)}>
                                Admin
                            </a>
                            <a id="editor" className="btn btn-outline-light btn-lg me-3" href="/book" role="button" onClick={(e) => btnClick(e)}>
                                Editor
                            </a>
                            <a id="member" className="btn btn-outline-light btn-lg" href="/book" role="button" onClick={(e) => btnClick(e)}>
                                Member
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Signin;
