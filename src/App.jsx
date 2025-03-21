import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header_component/header.jsx';
import Footer from "./components/footer_component/footer.jsx";
import Login from "./components/login_component/login.jsx";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
