import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <section>
      <li>{props.message}</li>
      <section class="likes">
        <span>❤️ {props.likes_count} Likes </span>
        <span
          onClick={() => {
            props.increaseLikesCount(props.card);
          }}
        >
          +1{" "}
        </span>
        <span
          onClick={() => {
            props.deleteCard(props.card);
          }}
        >
          Delete Card
        </span>
      </section>
    </section>
  );
};

Card.propTypes = {
  message: PropTypes.string,
};

export default Card;
