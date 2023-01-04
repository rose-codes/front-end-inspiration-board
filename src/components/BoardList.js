import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = (props) => {
  //selectedBoardName will add a boolean to confirm if clicked --> if yes, add a style
  return (
    <section>
      <ul>
        <li>
          <Board selectedBoardName={props.selectedBoardName} />
        </li>
      </ul>
    </section>
  );
};

BoardList.propTypes = {
  selectedBoardName: PropTypes.string.isRequired,
};

export default BoardList;
