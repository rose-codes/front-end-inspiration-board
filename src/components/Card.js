import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = (props) => {
  return (
    <li className="card-container">
      <div class="likes">
        <div className="card-message">{props.message}</div>
        <section className="card-events">
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
      </div>
    </li>
  );
};

Card.propTypes = {
  message: PropTypes.string,
};

export default Card;
