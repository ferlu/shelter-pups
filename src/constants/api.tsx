const BASE_URL = "https://frontend-take-home-service.fetch.com";
const LOGIN_URL = `${BASE_URL}/auth/login`;

const LOGIN_HEADERS = {
	credentials: "include",
	withCredentials: true,
	"content-type": "application/json;charset=UTF-8",
};

// Accept: "application/json",
// "Accept-Version": "3.0",
// "Content-Type": "application/hal+json",

export async function login(body: object) {
	let options = {
		method: "POST",
		headers: LOGIN_HEADERS,
		body: JSON.stringify(body),
	};

	return getJSON(LOGIN_URL, options);
}

async function getJSON(url: string, options: object) {
	const response = await fetch(url, { ...options });
	return response;
}

// export async function fetchCategories() {
// 	return getJSON(CATEGORIES_URL);
// }

// export async function fetchListings() {
// 	return getJSON(LISTINGS_URL);
// }
