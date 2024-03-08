//import usedCars from usedCars.js
import usedCars from "./usedCars.js";

//connect input form from html to js
const form = document.getElementById("search-form");

//retrieve user data
const minYear = parseInt(document.getElementById("min-year-input").value);
const maxYear = parseInt(document.getElementById("max-year-input").value);

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

const maxMiles = parseInt(document.getElementById("miles-input").value);

const minPrice = parseInt(document.getElementById("min-price-input").value);
const maxPrice = parseInt(document.getElementById("max-price-input").value);

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

  return cardTemplate;
}

//reset page upon new user search
function clearResults() {
  result.innerHTML = "";
}

//display the dynamic content with car results
function showResults(item) {
  for (i = 0; i < item.length; i++) {
    result.innerHTML += createCarCard(item[i]);
  }
}

//functionality behind filter searching
function handleSearch(e) {
  //empty array to add filtered cars
  const filteredCars = [];
  isSearching = true;

  //loop through all elements of usedCars
  for (i = 0; i < usedCars.length; i++) {
    const car = usedCars[i];
    const isMake = true;
    const isColor = true;

    //check make
    switch (car.make) {
      case "Toyota" && !toyotaBox.checked:
        isMake = false;
        break;
      case "Honda" && !hondaBox.checked:
        isMake = false;
        break;
      case "Ford" && !fordBox.checked:
        isMake = false;
        break;
      case "Nissan" && !nissanBox.checked:
        isMake = false;
        break;
      case "Chevrolet" && !chevroletBox.checked:
        isMake = false;
        break;
      case "Volkswagen" && !volkswagenBox.checked:
        isMake = false;
        break;
      case "Hyundai" && !hyundaiBox.checked:
        isMake = false;
        break;
      case "Subaru" && !subaruBox.checked:
        isMake = false;
        break;
      case "Mazda" && !mazdaBox.checked:
        isMake = false;
        break;
      case "Kia" && !kiaBox.checked:
        isMake = false;
        break;
      case "Dodge" && !dodgeBox.checked:
        isMake = false;
        break;
      case "Cadillac" && !cadillacBox.checked:
        isMake = false;
        break;
      case "Jaguar" && !jaguarBox.checked:
        isMake = false;
        break;
      case "Tesla" && !teslaBox.checked:
        isMake = false;
        break;
      case "Porsche" && !porscheBox.checked:
        isMake = false;
        break;
      case "Lexus" && !lexusBox.checked:
        isMake = false;
        break;
      case "BMW" && !bmwBox.checked:
        isMake = false;
        break;
    }

    //check color
    switch (car.color) {
      case "Silver":
        if (!silverBox.checked) {
          isColor = false;
        }
        break;
      case "White":
        if (!whiteBox.checked) {
          isColor = false;
        }
        break;
      case "Black":
        if (!blackBox.checked) {
          isColor = false;
        }
        break;
      case "Gray":
        if (!grayBox.checked) {
          isColor = false;
        }
        break;
      case "Blue":
        if (!blueBox.checked) {
          isColor = false;
        }
        break;
      case "Red":
        if (!redBox.checked) {
          isColor = false;
        }
        break;
      case "Green":
        if (!greenBox.checked) {
          isColor = false;
        }
        break;
    }

    //check if text inputs are empty

    //check all filters
    if (
      minYear <= car.year &&
      car.year <= maxYear &&
      isMake &&
      isColor &&
      car.mileage <= maxMiles &&
      minPrice <= car.price &&
      car.price <= maxPrice
    ) {
      filteredCars.push(car);
    }
  }

  //show results of filtered cars
  showResults(filteredCars);
}

//event listener
form.addEventListener("submit", handleSearch);

//main function - init
async function init() {
  result.innerHTML = `<p>javascript file works at least</p>`;
  clearResults();
  isSearching = false;
  showResults(usedCars);
}

//call init
init();
