import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectError =
    error.responce &&
    error.responce.status >= 400 &&
    error.responce.status < 500;
  if (!expectError) {
    console.log("Logging error", error);
    toast.error("Unexpected error");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
