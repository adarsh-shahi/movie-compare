const fetchData = async (searchTerm) => {
	const response = await axios.get("http://www.omdbapi.com", {
		params: {
			apikey: "a60862d6",
			s: searchTerm,
		},
	});
	console.log(response.data);
};

const input = document.querySelector("input");


/*
  generic fucntion to delay request
*/
const debounceHelper = (callback, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			callback.apply(null, args);
		}, delay);
	};
};
const onInput = (event) => {
	fetchData(event.target.value);
};

input.addEventListener("input", debounceHelper(onInput, 1000));
