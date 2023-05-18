import axios from "axios";

const getTodos = async () => {
  try {
    const response = await axios.get("http://localhost:4000/todos");
    return response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
  } catch (error) {
    console.log("Get Error : ", error);
    throw error;
  }
};

const login = async (userInfo) => {
  try {
    const response = await axios.post("http://localhost:4000/login", userInfo);
    return response.data;
  } catch (error) {
    console.log("Login Error : ", error);
    throw error;
  }
};

const signUp = async (userInfo) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/register",
      userInfo
    );
    return response.data.users;
  } catch (error) {
    console.log("SingUp Error : ", error);
    throw error;
  }
};
export { getTodos, login, signUp };
