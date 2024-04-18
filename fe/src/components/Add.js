import React, { useEffect, useState } from "react";
import ButtonAdd from "../utils/buttonAdd";
import { useCreateData } from "../services/mutation";
import { useQueryClient } from "@tanstack/react-query";

const Add = () => {
  const queryClient = useQueryClient();
  const [add, setAdd] = useState("");
  const createDescMutatution = useCreateData();
  // const { isSuccess, data } = useDataByID();

  const cache = queryClient.getQueryData("getDataById");
  useEffect(() => {
    if (cache) console.log(cache);
  }, [cache]);

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
          addData={() => createDescMutatution.mutate(add)}
          Data={add}
        />
        {/* button add */}
      </div>
    </div>
  );
};

export default Add;
