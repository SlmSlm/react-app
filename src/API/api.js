import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "f8f87f20-4ba6-47e5-9a71-47c76c7aab71",
  },
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};
