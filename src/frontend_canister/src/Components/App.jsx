import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Navbar from './layouts/Navbar';
import Error404 from './utils/Error404';
import Dashboard from './Home/Dashboard';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Error404 />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};


export default App;
