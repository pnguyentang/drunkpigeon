import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function TableMap() {
  const { tableId } = useParams();
  const history = useHistory();

  const handleTableClick = (receiverTable) => {
    history.push(`/send-drink/${tableId}/${receiverTable}`);
  };

  return (
    <div>
      <h1>Select a Table to Send a Drink</h1>
      <div>
        {[1, 2, 3, 4, 5].map(table => (
          <button key={table} onClick={() => handleTableClick(table)}>Table {table}</button>
        ))}
      </div>
    </div>
  );
}

export default TableMap;