import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = (props) => {
  return (
    <section>
      <div class="likes">
        <div>{props.message}</div>
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
      </div>
    </section>
  );
};

Card.propTypes = {
  message: PropTypes.string,
};

export default Card;
