import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = (props) => {
  const getCardListJSX = (props) => {
    return props.selectedBoard.card.map((card) => {
      return <Card key={card.id} id={card.id} message={card.message} />;
    });
  };

  return (
    <section>
      <h2>Cards</h2>
      <ul>{getCardListJSX(props)}</ul>
    </section>
  );
};

CardList.propTypes = {
  selectedBoardName: PropTypes.string,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      card: PropTypes.array.isRequired,
    })
  ),
};

export default CardList;
