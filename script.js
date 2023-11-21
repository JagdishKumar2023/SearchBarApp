import { user_data } from "./data.js";

// search data

let search = () => {
  let searchInput = document.getElementById("search_input");
  let searchValue = searchInput.value;

  let searchedData = user_data.filter((ele) => {
    return ele.first_name
      .toLocaleLowerCase() // dasi
      .includes(searchValue.toLocaleLowerCase());
  });

  displayData(searchedData);
};

// reset data

let resetSearch = () => {
  let searchInput = document.getElementById("search_input");

  searchInput.value = "";
  displayData(user_data);
  searchInput.focus();
};

let searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", search);

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetSearch);

// display data

function displayData(data) {
  let user_container = document.querySelector(".user_container");
  user_container.innerText = "";

  if (data.length === 0) {
    let noDataError = document.createElement("h1");
    noDataError.innerText = "no data found";
    user_container.append(noDataError);
  }

  data.map((ele, idx) => {
    let contentDiv = document.createElement("div");

    let name = document.createElement("h2");
    name.innerText = ele.first_name;

    let email = document.createElement("h3");
    email.innerText = ele.email;

    contentDiv.append(name, email);

    user_container.append(contentDiv);
  });
}

displayData(user_data);
