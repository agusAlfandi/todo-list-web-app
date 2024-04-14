import React, { useState } from "react";

const Add = ({ setDesc }) => {
  const [add, setAdd] = useState("");

  const addData = async () => {
    const data = {
      desc: add,
    };

    await fetch("http://localhost:1840/desc/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await fetch("http://localhost:1840/desc");
    const respon = await res.json();
    setDesc(respon);
  };

  return (
    <div className="flex flex-col text-center py-5">
      <h1 className="py-5">Todo List App</h1>
      <div className="flex flex-wrap justify-center gap-2">
        <input
          required
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-3xl rounded-md"
          onChange={(e) => setAdd(e.target.value)}
          value={add}
        />
        <button
          type="submit"
          onClick={() => {
            if (!add) return alert("Field tidak boleh kosong");
            addData();
            setAdd("");
          }}
          className="btn btn-accent rounded-md"
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default Add;
