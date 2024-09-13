import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LogIn from './Auth/Login';
import Registration from './Auth/Registration';
import Dashboard from './Pages/Dashboard';
import Tour from './Components/Tour';
import Billings from './Components/Billings';
import Listings from './Components/Listings'

function App() {
  return (

<Router>

<Routes>
    <Route index element={<LogIn />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/tour" element={<Tour />} />
    <Route path="/billings" element={<Billings />} />
    <Route path="/listings" element={<Listings />} />





</Routes>
</Router>

  );
}

export default App;
