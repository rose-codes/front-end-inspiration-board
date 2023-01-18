import React, { useState, useEffect } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";
import CardList from "./components/CardList";
import NewCardForm from "./components/CreateNewCard.js";
import BoardList from "./components/BoardList.js";

import "./App.css";

// Use this environment variable to send your API requests. You can read it by using the expression process.env.REACT_APP_BACKEND_URL. For example, we may use it like this in any component:

// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
// ...

// const kBaseUrl = 'https://task-list-api-c17.herokuapp.com';
const kBaseUrl = "http://127.0.0.1:5000/";

// Get All Boards

const boardsList = [
  {
    id: 1,
    title: "Reminders",
    owner: "Simon",
  },
  {
    id: 2,
    title: "Affirmations",
    owner: "Claire",
  },
];

const cardListData = [
  {
    card_id: 1,
    message: "Hello",
    likes_count: 0,
    id: 1,
  },

  {
    card_id: 2,
    message: "You're strong and have good taste",
    likes_count: 0,
    id: 1,
  },
  {
    card_id: 3,
    message: "You're strong",
    likes_count: 0,
    id: 2,
  },
  {
    card_id: 4,
    message: "You're cool",
    likes_count: 0,
    id: 2,
  },
];

function App() {
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });
  const [selectedBoardId, setSelectedBoardId] = useState(0);
  const [isBoardSelected, setIsBoardSelected] = useState(false);
  const [isBoardFormDisplayed, setIsBoardFormDisplayed] = useState(true);
  const [boardsData, setBoardsData] = useState(boardsList);
  const [cardsData, setCardsData] = useState(cardListData);

  // GET ALL BOARDS
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((response) => {
        const boardsList = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardsData(boardsList);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  //CREATE CALLBACK FUNCTIONS
  const createBoard = (newBoard) => {
    const newBoardList = [...boardsData];

    //const nextId = Math.max(...newBoardList.map((board) => board.id)) + 1;
    const newlyCreatedBoard = {
      id: newBoardList.length + 1,
      title: newBoard.title,
      owner: newBoard.owner,
    };
    newBoardList.push(newlyCreatedBoard);
    axios
      .post(`${kBaseUrl}/boards`, newlyCreatedBoard)
      .then((response) => {
        setBoardsData(newBoardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createCard = (newCard) => {
    const newCardList = [...cardsData];
    const newCardId = newCardList.length + 1;
    const newlyCreatedCard = {
      message: newCard.message,
      likes_count: 0,
    };
    newCardList.push(newlyCreatedCard);
    axios
      .post(`${kBaseUrl}/boards/${selectedBoardId}/cards`, newlyCreatedCard)
      .then((response) => {
        setCardsData(newCardList);
      })
      .catch((error) => {
        console.log(error);
        console.log(selectedBoardId);
      });
  };

  //SELECT BOARD CALLBACK FUNCTION
  const toggleSelectBoard = (clickedId) => {
    axios
      .get(`${kBaseUrl}/boards/${clickedId}`)
      .then((response) => {
        if (response.data.id === clickedId) {
          if (response.data.id === selectedBoardId) {
            setIsBoardSelected(false);
            setSelectedBoardId(0);
          } else {
            setSelectedBoardId(clickedId);
            setIsBoardSelected(true);
          }
        }
        console.log(response.data);
        setSelectedBoard(response.data);
        return selectedBoardId;
      })
      // .then((response) => getCardsList(response))
      .catch((error) => {
        console.log("Error! Board not found");
      });
  };

  const getCardsList = (board_id) => {
    axios
      .get(`${kBaseUrl}/boards/${board_id}/cards`)
      .then((response) => {
        const cardsList = response.data.map((card) => {
          return {
            id: card.id,
            board_id: board_id,
            message: card.message,
            likes_count: card.likes_count,
          };
        });
        setCardsData(cardsList);
      })
      .catch((error) => {
        console.log(selectedBoardId);
        console.log(error.message);
      });
  };

  //HIDE OR SHOW NEW BOARD FORM BUTTON
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
          {isBoardSelected && <NewCardForm createCardCallback={createCard} />}
        </div>
      </main>
    </div>
  );
}

export default App;
