import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
ReactDOM.render(
    <Router basename={"/"}>
        <App/>
    </Router>,
    document.getElementById('root')
)
reportWebVitals();
