import { MDBNavbar, MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem, MDBNavbarBrand, MDBIcon, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    let navigate = useNavigate();
    return (
        <MDBNavbar expand="lg" light bgColor="white">
            <MDBContainer fluid>
                <MDBNavbarToggler aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <MDBIcon fas icon="bars" />
                </MDBNavbarToggler>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <MDBNavbarNav right className="mb-2 mb-lg-0">
                        <MDBNavbarItem active>
                            <MDBNavbarBrand aria-current="page" href="#">
                                ABC Book Fan Club
                            </MDBNavbarBrand>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => navigate('/book')}>Books</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => navigate('/user')}>Users</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={() => navigate('/analytics')}>Analytics</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </div>
            </MDBContainer>
        </MDBNavbar>
    );
}
