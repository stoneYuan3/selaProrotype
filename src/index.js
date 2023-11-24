import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';
import { NavMain,NavTools } from './components/Navigation'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavMain lang="ENG" />}>
        <Route index element={<App/>} />
        <Route path="structure" element={<App page="structure"/>} />
      </Route>

      <Route path="/HEB" element={<NavMain homelink="/HEB" lang="HEB"/>}>
        <Route index element={<App/>} />
        <Route path="structure" element={<App page="structure"/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
