import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  //onClickHandler: handle click on Board Name --> update selectedBoardName --> pass it back up to the App
  return (
    <section>
      <div>Board Name 1</div>
      <div>Other Board Name</div>
    </section>
  );
};

Board.propTypes = {
  selectedBoardName: PropTypes.string.isRequired,
};

export default Board;
