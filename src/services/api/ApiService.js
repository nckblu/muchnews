import axios from "axios";
import config from "config";

export default class ApiService {

	constructor(props) {
		this.apiKey = "&apiKey=" + config.apiKey;
	}

	user() {
		return {
			authenticate() {
				console.log("authenticating");
			}
		}
	}

	fetchPopular(source = "the-next-web", sort = "latest") {
		return axios.get(config.apiUrl + 'articles?source=' + source + '&sortBy=' + sort + this.apiKey);
	}

	fetchArticleSources() {
		return axios.get(config.apiUrl + 'sources?language=en' + this.apiKey);
	}

}