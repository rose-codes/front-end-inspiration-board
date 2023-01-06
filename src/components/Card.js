import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <section>
      <li>{props.message}</li>
    </section>
  );
};

Card.propTypes = {
  message: PropTypes.string,
};

export default Card;
