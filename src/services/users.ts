import { User } from "@/models/user";
import { request } from "@/utils/request";

export const getUsers = () =>
  request<Array<User>>(`${import.meta.env.VITE_BASE_URL}/users`);
