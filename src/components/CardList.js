import React, { useState, useEffect } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = (props) => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setCardsData(props.cardListData);
  }, []);

  const increaseLikesCount = (card) => {
    const newCardsData = cardsData.map((existingCard) => {
      return existingCard.card_id !== card.card_id
        ? existingCard
        : { ...card, likes_count: card.likes_count + 1 };
    });
    setCardsData(newCardsData);
  };

  const deleteCard = (card) => {
    const newCardsData = cardsData.map((existingCard) => {
      return existingCard.card_id !== card.card_id && existingCard;
    });
    setCardsData(newCardsData);
  };

  const getCardListJSX = () => {
    return cardsData.map((card) => {
      if (card.board_id === props.boardId) {
        return (
          <Card
            key={card.card_id}
            card={card}
            card_id={card.card_id}
            message={card.message}
            likes_count={card.likes_count}
            increaseLikesCount={increaseLikesCount}
            deleteCard={deleteCard}
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
