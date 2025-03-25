import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/adverts", payload, {
headers:{
  Authorization: `Bearer ${localStorage.getItem("token")}`
}
  });

export const apiGetAllAdverts = async () => apiClient.get("/ads");

export const apiGetVendorAdverts = async () => apiClient.get("/ads");

export const apiUpdateAvert = async (id, payload) =>
  apiClient.patch(`/adverts/${id}`, payload);

export const apiGetSingleAdvert = async (id) =>
  apiClient.get(`/adverts/:id/${id}`);
