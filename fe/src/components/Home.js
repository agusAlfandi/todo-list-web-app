import React, { useEffect, useState } from "react";
import Add from "../utils/Add";

const Home = () => {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const setDataDesc = (data) => {
    setDesc(data.result);
  };

  const getData = async () => {
    const res = await fetch("http://localhost:1840/desc");
    const data = await res.json();
    setDesc(data.result);
  };

  return (
    <div className="flex justify-center pt-14">
      <div className="flex-col w-full max-w-4xl px-4">
        {/* Header */}
        <Add setDesc={setDataDesc} />
        {/* Header */}

        {/* Card */}
        {desc.map((items) => {
          return (
            <form
              key={items.id}
              className="flex flex-col sm:flex-row gap-4 mt-4 p-5 border rounded-lg"
            >
              <div className="pb-10 w-full max-w-3xl">
                <p>{items.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button type="submit" className="btn btn-info">
                  Edit
                </button>
                <button type="submit" className="btn btn-error">
                  Delete
                </button>
                <button type="submit" className="btn btn-success">
                  Done
                </button>
              </div>
            </form>
          );
        })}
        {/* Card */}
      </div>
    </div>
  );
};

export default Home;
