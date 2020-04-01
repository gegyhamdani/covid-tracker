import axios from "axios";

export default axios.create({
  baseURL: "https://api.kawalcovid19.id/v1/api/"
});
