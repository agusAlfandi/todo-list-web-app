import axios from "axios";
// import

const BASE_URL = "http://localhost:1840";
const axiosInstanse = axios.create({ baseURL: BASE_URL });

export const getDataAPI = async () => {
  const res = await axiosInstanse.get("/desc");
  return res.data.result;
};

export const createDataAPI = async (data) => {
  return await axiosInstanse.post("/desc/add", { desc: data });
};

export const updateDataAPI = async (data) => {
  return await axiosInstanse.post("/desc/update", {
    id: data.id,
    desc: data.desc,
  });
};

export const getDataByIDAPI = async (id) => {
  const res = await axiosInstanse.get(`/desc/${id}`);
  return res.data.result;
};