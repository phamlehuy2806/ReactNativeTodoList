import axios from "axios";

class DataService {
  getAll() {
    return axios.get("http://localhost:5555/api/todos");
  }

  create(data) {
    return axios.post("http://localhost:5555/api/todos", data);
  }

  update(id, data) {
    return axios.post(`http://localhost:5555/api/todos/${id}`, data);
  }

  delete(id) {
    return axios.delete(`http://localhost:5555/api/todos/${id}`);
  }
}

export default new DataService();
