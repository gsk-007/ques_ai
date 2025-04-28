import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Response Interceptor
// api.interceptors.response.use(
//   (response) => response, // if response OK, just return it
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized error globally
//       console.log("Unauthorized! Logging out...");
//       localStorage.removeItem("userInfo");
//       window.location.href = "/login"; // redirect to login page
//     }
//     return Promise.reject(error); // always reject so individual calls can also catch
//   }
// );

export { api };
