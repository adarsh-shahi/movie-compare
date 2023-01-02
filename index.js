const fetchData = async (searchTerm) => {
	const response = await axios.get("http://www.omdbapi.com", {
		params: {
			apikey: "a60862d6",
			s: searchTerm,
		},
	});
	if (response.data.Error) return [];
	return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" /><br>
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector(".input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (event) => {
	const movies = await fetchData(event.target.value);
  dropdown.classList.add('is-active')
	movies.map((movie) => {
		const option = document.createElement("a");

    option.classList.add('dropdown-item')
		option.innerHTML = `
      <img src="${movie.Poster}" />
      ${movie.Title}
    `;
		resultsWrapper.appendChild(option);
	});
};
input.addEventListener("input", debounceHelper(onInput, 1000));
