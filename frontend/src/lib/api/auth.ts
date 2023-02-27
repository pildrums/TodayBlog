import client from "./client";

export interface IAuth {
  username: string;
  password: string;
}

export const login = (username: string, password: string) =>
  client.post("/api/auth/login", { username, password });

export const register = (username: string, password: string) =>
  client.post("/api/auth/register", { username, password });

export const check = () => client.get("/api/auth/check");
