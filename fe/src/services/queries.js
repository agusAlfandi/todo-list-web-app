import { useQuery } from "@tanstack/react-query";
import { getDataAPI, getDataByIDAPI } from "./api";

export const useData = () => {
  return useQuery({
    queryKey: ["description"],
    queryFn: getDataAPI,
  });
};

export const useDataByID = (id) => {
  return useQuery({
    queryKey: ["editData", id],
    queryFn: () => getDataByIDAPI(id),
  });
};
