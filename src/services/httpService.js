import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  //console.log("Interceptor called")
  if (
    !(
      error.response &&
      error.response.status >= 400 &&
      error.respo.status < 500
    )
  ) {
    console.log("Logging the error", error);
    toast.error("An unexpected errror occured");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
