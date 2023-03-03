import axiosApi from "./axiosConfig";
export const loginRequest = async ({ email, password }) => {
  return axiosApi.patch("/user", {
    email,
    password,
  });
};