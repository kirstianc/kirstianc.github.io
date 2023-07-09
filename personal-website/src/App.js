import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
    return (
        <Router>
        <div className="App">
            <Header />
            <div className="content">
            <Routes>
                <Route path='/personal-website' element ={<Home/>} />
                <Route path='/personal-website/projects' element ={<Projects/>} />
            </Routes>
            </div>
            <Footer />
        </div>
        </Router>
    );
}

export default App;