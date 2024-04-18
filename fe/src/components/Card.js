import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useDataByID } from "../services/queries";

const Card = ({ setCard }) => {
  const queryClient = useQueryClient();
  const [button, setButton] = useState(false);
  const [ID, setID] = useState(0);
  const [desc, setDesc] = useState("");

  // const updateDescMutation = useUpdateData();

  const { data, isSuccess } = useDataByID(ID);

  const handleEditData = (id) => {
    setID(id);

    // updateDescMutation.mutate();
  };

  // const getID = async (id) => {
  //   setID(id);
  //   const res = await axios.get(`http://localhost:1840/desc/${id}`);
  //   return res.data.result;
  // };

  // const { data } = useQuery({
  //   queryKey: ["editData", { ID }],
  //   queryFn: () => getID(ID),
  // });

  useEffect(() => {
    if (isSuccess) {
      data.map((item) => queryClient.setQueryData("getDataById", item));
    }
    setButton(false);
  }, [isSuccess, data, queryClient]);

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
              <p>{items.id}</p>
              <p>{items.description}</p>
            </div>
            <div className="flex flex-col gap-2">
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
