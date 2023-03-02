import axios, { AxiosResponse } from "axios";
import ApiUser from "../model/ApiUser";
import LoginCredentials from "../model/LoginCredentials";

const url = `/api/v1`;

export const fetchUser = async (
  credentials: LoginCredentials
): Promise<AxiosResponse | null> => {
  const response = await axios
    .post<ApiUser>(`${url}/users/signin`, credentials, {
      withCredentials: true,
    })
    .catch((err) => {
      throw err;
    });

  console.log(response);
  return response;
};
