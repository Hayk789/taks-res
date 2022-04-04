import axios from "axios";

export const reqImageData = (page: number, category: number, limit: number) => {
  return axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category} `
    )
    .then((res) => res.data);
};
export const reqCategory = () => {
  return axios
    .get("https://api.thecatapi.com/v1/categories")
    .then((res) => res.data);
};
