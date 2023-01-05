import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = (props) => {
  //selectedBoardName will add a boolean to confirm if clicked --> if yes, add a style
  const getBoardListJSX = (props) => {
    return props.boardData.map((board) => {
      return (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          card={board.card}
        />
      );
    });
  };

  return (
    <div>
      <h2>Boards</h2>
      <ul>{getBoardListJSX(props)}</ul>
      <h3>Selected Board</h3>
    </div>
  );
};

BoardList.propTypes = {
  selectedBoardName: PropTypes.string,
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      card: PropTypes.array.isRequired,
    })
  ),
};

export default BoardList;
