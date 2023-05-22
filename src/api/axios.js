import axios from "axios";

export const getTodos = async () => {
  try {
    const response = await axios.get("/api/todo", {
      headers: { Authorization: document.cookie.split("=")[1] },
    });
    console.log(response.data["todoList"]);
    return response.data["todoList"];
  } catch (error) {
    console.log("GetTodo Error : ", error.response);
    throw error;
  }
};

export const postTodo = async (todo) => {
  try {
    await axios.post("/api/todo", todo, {
      headers: { Authorization: document.cookie.split("=")[1] },
    });
  } catch (error) {
    console.log("PostTodo Error : ", error.response);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`/api/todo/${id}`, {
      headers: { Authorization: document.cookie.split("=")[1] },
    });
  } catch (error) {
    console.log("delete error : ", error.message);
    throw error;
  }
};

export const completeTodo = async (id) => {
  try {
    await axios.patch(`/api/todo/${id}`, {
      headers: { Authorization: document.cookie.split("=")[1] },
    });
  } catch (error) {
    console.log("complete error : ", error.message);
    throw error;
  }
};

export const login = async (userInfo) => {
  try {
    await axios.post("/api/login", userInfo);
  } catch (error) {
    console.log("Login Error : ", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.post("/api/logout", {
      headers: { Authorization: document.cookie.split("=")[1] },
    });
  } catch (error) {
    console.log("Logout Error : ", error);
    throw error;
  }
};

export const signUp = async (userInfo) => {
  try {
    await axios.post("/api/signup", userInfo);
  } catch (error) {
    console.log("SingUp Error : ", error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axios.get("/api/auth", {
      headers: { Authorization: document.cookie.split("=")[1] },
    });
    return response.data["userInfo"];
  } catch (error) {
    console.log("getUserInfo Error : ", error);
    throw error;
  }
};
