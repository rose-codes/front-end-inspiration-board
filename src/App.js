import React, { useState } from "react";
import NewBoardForm from "./components/NewBoardForm.js";
import CardList from "./components/CardList";
import NewCardForm from "./components/CreateNewCard.js";
import BoardList from "./components/BoardList.js";

import "./App.css";

// Use this environment variable to send your API requests. You can read it by using the expression process.env.REACT_APP_BACKEND_URL. For example, we may use it like this in any component:

// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
// ...

//const boardCards = [0, 1, 2, 3] --> each board has a key/id that corresponds to the index of this array
const boardsList = [
  {
    id: 1,
    title: "Reminders",
    owner: "Simon",
    card: [
      {
        id: 1,
        message: "Hello",
      },
      {
        id: 2,
        message: "You're strong and have good taste",
      },
    ],
  },
  {
    id: 2,
    title: "Affirmations",
    owner: "Claire",
    card: [],
  },
];

// const cardList = [
//   {
//     id: 1,
//     message: "Hello"
//   },
//   {
//     id: 2,
//     message: "You're strong and have good taste"
//   }
// ];

function App() {
  //selectedBoard will be passed down to DisplayBoard --> BoardList --> Board
  //selectedBoard will be passed down to DisplayCards --> CardList --> Card
  const [selectedBoard, updateSelectedBoard] = useState("");
  //boardsData will be passed down to DisplayCards --> CardList --> Card
  const [boardsData, updatedBoardsData] = useState(boardsList);

  const createBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    const nextId = Math.max(...newBoardList.map((board) => board.id)) + 1;
    const newlyCreatedBoard = {
      id: nextId,
      title: newBoard.title,
      owner: newBoard.owner,
      card: [],
    };
    newBoardList.push(newlyCreatedBoard);
    updatedBoardsData(newBoardList);
  };
  return (
    <div className="App">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <BoardList selectedBoardName={selectedBoard} boardData={boardsData} />
        </div>
        <div>
          <NewBoardForm createBoardCallback={createBoard} />
        </div>
        <div>
          <CardList boardData={boardsData} selectedBoardName={selectedBoard} />
        </div>
        <div>
          <NewCardForm />
        </div>
      </main>
    </div>
  );
}

export default App;
