import axios from "axios";
import config from "config";

export default class ApiService {

	constructor(props) {
		this.apiKey = "&apiKey=" + config.apiKey;
	}

	fetchPopular(sort = "latest") {
		return axios.get(config.apiUrl + '?source=the-next-web&sortBy=' + sort + this.apiKey);
	}

}