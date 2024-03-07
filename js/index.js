//connect input form from html to js
const form = document.getElementById("search-form");

//retrieve user data
const minYear = document.getElementById("min-year-input");
const maxYear = document.getElementById("max-year-input");

const toyotaBox = document.getElementById("make-toyota");
const hondaBox = document.getElementById("make-honda");
const fordBox = document.getElementById("make-ford");
const nissanBox = document.getElementById("make-nissan");
const chevroletBox = document.getElementById("make-chevrolet");
const volkswagenBox = document.getElementById("make-volkswagen");
const hyundaiBox = document.getElementById("make-hyundai");
const subaruBox = document.getElementById("make-subaru");
const mazdaBox = document.getElementById("make-mazda");
const kiaBox = document.getElementById("make-kia");
const dodgeBox = document.getElementById("make-dodge");
const cadillacBox = document.getElementById("make-cadillac");
const jaguarBox = document.getElementById("make-jaguar");
const teslaBox = document.getElementById("make-tesla");
const porscheBox = document.getElementById("make-porsche");
const lexusBox = document.getElementById("make-lexus");
const bmwBox = document.getElementById("make-bmw");

const silverBox = document.getElementById("color-silver");
const whiteBox = document.getElementById("color-white");
const blackBox = document.getElementById("color-black");
const grayBox = document.getElementById("color-gray");
const blueBox = document.getElementById("color-blue");
const redBox = document.getElementById("color-red");
const greenBox = document.getElementById("color-green");

const maxMiles = document.getElementById("miles-input");

const minPrice = document.getElementById("min-price-input");
const maxPrice = document.getElementById("max-price-input");

//element for embedded results
const result = document.getElementById("result");

//control variables
let page = 1;
let isSearching = false;

//html card based on dynamic content
function createCarCard(car) {
  //object destructuring
  const { year, image, make, model, mileage, price, color, gasMileage } = car;

  //dynamic card creation
  const cardTemplate = `
    <div class="card">
      <div class="top">
        <img src=${image} alt="Car image" />
      </div>
      <div class="bottom">
        <p class="title">${year} ${color} ${make} ${model}</p>
        <p class="title">$${price}</p>
        <hr />
        <p class="miles">${mileage} miles</p>
        <p class="mileage">${gasMileage}</p>
      </div>
    </div>
  `;
}

//reset page upon new user search
function clearResults() {
  result.innerHTML = "";
}

//display the dynamic content with car results
function showResults(item) {
  const newContent = item.map(createCarCard).join(""); //.join for space between cards
  result.innerHTML += newContent || "<p> No Results Found. Search Again. </p>";
}

//main function - init
async function init() {
  clearResults();
  showResults(usedCars);
}

//call init
init();
