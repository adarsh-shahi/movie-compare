
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