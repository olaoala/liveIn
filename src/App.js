import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Auth/Login';
import Registration from './Auth/Registration';
import Dashboard from './Pages/Dashboard';
import Overview from './Components/Overview';
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
    <Route path="/overview" element={<Overview />} />
    <Route path="/billings" element={<Billings />} />
    <Route path="/listings" element={<Listings />} />





</Routes>
</Router>

  );
}

export default App;
