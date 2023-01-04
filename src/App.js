import React, { useState } from "react";
import NewBoardForm from "./components/NewBoardForm.js";
import DisplayCards from "./components/DisplayCards.js";
import NewCardForm from "./components/CreateNewCard.js";
import BoardList from "./components/BoardList.js";

import "./App.css";

// Use this environment variable to send your API requests. You can read it by using the expression process.env.REACT_APP_BACKEND_URL. For example, we may use it like this in any component:

// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
// ...

//const boardCards = [0, 1, 2, 3] --> each board has a key/id that corresponds to the index of this array
const boardsList = [
  { boardName: "Pick-Me-Ups", cards: [{ content: "You are loved" }] },
  { boardName: "Reminders", cards: [{ content: "Pick up " }] },
];
function App() {
  //selectedBoard will be passed down to DisplayBoard --> BoardList --> Board
  //selectedBoard will be passed down to DisplayCards --> CardList --> Card
  const [selectedBoard, updateSelectedBoard] = useState("");
  //boardsData will be passed down to DisplayCards --> CardList --> Card
  const [boardsData, updatedBoardsData] = useState(boardsList);
  return (
    <div className="App">
      <main>
        <div>
          <BoardList selectedBoardName={selectedBoard} />
        </div>
        <div>
          <NewBoardForm selectedBoardName={selectedBoard} />
        </div>
        <div>
          <DisplayCards
            boardsInfo={boardsData}
            selectedBoardName={selectedBoard}
          />
        </div>
        <div>
          <NewCardForm />
        </div>
      </main>
    </div>
  );
}

export default App;
