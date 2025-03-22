import baseAxiosInstance from "./AxiosInstace";

export async function getAllBooks() {
  try {
    return await baseAxiosInstance.get("/books");
  } catch (error: any) {
    console.error("Api Error:", error?.response?.data || error?.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}

export async function getBookById(id: string) {
  try {
    return await baseAxiosInstance.get(`/books/${id}`);
  } catch (error : any) {
    console.error("baseAxiosInstance Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}

export async function createBook(data: any) {
  try {
    return await baseAxiosInstance.post("/books", data);
  } catch (error: any) {
    console.error("baseAxiosInstance Error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred while processing the request");
  }
}
