import React from "react";

const Card = ({ setCard }) => {
  return (
    <>
      {setCard.map((items) => {
        return (
          <form
            key={items.id}
            className="flex flex-col sm:flex-row gap-4 mt-4 p-5 border rounded-lg"
          >
            <div className="pb-10 w-full max-w-3xl">
              <p>{items.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => items.id}
                // type="submit"
                className="btn btn-info"
              >
                Edit
              </button>
              <button className="btn btn-error">Delete</button>
              <button className="btn btn-success">Done</button>
            </div>
          </form>
        );
      })}
    </>
  );
};

export default Card;
