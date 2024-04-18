import React, { useEffect, useState } from "react";
import Add from "../components/Add";
import Card from "../components/Card";
import { useData } from "../services/queries";

const Home = () => {
  const [desc, setDesc] = useState([]);
  const [id, setId] = useState(0);
  const { isSuccess, data } = useData();

  useEffect(() => {
    if (isSuccess) {
      data.map((item) => setId(item.id));
      setDesc(data);
    }
  }, [data, isSuccess]);

  return (
    <div className="flex justify-center pt-14">
      <div className="flex-col w-full max-w-4xl px-4">
        {/* Header */}
        <Add />
        {/* Header */}

        {/* Card */}
        <Card setCard={desc} />
        {/* Card */}
      </div>
    </div>
  );
};

export default Home;
