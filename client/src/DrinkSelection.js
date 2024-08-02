import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DrinkSelection() {
  const { tableId, receiverTable } = useParams();
  const navigate = useNavigate();
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleDrinkSelection = (drink) => {
    setSelectedDrink(drink);
  };

  const handleSendDrink = () => {
    axios.post('http://localhost:3000/send-drink', {
      senderTable: tableId,
      receiverTable,
      drink: selectedDrink
    }).then(() => {
      navigate('/confirmation');
    });
  };

  return (
    <div>
      <h1>Select a Drink to Send</h1>
      <div>
        {['Drink1', 'Drink2', 'Drink3', 'Drink4', 'Drink5'].map(drink => (
          <button key={drink} onClick={() => handleDrinkSelection(drink)}>{drink}</button>
        ))}
      </div>
      <button onClick={handleSendDrink} disabled={!selectedDrink}>Send Drink</button>
    </div>
  );
}

export default DrinkSelection;
