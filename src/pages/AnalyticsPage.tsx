import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { LineChart } from '../components/AnalyticsPage/LineChart';
import { PieChart } from '../components/AnalyticsPage/PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../redux/index';
import { useEffect } from 'react';

function AnalyticsPage() {
    const books = useSelector((state: State) => state.book.book);
    return (
        <MDBContainer className="pb-5">
            <p className="h3 responsive mt-2">Analytics </p>
            <hr />
            <MDBRow className="d-flex align-items-center">
                <MDBCol className="col-md-6">
                    <PieChart books={books} />
                </MDBCol>
                <MDBCol className="col-md-6">
                    <LineChart books={books} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default AnalyticsPage;
