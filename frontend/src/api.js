import axios from "axios";

const API_URL = "http://localhost:8080/";

export const sendPickToDb = async (data) => {
  try {
    const response = await axios.post(`${API_URL}users`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("there was an error:", error);
  }
};
