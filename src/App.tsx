import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnalyticsPage from './pages/AnalyticsPage';
import BookMgmt from './pages/BookMgmt';
import UserMgmt from './pages/UserMgmt';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookMgmt />} />
                <Route path="/user" element={<UserMgmt />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                {/* <Route path="user">
                    <Route index element={<UserMgmt />} />
                    <Route path=":userId" element={<UserMgmt/>}/> //to get hierarchy
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
