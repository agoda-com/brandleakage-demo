import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WhitelabelPage from "./WhitelabelPage";
import { bankAConfig, bankBConfig } from "./configs";

const App: React.FC = () => {
  return (
    <Router>
      <Route>
        <Route path="/bankA">
          <WhitelabelPage config={bankAConfig} />
        </Route>
        <Route path="/bankB">
          <WhitelabelPage config={bankBConfig} simulateLeakage={false} />
        </Route>
      </Route>
    </Router>
  );
};

export default App;
