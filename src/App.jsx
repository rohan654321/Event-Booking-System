import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import EventDetail from './components/EventDetail.jsx';
import Header from './components/Header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Routes>
              <Route path='/event-booking-system' element={<Home/>}/>
              <Route path="/" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
              </Route>
              <Route path="/event/:id" element={<EventDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;