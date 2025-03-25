import { apiClient } from "./config";

export const apiSignupVendor = async (payload) => {
  return apiClient.post("/users/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiLogin = async (payload) =>
  apiClient.post("/users/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
