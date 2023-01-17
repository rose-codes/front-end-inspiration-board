import React, { useState, useEffect } from "react";
import "./NewBoardForm.css";

const kDefaultFormState = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const isCompleted =
  //   formFields.title.length > 0 && formFields.owner.length > 0;

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.owner) {
      errors.owner = "Owner is required";
    }
    return errors;
  };

  // const errors = validate(formFields.title, formFields.owner);
  // const buttonEnabled = !Object.keys(errors).some((x) => errors[x]);

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  //can condense onOwner and onForm into onHandleChange
  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formFields));
    if (formFields.title.length > 0 && formFields.owner.length > 0) {
      setIsSubmit(true);
      props.createBoardCallback({
        title: formFields.title,
        owner: formFields.owner,
      });
      setFormFields({
        title: "",
        owner: "",
      });
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formFields);
  }, [formErrors]);

  return (
    <section>
      <h2>Create A New Board</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formFields.title}
            onChange={onTitleChange}
            className={formErrors.title ? "error" : ""}
          ></input>
        </div>
        <p>{formErrors.title}</p>
        <div>
          <label htmlFor="owner">Owner's Name</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formFields.owner}
            onChange={onOwnerChange}
            className={formErrors.owner ? "error" : ""}
          ></input>
        </div>
        <p>{formErrors.owner}</p>
        <div>Preview: Title - Owner's Name</div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </section>
  );
};

export default NewBoardForm;
