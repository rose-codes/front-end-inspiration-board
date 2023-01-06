import React, { useState } from "react";

const kDefaultFormState = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);

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
    props.createBoardCallback({
      title: formFields.title,
      owner: formFields.owner,
    });

    setFormFields({
      title: "",
      owner: "",
    });
  };

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
          ></input>
        </div>
        <div>
          <label htmlFor="owner">Owner's Name</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formFields.owner}
            onChange={onOwnerChange}
          ></input>
        </div>
        <div>Preview: Title - Owner's Name</div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </section>
  );
};

export default NewBoardForm;
