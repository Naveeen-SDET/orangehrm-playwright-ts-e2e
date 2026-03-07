import dotenv from "dotenv";

dotenv.config();

const username = process.env.OHRM_USERNAME;
const password = process.env.OHRM_PASSWORD;

if (!username || !password) {
  throw new Error("Missing OHRM_USERNAME or OHRM_PASSWORD in .env");
}

export const env = {
  username,
  password,
};