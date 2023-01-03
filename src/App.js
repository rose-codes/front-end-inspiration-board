import React from "react";
import DisplayBoard from "./components/DisplayBoard.js";
import NewBoardForm from "./components/NewBoardForm.js";
import DisplayCards from "./components/DisplayCards.js";
import NewCardForm from "./components/CreateNewCard.js";

import "./App.css";

// Use this environment variable to send your API requests. You can read it by using the expression process.env.REACT_APP_BACKEND_URL. For example, we may use it like this in any component:

// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
// ...

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <DisplayBoard />
        </div>
        <div>
          <NewBoardForm />
        </div>
        <div>
          <DisplayCards />
        </div>
        <div>
          <NewCardForm />
        </div>
      </main>
    </div>
  );
}

export default App;
