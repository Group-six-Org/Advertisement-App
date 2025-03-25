import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/classified-ads", payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

// Fecthing all user adds

export const apiGetAllAdverts = async () => apiClient.get("/ads");

// get all vendor adds
export const apiGetVendorAdverts = async () => apiClient.get("/ads");

// Updating Adds

export const apiUpdateAvert = async (id, payload) =>
  apiClient.patch(`/adverts/${id}`, payload);

// Getting a single Add

export const apiGetSingleAdvert = async (id) =>
  apiClient.get(`/adverts/:id/${id}`);
