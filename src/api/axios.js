import axios from "axios";

export const getTodos = async () => {
  try {
    const response = await axios.get("/api/todo", {
      headers: { authorization: document.cookie.authorization },
    });
    return response.data.todoList.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  } catch (error) {
    console.log("GetTodo Error : ", error.response);
    throw error;
  }
};

export const postTodo = async (todo) => {
  try {
    await axios.post("/api/todo", todo, {
      headers: { authorization: document.cookie.authorization },
    });
  } catch (error) {
    console.log("PostTodo Error : ", error.response);
    throw error;
  }
};

export const login = async (userInfo) => {
  try {
    await axios.post("/api/login", userInfo);
    const userData = getUserInfo();
    return userData;
  } catch (error) {
    console.log("Login Error : ", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.post("/api/logout", {
      headers: { authorization: document.cookie.authorization },
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
      headers: { authorization: document.cookie.authorization },
    });
    return response.data;
  } catch (error) {
    console.log("getUserInfo Error : ", error);
    throw error;
  }
};
