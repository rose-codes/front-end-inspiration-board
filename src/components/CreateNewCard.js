import React, { useState } from "react";

const kDefaultFormState = {
  message: "",
};

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);
  const [formErrors, setFormErrors] = useState({});

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };
  // const validate = (values) => {
  //   const errors = {};
  //   if (values.message.length > 40) {
  //     errors.message = "Message limited to 40 characters";
  //   } else if (values.message.length < 1) {
  //     errors.message = "Message is required";
  //   }
  //   return errors;
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // setFormErrors(validate(formFields));

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
            // className={formErrors.message ? "error" : ""}
          ></input>
          {/* <p>{formErrors}</p> */}
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
