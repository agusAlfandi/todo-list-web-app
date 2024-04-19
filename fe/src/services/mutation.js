import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDataAPI, updateDataAPI } from "./api";

export const UseCreateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createDataAPI(data),
    onSuccess: () => queryClient.invalidateQueries("description"),
  });
};

export const UseUpdateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateDataAPI(data),
    onSuccess: () => queryClient.invalidateQueries("description"),
  });
};
