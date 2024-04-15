import React, { useState } from "react";
import ButtonAdd from "../utils/buttonAdd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Add = () => {
  const queryClient = useQueryClient();
  const [add, setAdd] = useState("");

  // mutation add data
  const addData = useMutation({
    mutationFn: (addDesc) => {
      return axios.post("http://localhost:1840/desc/add", { desc: addDesc });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["description"]);
    },
  });

  return (
    <div className="flex flex-col text-center py-5">
      <h1 className="py-5">Todo List App</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {/* Text input */}
        <input
          required
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-3xl rounded-md"
          onChange={(e) => setAdd(e.target.value)}
          value={add}
        />
        {/* Text input */}

        {/* button add */}
        <ButtonAdd
          setAdd={setAdd}
          addData={() => addData.mutate(add)}
          Data={add}
        />
        {/* button add */}
      </div>
    </div>
  );
};

export default Add;
