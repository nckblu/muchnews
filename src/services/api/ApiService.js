import axios from "axios";
import config from "config";

export default class ApiService {

	constructor(props) {
		this.apiKey = "&apiKey=" + config.apiKey;
	}

	fetchPopular() {
		return axios.get(config.apiUrl + '?source=the-next-web&sortBy=latest' + this.apiKey);
	}

}