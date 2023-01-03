import React from "react";

const NewBoardForm = () => {
  return (
    <section>
      <h2>Create A New Board</h2>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value=""></input>
        </div>
        <div>
          <label htmlFor="owner">Owner's Name</label>
          <input type="text" id="owner" name="owner" value=""></input>
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
