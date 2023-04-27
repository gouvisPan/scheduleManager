import axios, { AxiosResponse } from "axios";
import {
  LoginCredentials,
  signUpCredentials,
} from "../store/Auth/async-actions";
import { REACT_APP_API_URL, REACT_APP_SERVER_URL } from "../consts";

export const fetchUser = async (
  credentials: LoginCredentials
): Promise<AxiosResponse | null> => {
  const response = await axios.post(
    `${REACT_APP_SERVER_URL}${REACT_APP_API_URL}/users/signin`,
    credentials,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const createUser = async (
  credentials: signUpCredentials
): Promise<AxiosResponse | null> => {
  const response = await axios.post(
    `${REACT_APP_SERVER_URL}${REACT_APP_API_URL}/users/signup`,
    credentials,
    {
      withCredentials: true,
    }
  );
  console.log(response);
  return response;
};

// export const logoutUser = async () => {
//   const response = await axios.get(`${url}/users/logout`);

//   return response;
// };

// export const updateUser = async (token: string, fieldsToUpdate: any) => {
//   const response = await axios.patch(`${url}/users/updateMe`, {
//     token,
//     fieldsToUpdate,
//   });

//   return response;
// };
