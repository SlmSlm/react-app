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

  follow(userID) {
    return instance.post(`follow/${userID}`);
  },

  unfollow(userID) {
    return instance.delete(`follow/${userID}`);
  },

  getProfile(userID) {
    console.warn("Obsolete methog. Use profileApi");
    return profileAPI.getProfile(userID);
  },
};

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/` + userID);
  },

  getStatus(userID) {
    return instance.get(`profile/status/` + userID);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },

  logout() {
    return instance.delete(`auth/login`);
  },
};
