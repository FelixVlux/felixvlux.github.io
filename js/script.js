//define global variables
let headerData;
let clicks = 0;

// grab html elements

const heading = document.querySelector("h1");
const allTiles = [...document.querySelectorAll(".grid-item")];
const resetHeader = document.getElementById("resetTitle");
const startTitle = "Demo App";

// fetches data from an api

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const responseData = await response.json();
  headerData = responseData.title;
}

// resets title text content incl. scroll up when clicked on mobile devices (easter egg when clicking reset)

function onClick() {
  clicks += 1;
  if (clicks == 10) {
    alert("It's over 9000!");
    clicks = 0;
  }
}

function resetButton() {
  resetHeader.addEventListener("click", () => {
    onClick();
    heading.textContent = startTitle;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// changing text content of header when clicked on picture incl. scroll up when clicked on mobile devices

function changeHeader(indexNum) {
  heading.textContent = headerData + " " + indexNum;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// add Eventlisten to every tile

for (let i = 0; i < allTiles.length; i++) {
  allTiles[i].addEventListener("click", () => {
    changeHeader(i);
  });
}

// data setup

async function setup() {
  await fetchData();
  resetButton();
}

setup();
