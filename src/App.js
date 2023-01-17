import React, { useState, useEffect } from "react";
import NewBoardForm from "./components/NewBoardForm.js";
import CardList from "./components/CardList";
import NewCardForm from "./components/CreateNewCard.js";
import BoardList from "./components/BoardList.js";
import Card from "./components/Card.js";

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
    isSelected: false,
  },
  {
    id: 2,
    title: "Affirmations",
    owner: "Claire",
    card: [],
    isSelected: false,
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
  const [selectedBoard, updateSelectedBoard] = useState({
    title: "",
    owner: "",
    board_id: null,
    isSelected: false,
    card: [],
  });
  const [isBoardSelected, updateIsBoardSelected] = useState(false);

  const [boardsData, updatedBoardsData] = useState(boardsList);

  const createBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    const nextId = Math.max(...newBoardList.map((board) => board.id)) + 1;
    const newlyCreatedBoard = {
      id: nextId,
      title: newBoard.title,
      owner: newBoard.owner,
      card: [],
      isSelected: false,
    };
    newBoardList.push(newlyCreatedBoard);
    updatedBoardsData(newBoardList);
  };

  const createCard = (newCard) => {
    const boardList = [...boardsData];
    const newCardId = selectedBoard.card.length + 1;
    const newlyCreatedCard = {
      id: newCardId,
      message: newCard.message,
    };
    selectedBoard.card.push(newlyCreatedCard);
    updatedBoardsData(boardList);
    console.log(selectedBoard);
  };

  const toggleSelectBoard = (updatedBoard) => {
    const boards = boardsData.map((board) => {
      if (board.id === updatedBoard.id) {
        if (selectedBoard.isSelected === true) {
          selectedBoard.isSelected = false;
        }
        updateSelectedBoard(updatedBoard);
        return updatedBoard;
      } else {
        return board;
      }
    });
    updateIsBoardSelected(updatedBoard.isSelected);
    updatedBoardsData(boards);
  };

  return (
    <div className="App">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <BoardList
            selectedBoard={selectedBoard}
            boardData={boardsData}
            selectedBoardCallback={toggleSelectBoard}
          />
        </div>
        <div>
          <NewBoardForm createBoardCallback={createBoard} />
        </div>
        {isBoardSelected && <CardList selectedBoard={selectedBoard}></CardList>}
        {/* <div>
          <CardList boardData={boardsData} selectedBoardName={selectedBoard} />
        </div> */}
        <div>
          {isBoardSelected && (
            <NewCardForm
              selectedBoard={selectedBoard}
              createCardCallback={createCard}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
