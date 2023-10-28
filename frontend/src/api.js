import axios from "axios";

const API_URL = "http://localhost:8080/";

export const sendPickToDb = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${API_URL}makepick`, data);
    response.send(data);
    console.log(data);
  } catch (error) {
    console.log("there was an error:", error);
  }
};
