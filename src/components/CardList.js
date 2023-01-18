import React, { useState, useEffect } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = (props) => {
  // const [cardsData, setCardsData] = useState([]);

  // useEffect(() => {
  //   setCardsData(props.cardListData);
  // }, []);

  const getCardListJSX = () => {
    return props.cardListData.map((card) => {
      if (card.board_id === props.boardId) {
        return (
          <Card
            key={card.id}
            card={card}
            id={card.id}
            message={card.message}
            likes_count={card.likes_count}
            increaseLikesCount={props.increaseLikesCount}
            deleteCard={props.deleteCard}
          />
        );
      }
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
      card_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ),
};

export default CardList;
