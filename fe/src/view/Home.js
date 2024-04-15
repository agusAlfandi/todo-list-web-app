import React, { useCallback, useEffect, useRef, useState } from "react";
import Add from "../components/Add";
import Card from "../components/Card";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const linkRef = useRef(null);
  const [desc, setDesc] = useState([]);
  const queryClient = useQueryClient();

  const newReloadeData = queryClient.getQueryData("description");

  const getData = async () => {
    const res = await fetch("http://localhost:1840/desc");
    const data = await res.json();
    return data.result;
  };

  const { isSuccess, data } = useQuery({
    queryKey: ["description"],
    queryFn: getData,
  });

  const goTo = useCallback((ref) => {
    window.scroll({
      top: ref.scrollHeight,
      behavior: "smooth",
      left: 0,
    });
  }, []);

  useEffect(() => {
    if (newReloadeData) {
      setDesc(newReloadeData);
      goTo(linkRef.current);
    }
  }, [newReloadeData, goTo]);

  useEffect(() => {
    if (isSuccess) return setDesc(data);
  }, [data, isSuccess]);

  return (
    <div className="flex justify-center pt-14">
      <div className="flex-col w-full max-w-4xl px-4">
        {/* Header */}
        {/* <div onClick={() => goTo(linkRef.current)}> */}
        <Add />
        {/* </div> */}
        {/* Header */}

        {/* Card */}
        <div ref={linkRef}>
          <Card setCard={desc} />
        </div>
        {/* Card */}
      </div>
    </div>
  );
};

export default Home;
