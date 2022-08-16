import Axios from "axios";
// create an new axios http instance
const http = Axios.create({
  baseURL: import.meta.env.BASE_URL || "https://odco-api-core-staging.herokuapp.com/api/v1",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

http.defaults.headers.common.accept = "application/json";

// before a request is made start  anything
http.interceptors.request.use((config: any) => {
  return config;
});

// before a response is returned do anything
http.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return error;
  }
);

const base_url = http.defaults.baseURL;

export { http, base_url };
