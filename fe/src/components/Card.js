import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useDataByID } from "../services/queries";
import { useAtom } from "jotai";
import { dataAtom } from "../atom/atom";

const Card = ({ setCard }) => {
  const queryClient = useQueryClient();
  const [button, setButton] = useState(false);
  const [ID, setID] = useState(0);
  const [desc, setDesc] = useAtom(dataAtom);

  const { data, isSuccess } = useDataByID(ID);

  const handleEditData = (id) => {
    setID(id);
  };

  useEffect(() => {
    if (isSuccess) {
      data.map((item) => setDesc(item));
    }
    setButton(false);
  }, [isSuccess, data]);

  const deleteData = useMutation({
    mutationFn: async (id) => {
      return await axios.post(`http://localhost:1840/desc/delete/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("description");
      setButton(false);
    },
  });

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
              {/* button edit */}
              <button
                type="button"
                onClick={() => {
                  handleEditData(items.id);
                  setButton(true);
                }}
                className="btn btn-info"
              >
                Edit
              </button>
              {/* button edit */}

              {/* button delete */}
              <button
                type="button"
                onClick={() => {
                  deleteData.mutate(items.id);
                  setButton(true);
                }}
                className="btn btn-error"
              >
                Delete
              </button>
              {/* button delete */}

              <button className="btn btn-success">Done</button>
            </div>
          </form>
        );
      })}
    </>
  );
};

export default Card;
