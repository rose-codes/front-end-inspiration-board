import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  //onClickHandler: handle click on Board Name --> update selectedBoardName --> pass it back up to the App
  //later on, we need to have a safeguard to only allow one selected board at a time
  //Fri 01/06 - selectedClass not applying, onClick handler not working
  const selectedClass = props.isSelected ? "selected" : "";
  return (
    <section>
      <div
        className={selectedClass}
        onClick={props.selectBoardNameCallback(props.id)}
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
