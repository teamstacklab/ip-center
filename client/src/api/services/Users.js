// import { useQuery } from "react-query";
import { client } from "../client";

export const UsersService = {
  useGetAll: async () => {
    try {
      const { data } = await client.get(`users/find`);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  useGetOneById: async (id) => {
    try {
      const { data } = await client.get(`users/find/${id}`);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  useCreate: async (user) => {
    try {
      const { data } = await client.post(`users/create`, user);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  useUpdate: async (id) => {
    try {
      const { data } = await client.post(`users/update/${id}`);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  useDelete: async (id) => {
    try {
      const { data } = await client.post(`users/delete/${id}`);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
}