import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Add this import
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router> {/* Wrap App with Router */}
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
