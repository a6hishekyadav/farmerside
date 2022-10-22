import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SellHistory from './pages/SellHistory';
import Sidebar from './components/Sidebar';
import Notification from './pages/Notification.jsx';
import Grievances from './pages/Grievances.jsx';
import FAQ from './pages/FAQ.jsx';
import MyAccount from './pages/MyAccount.jsx';
import CreateRequest from './pages/CreateRequest.jsx';

const App = () => {
  return (
    <>
    <header className='header_sell'>
      <h1>Agro Grocery - Seller's View</h1>
    </header>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/CreateRequest' element={<CreateRequest/>} />
          <Route path='/SellHistory' element={<SellHistory/>} />
          <Route path="/Grievances" element={<Grievances />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/MyAccount" element={<MyAccount />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>

  );
};

export default App;