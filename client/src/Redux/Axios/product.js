import axios from "axios";

export const products = axios.create({
    baseURL: "http://localhost:8000/api/products/"
  });

  export const featuredProducts = axios.create({
    baseURL: "http://localhost:8000/api/products/",
  });

