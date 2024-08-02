import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TableMap from './TableMap';
import DrinkSelection from './DrinkSelection';
import Confirmation from './Confirmation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/table/:tableId" component={TableMap} />
        <Route path="/send-drink/:tableId/:receiverTable" component={DrinkSelection} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
}

export default App;