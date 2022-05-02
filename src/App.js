
import './App.scss';
import Router from "./Comps/pages/Router";
import React from "react"
import {AuthProvider} from "./hooks/AuthProvider";

function App(props) {
  return (
      <div className="App">
      <header className="App-header">
          <AuthProvider>
              <Router />
          </AuthProvider>

      </header>
    </div>
  );
}

export default App;
