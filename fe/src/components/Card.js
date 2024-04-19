import React, { useEffect, useState } from "react";
import { useDataByID } from "../services/queries";
import { useAtom } from "jotai";
import { dataAtom } from "../atom/atom";
import { DeleteData } from "../services/mutation";

const Card = ({ setCard }) => {
  const [button, setButton] = useState(false);
  const [ID, setID] = useState(0);
  const [desc, setDesc] = useAtom(dataAtom);

  const { data, isSuccess } = useDataByID(ID);
  const useDeleteDataMutation = DeleteData();

  useEffect(() => {
    if (isSuccess) {
      data.map((item) => setDesc(item));
    }
    setButton(false);
  }, [isSuccess, data]);

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
                  setID(items.id);
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
                  useDeleteDataMutation.mutate(items.id);
                  setButton(true);
                }}
                className="btn btn-error"
              >
                Delete
              </button>
              {/* button delete */}
            </div>
          </form>
        );
      })}
    </>
  );
};

export default Card;
