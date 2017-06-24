import axios from "axios";
import config from "config";

export default class ApiService {
  constructor(props) {
    this.apiKey = "&apiKey=" + config.apiKey;
    axios.defaults.baseURL = config.apiUrl;
  }

  user() {
    return {
      authenticate(accessToken) {
        return axios.post("login", {
          accessToken,
        });
      },
    };
  }

  articles() {
    return {
      fetchBySource(sourceId) {
        return axios.get(`articles/${sourceId}`);
      },
    };
  }

  fetchArticleSources() {
    return axios.get(config.apiUrl + "sources");
  }
}
