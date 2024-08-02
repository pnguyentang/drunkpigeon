import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableMap from './TableMap';
import DrinkSelection from './DrinkSelection';
import Confirmation from './Confirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/table/:tableId" element={<TableMap />} />
        <Route path="/send-drink/:tableId/:receiverTable" element={<DrinkSelection />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
