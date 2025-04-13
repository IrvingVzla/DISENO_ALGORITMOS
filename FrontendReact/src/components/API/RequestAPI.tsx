import apiClient from "./MsAPI";
//import { IgetData, IpostData, IputData } from 'src/Interfaces/ApiInterface';

export interface IgetData {
  Code: number;
  Data: string;
  Mensaje: string;
}

export interface IpostData {
  Code: number;
  Data: string;
  Mensaje: string;
}

export interface IputData {
  Code: number;
  Data: string;
  Mensaje: string;
}

export const getData = async (filtros: string, url: string): Promise<any> => {
  try {
    const response = await apiClient.get(`${url}`, {
      params: filtros ? JSON.parse(filtros) : undefined,
    });
    let data: IgetData;

    if (response.status === 200) {
      data = {
        Code: response.status,
        Data: JSON.stringify(response.data),
        Mensaje: "OK",
      };
    } else {
      data = { Code: response.status, Data: "", Mensaje: "Error" }; //500 Error no controlado -- 422 Validation exception
    }

    return data;
  } catch (error: any) {
    let dataError = {} as IgetData;

    if (error.status === 422) {
      dataError = {
        Code: error.status,
        Data: "",
        Mensaje: error.response.data.detail,
      }; //422 Validation exception
    } else {
      dataError = {
        Code: error.status,
        Data: "",
        Mensaje: "Error general al realizar la petición",
      }; //500 Error
    }

    return dataError;
  }
};

export const postData = async (data: any, url: string): Promise<any> => {
  try {
    const response = await apiClient.post(`${url}`, data);
    let dataResponse = {} as IpostData;

    if (response.status === 200) {
      dataResponse = {
        Code: response.status,
        Data: JSON.stringify(response.data),
        Mensaje: "OK",
      };
    }

    return dataResponse;
  } catch (error: any) {
    let dataError = {} as IpostData;

    if (error.status === 422) {
      dataError = {
        Code: error.status,
        Data: "",
        Mensaje: error.response.data.detail,
      }; //422 Validation exception
    } else {
      dataError = {
        Code: error.status,
        Data: "",
        Mensaje: "Error general al realizar la petición",
      }; //500 Error
    }

    return dataError;
  }
};

export const putData = async (data: any, url: string): Promise<any> => {
  try {
    const response = await apiClient.put(`${url}`, data);
    let dataResponse = {} as IputData;

    if (response.status === 200) {
      dataResponse = {
        Code: response.status,
        Data: JSON.stringify(response.data),
        Mensaje: "OK",
      };
    }

    return dataResponse;
  } catch (error: any) {
    let dataError = {} as IputData;

    if (error.status === 422) {
      dataError = {
        Code: error.status,
        Data: "",
        Mensaje: error.response.data.detail,
      }; //422 Validation exception
    } else {
      dataError = {
        Code: error.status,
        Data: "",
        Mensaje: "Error general al realizar la petición",
      }; //500 Error
    }

    return dataError;
  }
};
