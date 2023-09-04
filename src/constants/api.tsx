const BASE_URL = "https://frontend-take-home-service.fetch.com";
const LOGIN_URL = `${BASE_URL}/auth/login`;
const BREEDS_URL = `${BASE_URL}/dogs/breeds`;
const SEARCH_URL = `${BASE_URL}/dogs/search`;
const DOGS_URL = `${BASE_URL}/dogs`;

const HEADERS = {
	"content-type": "application/json;charset=UTF-8",
};

export async function login(body: object) {
	let options = {
		method: "POST",
		body: JSON.stringify(body),
	};

	return await getJSON(LOGIN_URL, options);
}

export async function getBreeds() {
	let options = {
		method: "GET",
	};

	return await getJSON(BREEDS_URL, options);
}

export async function getDogsIds() {
	let options = {
		method: "GET",
	};

	return await getJSON(SEARCH_URL, options);
}

export async function getDogsData(body: Array<string>) {
	let options = {
		method: "POST",
		body: JSON.stringify(body),
	};

	return await getJSON(DOGS_URL, options);
}

async function getJSON(url: string, options: object) {
	try {
		const response = await fetch(url, {
			credentials: "include",
			headers: HEADERS,
			...options,
		});
		if (response.status === 401) {
			localStorage.setItem("isLoggedIn", "false");
		}
		if (!response.ok) {
			const error: Error = new Error(
				`Request failed with status ${response.status}`
			);
			throw error;
		}
		return response;
	} catch (error: any) {
		throw new Error(`Fetch error: ${error.message}`);
	}
}

// export async function fetchCategories() {
// 	return getJSON(CATEGORIES_URL);
// }

// export async function fetchListings() {
// 	return getJSON(LISTINGS_URL);
// }

// Accept: "application/json",
// "Accept-Version": "3.0",
// "Content-Type": "application/hal+json",
