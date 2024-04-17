import React, { useEffect, useState } from "react";
import Add from "../components/Add";
import Card from "../components/Card";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [desc, setDesc] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:1840/desc");
    const data = await res.json();
    return data.result;
  };

  const { isSuccess, data } = useQuery({
    queryKey: ["description"],
    queryFn: getData,
  });

  useEffect(() => {
    if (isSuccess) return setDesc(data);
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
