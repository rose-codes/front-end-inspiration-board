import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <section>
      <li>{props.message}</li>
      <section class="likes">
        <span>❤️ {props.card.likes_count} Likes </span>
        <span
          onClick={() => {
            console.log("likes clicked!", props.card);
            props.increaseLikesCount(props.card);
          }}
        >
          +1{" "}
        </span>
        <span>Delete Card</span>
      </section>
    </section>
  );
};

Card.propTypes = {
  message: PropTypes.string,
};

export default Card;
