import React, { useEffect, useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

const Card = ({ setCard }) => {
  const queryClient = useQueryClient();
  const [button, setButton] = useState(false);
  const [ID, setID] = useState(0);

  const getID = async (id) => {
    setID(id);
    const res = await axios.get(`http://localhost:1840/desc/${id}`);
    return res.data.result;
  };

  const { data } = useQuery({
    queryKey: ["editData", ID],
    queryFn: () => getID(ID),
  });

  useEffect(() => {
    if (button) return setButton(false);
  }, [button, data]);

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
              <button
                type="button"
                onClick={() => {
                  getID(items.id);
                  setButton(true);
                }}
                className="btn btn-info"
              >
                Edit
              </button>

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
