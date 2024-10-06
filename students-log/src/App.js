// Update App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NewStudent from './components/NewStudent';
import EditStudent from './components/EditStudent'; // Import the new component
import ViewStudent from './components/ViewStudent'; // Import the new component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="navbar-title">STUDENTS DASHBOARD</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/new-student">Add New Student</Link>
          </div>
        </nav>

        {/* Routes for Navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-student" element={<NewStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} /> {/* Route for editing */}
          <Route path="/view-student/:id" element={<ViewStudent />} /> {/* Route for viewing */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

