import React, { useEffect, useState } from "react";
import ButtonAdd from "../utils/buttonAdd";
import { UseCreateData, UseUpdateData } from "../services/mutation";
import { useAtom } from "jotai";
import { dataAtom } from "../atom/atom";

const Add = () => {
  const [add, setAdd] = useState("");
  const [data, setData] = useAtom(dataAtom);

  const createDescMutation = UseCreateData();
  const updateDataMutation = UseUpdateData();

  const handleDataDesc = (dataDesc) => {
    if (!data) {
      createDescMutation.mutate(dataDesc);
    } else {
      setData("");
      updateDataMutation.mutate({ id: data.id, desc: dataDesc });
    }
  };

  useEffect(() => {
    if (data) {
      setAdd(data.description);
    }
  }, [data]);

  return (
    <div className="flex flex-col text-center py-5">
      <h1 className="py-5">Todo List App</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {/* Text input */}
        <input
          required
          type="text"
          placeholder="Type here"
          value={add}
          className="input input-bordered w-full max-w-3xl rounded-md"
          onChange={(e) => setAdd(e.target.value)}
        />
        {/* Text input */}

        {/* button add */}
        <ButtonAdd
          setValueAdd={setAdd}
          addData={() => handleDataDesc(add)}
          Data={add}
        />
        {/* button add */}
      </div>
    </div>
  );
};

export default Add;
