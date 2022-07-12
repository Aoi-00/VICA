import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AnalyticsPage from './pages/AnalyticsPage';
import BookMgmt from './pages/BookMgmt';
import Signin from './pages/Signin';
import UserMgmt from './pages/UserMgmt';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/user" element={<UserMgmt />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/book" element={<BookMgmt />} />
                {/* <Route path="user">
                    <Route index element={<UserMgmt />} />
                    <Route path=":userId" element={<UserMgmt/>}/> //to get hierarchy
                </Route> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
