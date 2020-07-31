import Axios from "axios";

const BASE_URL = "http://192.168.10.10/phpsandbox/engro-food-hub/";

const api = Axios.create({
  baseURL: BASE_URL,
});

export { BASE_URL, api };
