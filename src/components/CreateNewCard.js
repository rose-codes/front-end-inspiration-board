import React from "react";

const NewCardForm = () => {
  return (
    <section>
      <h2>Create A New Card</h2>
      <form>
        <div>
          <label htmlFor="message">Message</label>
          <input type="text" id="message" name="message" value=""></input>
        </div>
        <div>Preview: message here</div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </section>
  );
};

export default NewCardForm;
