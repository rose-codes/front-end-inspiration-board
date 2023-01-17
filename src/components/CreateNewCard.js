import React, { useState } from "react";

const kDefaultFormState = {
  message: "",
};

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.createCardCallback({
      message: formFields.message,
    });

    setFormFields({
      title: "",
    });
  };

  return (
    <section>
      <h2>Create A New Card</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formFields.message}
            onChange={onMessageChange}
          ></input>
        </div>
        {/* add code here to show preview */}
        <div>Preview: message here</div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </section>
  );
};

export default NewCardForm;
