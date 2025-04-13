// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { apiUrl } from "../../config";
/*import {
  isTokenExpired,
  handleTokenExpiration,
} from "src/utils/tokenValidation.utility";*/

const apiClient = axios.create({
  baseURL: apiUrl,
});

// Interceptor para agregar el token a los encabezados
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      /*if (isTokenExpired()) {
        handleTokenExpiration();
        return Promise.reject("Token expirado");
      }*/
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      //handleTokenExpiration();
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
