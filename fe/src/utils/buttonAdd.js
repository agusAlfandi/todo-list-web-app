import React from "react";

const ButtonAdd = ({ setValueAdd, addData, Data }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          if (!Data) return alert("Field tidak boleh kosong");
          addData();
          setValueAdd("");
        }}
        className="btn btn-accent"
      >
        Tambah
      </button>
    </div>
  );
};

export default ButtonAdd;
