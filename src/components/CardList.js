import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = (props) => {
  const getCardListJSX = (props) => {
    return props.boardData.map((cards) => {
      return (
        <Card
          key={cards.card.id}
          id={cards.card.id}
          message={cards.card.message}
        />
      );
    });
  };

  return (
    <section>
      <h2>Cards</h2>
      <div>{getCardListJSX(props)}</div>
    </section>
  );
};

CardList.propTypes = {
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

export default CardList;
