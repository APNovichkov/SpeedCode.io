import axios from "axios";

export const getAllAlgorithms = () => {
  return axios.get("./api/algorithms.json");
};
