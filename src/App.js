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
    board_id: 1,
    title: "Reminders",
    owner: "Simon",
  },
  {
    board_id: 2,
    title: "Affirmations",
    owner: "Claire",
  },
];

const cardListData = [
  {
    card_id: 1,
    message: "Hello",
    likes_count: 0,
    board_id: 1,
  },

  {
    card_id: 2,
    message: "You're strong and have good taste",
    likes_count: 0,
    board_id: 1,
  },
  {
    card_id: 3,
    message: "You're strong",
    likes_count: 0,
    board_id: 2,
  },
  {
    card_id: 4,
    message: "You're cool",
    likes_count: 0,
    board_id: 2,
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

  const [selectedBoardId, setSelectedBoardId] = useState(0);

  const [isBoardSelected, updateIsBoardSelected] = useState(false);
  const [isBoardFormDisplayed, setIsBoardFormDisplayed] = useState(true);
  const [boardsData, updatedBoardsData] = useState(boardsList);
  const [cardsData, setCardsData] = useState(cardListData);

  const createBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    const nextId = Math.max(...newBoardList.map((board) => board.board_id)) + 1;
    const newlyCreatedBoard = {
      board_id: nextId,
      title: newBoard.title,
      owner: newBoard.owner,
      card: [],
      isSelected: false,
    };
    newBoardList.push(newlyCreatedBoard);
    updatedBoardsData(newBoardList);
  };

  const createCard = (newCard) => {
    const newCardList = [...cardsData];
    const newCardId = newCardList.length;
    const newlyCreatedCard = {
      card_id: newCardId,
      message: newCard.message,
      likes_count: 0,
      board_id: selectedBoardId,
    };
    newCardList.push(newlyCreatedCard);
    setCardsData(newCardList);
  };

  // const toggleSelectBoard = (updatedBoard) => {
  //   const boards = boardsData.map((board) => {
  //     if (board.board_id === updatedBoard.board_id) {
  //       if (selectedBoard.isSelected === true) {
  //         selectedBoard.isSelected = false;
  //       }
  //       updateSelectedBoard(updatedBoard);
  //       return updatedBoard;
  //     } else {
  //       return board;
  //     }
  //   });
  //   updateIsBoardSelected(updatedBoard.isSelected);
  //   updatedBoardsData(boards);
  // };

  const toggleSelectBoard = (updatedBoard) => {
    const boards = boardsData.map((board) => {
      if (board.board_id === updatedBoard.board_id) {
        const newBoardId = isBoardSelected ? 0 : board.board_id;
        setSelectedBoardId(newBoardId);
        updateSelectedBoard(updatedBoard);
        return updatedBoard;
      } else {
        return board;
      }
    });
    updateIsBoardSelected(!isBoardSelected);
    updatedBoardsData(boards);
  };

  const boardFormButtonHandler = (event) => {
    event.preventDefault();
    setIsBoardFormDisplayed(!isBoardFormDisplayed);
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
            selectedBoardId={selectedBoardId}
            boardData={boardsData}
            selectedBoardCallback={toggleSelectBoard}
            isBoardSelected={isBoardSelected}
          />
        </div>
        <div class="new-board-form-display">
          <h2>Create a New Board</h2>
          {isBoardFormDisplayed && (
            <NewBoardForm createBoardCallback={createBoard} />
          )}
          <button type="button" onClick={boardFormButtonHandler}>
            {isBoardFormDisplayed
              ? "Hide Create Board Form"
              : "Show Create Board Form"}
          </button>
        </div>
        {isBoardSelected && (
          <CardList
            boardId={selectedBoardId}
            cardListData={cardsData}
          ></CardList>
        )}
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
