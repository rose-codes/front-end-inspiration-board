import React from "react";
import CardList from "./CardList";

const DisplayCards = () => {
  //take selectedBoardName --> display the right cards for the board (ul with li card elems)
  return (
    <section>
      <h2>Display Cards Component</h2>
      <div>
        <CardList />
      </div>
    </section>
  );
};

export default DisplayCards;
