//used car data
const usedCars = [
  {
    year: 2018,
    image: "./assets/toyota-camry.png",
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    image: "./assets/honda-civic.png",
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    image: "./assets/ford-fusion.png",
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    image: "./assets/nissan-altima.png",
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    image: "./assets/chevrolet-malibu.png",
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  // Additional entries:
  {
    year: 2016,
    image: "./assets/volkswagen-passat.png",
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    year: 2020,
    image: "./assets/hyundai-elantra.png",
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    year: 2014,
    image: "./assets/subaru-outback.png",
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    image: "./assets/mazda-cx-5.png",
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    year: 2018,
    image: "./assets/kia-sorento.png",
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  // Five more entries:
  {
    year: 2015,
    image: "./assets/dodge-challenger.png",
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    image: "./assets/cadillac-xt5.png",
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    year: 2018,
    image: "./assets/jaguar-f-pace.png",
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    year: 2019,
    image: "./assets/tesla-model_s.png",
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    year: 2020,
    image: "./assets/porsche-cayenne.png",
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    year: 2017,
    image: "./assets/lexus-es.png",
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  },
  {
    year: 2016,
    image: "./assets/bmw-5_series.png",
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
];

module.exports = usedCars;

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

const minMiles = document.getElementById("mine-miles-input");
const maxMiles = document.getElementById("max-miles-input");

const maxPrice = document.getElementById("price-input");

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
