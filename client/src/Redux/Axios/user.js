import axios from "axios";

export const userAuth = axios.create({
    baseURL: "http://localhost:8000/api/auth"
  });

