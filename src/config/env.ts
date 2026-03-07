import dotenv from "dotenv";

dotenv.config();

export const env = {
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || "",
};