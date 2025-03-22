import baseAxiosInstance from "./AxiosInstace";

export async function getUserById(id: string) {
    try {
      return await baseAxiosInstance.get(`/users/${id}`);
    } catch (error : any) {
      console.error("API Error:", error.response?.data || error.message);
      throw error.response?.data || new Error("An error occurred while processing the request");
    }
  }
  
  export async function createUser(data: any) {
    try {
      return await baseAxiosInstance.post("/users/create", data);
    } catch (error : any) {
      console.error("API Error:", error.response?.data || error.message);
      throw error.response?.data || new Error("An error occurred while processing the request");
    }
  }
  
  export async function getAllUsers() {
    try {
      return await baseAxiosInstance.get("/users");
    } catch (error : any) {
      console.error("API Error:", error.response?.data || error.message);
      throw error.response?.data || new Error("An error occurred while processing the request");
    }
  }