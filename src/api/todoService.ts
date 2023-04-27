import axios, { AxiosResponse } from "axios";
import { REACT_APP_API_URL, REACT_APP_SERVER_URL } from "../consts";
import { Todo } from "../model/Todo";

export const createTodo = async (todo: Todo): Promise<AxiosResponse | null> => {
  const response = await axios.post(
    `${REACT_APP_SERVER_URL}${REACT_APP_API_URL}/todo`,
    todo,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const getTodo = async (_id: string): Promise<AxiosResponse | null> => {
  const response = await axios.get(
    `${REACT_APP_SERVER_URL}${REACT_APP_API_URL}/todo/${_id}`,
    {
      withCredentials: true,
    }
  );
  return response;
};
export const getAllTodos = async (_: void): Promise<AxiosResponse | null> => {
  const response = await axios.get(
    `${REACT_APP_SERVER_URL}${REACT_APP_API_URL}/todo/all`,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const updateTodo = async (
  updatedTodo: Todo
): Promise<AxiosResponse | null> => {
  const response = await axios.patch(
    `${REACT_APP_SERVER_URL}${REACT_APP_API_URL}/todo/${updatedTodo.id}`,
    updatedTodo,
    {
      withCredentials: true,
    }
  );
  return response;
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse | null> => {
  const response = await axios.delete(
    `${REACT_APP_SERVER_URL}${REACT_APP_API_URL}/todo/${_id}`,
    {
      withCredentials: true,
    }
  );
  return response;
};
