import axios from "axios";
import config from "config";

export default class ApiService {

  constructor(props) {
    this.apiKey = "&apiKey=" + config.apiKey;
  }

  user() {
    return {
      authenticate(accessToken) {
        return axios.post(config.userApiUrl + "login", {
          accessToken,
        });
      },
    };
  }

  fetchPopular(source = "1") {
    console.log("source is", source);
    return axios.get(config.apiUrl + "articles/" + source);
  }

  fetchArticleSources() {
    return axios.get(config.apiUrl + "sources");
  }

}
