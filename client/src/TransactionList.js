import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            {transaction.senderTable} sent {transaction.drink} to {transaction.receiverTable} at {new Date(transaction.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;