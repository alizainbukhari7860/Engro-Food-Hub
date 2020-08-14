import Axios from "axios";

const BASE_URL = "http://192.168.0.56/engro-food-hub/";

const api = Axios.create({
  baseURL: BASE_URL,
});

export { BASE_URL, api };
