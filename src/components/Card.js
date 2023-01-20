import React from "react";
import PropTypes from "prop-types";

// import "./Card.css";

const Card = (props) => {
  return (
    <li className="card-container">
      <div className="card-message">{props.message}</div>
      {/* <section className="card-events"> */}
      <div class="likes">
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
      {/* </section> */}
    </li>
  );
};

Card.propTypes = {
  message: PropTypes.string,
};

export default Card;
