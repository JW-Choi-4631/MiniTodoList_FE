import axios from "axios";

const getTodos = async () => {
  const response = await axios.get("http://localhost:4000/todos");
  return response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
};
export { getTodos };
