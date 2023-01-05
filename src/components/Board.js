import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  //onClickHandler: handle click on Board Name --> update selectedBoardName --> pass it back up to the App
  return (
    <section>
      <div>{props.title}</div>
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
