import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const selectBoardClick = () => {
    const selectedBoard = {
      id: props.id,
      key: props.id,
      title: props.title,
      owner: props.owner,
      card: props.card,
      isSelected: !props.isSelected,
    };
    props.selectBoardNameCallback(selectedBoard);
  };
  const selectedClass = props.isSelected ? "selected" : "";
  return (
    <section>
      <div
        className={selectedClass}
        onClick={() => {
          console.log("inside Board.js:", props.id);
          selectBoardClick();
        }}
      >
        {props.title}
      </div>
    </section>
  );
};

Board.propTypes = {
  selectedBoardName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  card: PropTypes.array.isRequired,
};

export default Board;
