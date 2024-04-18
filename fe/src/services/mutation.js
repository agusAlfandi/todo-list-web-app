import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDataAPI, updateDataAPI } from "./api";

export const useCreateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createDataAPI(data),
    onSuccess: () => queryClient.invalidateQueries("description"),
  });
};

export const useUpdateData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateDataAPI(data),
    onSuccess: (data) =>
      queryClient.invalidateQueries("description", { id: data.id }),
  });
};
