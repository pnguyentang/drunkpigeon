import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionList from './TransactionList';

function AdminApp() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/transactions').then(response => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default AdminApp;