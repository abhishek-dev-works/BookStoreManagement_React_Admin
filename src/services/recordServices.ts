// recordService.ts
import baseAxiosInstance from "./AxiosInstace";

export async function getAllRecords() {
  try {
    return await baseAxiosInstance.get("/records");
  } catch (error : any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}

export async function addNewEntry(data: any) {
  try {
    return await baseAxiosInstance.post("/records/add", data);
  } catch (error : any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}

export async function updateEntryById(id: string, data: any) {
  try {
    return await baseAxiosInstance.put(`/records/${id}`, data);
  } catch (error : any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}

export async function getEntriesByUserId(id: string) {
  try {
    return await baseAxiosInstance.get(`/records/user/${id}`);
  } catch (error : any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}

export async function addMultipleEntries(data: any) {
  try {
    return await baseAxiosInstance.post("/records/entries", data);
  } catch (error : any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}

export async function getRecordsByFilters(data: any) {
  try {
    return await baseAxiosInstance.post("/records/filter", data);
  } catch (error : any) {
    console.error("API Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}
