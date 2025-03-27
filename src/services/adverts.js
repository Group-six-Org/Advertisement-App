import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/classified-ads", payload);

// Fecthing all user adds

export const apiGetAllAdverts = async () => apiClient.get("/ads");

// get all vendor adds
export const apiGetVendorAdverts = async () => apiClient.get("/ads");

// Updating Adds

export const apiUpdateAvert = async (id, payload) =>
  apiClient.put(`/ads/${id}`, payload);

// Getting a single Add

export const apiGetSingleAdvert = async (id) =>
  apiClient.get(`/ads/${id}`);

export const apiDeleteVendorAdvertbyId = async (id) =>
  apiClient.delete('/adverts/vendor/${id}');
