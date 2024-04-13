import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center pt-14">
      <div className="flex-col w-full max-w-4xl px-4">
        {/* Header */}
        <div className="flex flex-col text-center border py-5">
          <h1>Todo List App</h1>
          <div className="flex flex-wrap justify-center gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-accent">Tambah</button>
          </div>
        </div>
        {/* Header */}

        {/* Card */}
        <form className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="px-10 w-full border">
            <p>Description</p>
          </div>
          <div className="flex flex-col gap-2">
            <button type="submit" className="flex btn btn-primary">
              Edit
            </button>
            <button type="submit" className="flex btn btn-error">
              Delete
            </button>
          </div>
        </form>

        {/* Card */}
      </div>
    </div>
  );
};

export default Home;
