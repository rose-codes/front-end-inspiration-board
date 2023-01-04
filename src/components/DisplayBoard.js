import React from "react";
import BoardList from "./BoardList";
import PropTypes from "prop-types";

const DisplayBoard = (props) => {
  return (
    <section>
      <div>Display Board</div>
      <div>
        <BoardList selectedBoardName={props.selectedBoardName} />
      </div>
    </section>
  );
};

export default DisplayBoard;

DisplayBoard.propTypes = {
  selectedBoardName: PropTypes.string.isRequired,
};
