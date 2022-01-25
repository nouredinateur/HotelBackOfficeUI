import './App.css';
import Aside from './components/layout/Aside';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './components/customer/Customer';
import Reservation from './components/reservation/Reservation';
import Rooms from './components/rooms/Rooms';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
   <div className='bg-white h-screen w-full flex'>
     <BrowserRouter>
     <Aside />
      <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;