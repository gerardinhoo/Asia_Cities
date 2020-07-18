// Local Legends Data
const cities = [
  {
    id: 1,
    city: "Bangkok",
    img: "https://images.pexels.com/photos/209740/pexels-photo-209740.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    details: "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life."
  },
  {
    id: 2,
    city: "New Delhi",
    img: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    details: "New Delhi is an urban district located in the city of Delhi."
  },
  {
    id: 3,
    city: "Jarkata",
    img: "https://images.pexels.com/photos/2126395/pexels-photo-2126395.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    details: "Jakarta, Indonesia's massive capital, sits on the northwest coast of the island of Java. A historic mix of cultures – Javanese, Malay, Chinese, Arab, Indian and European – has influenced its architecture, language and cuisine."
  },
  {
    id: 4,
    city: "Tokyo",
    img: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    details: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods."
  }
]

// Get items from DOM
const image = document.querySelector("#city-img");
const cityName = document.querySelector("#city-name");
const cityDetails = document.querySelector("#details")

// Select buttons from DOM;
const prevButton = document.querySelector(".prev-button");
const nexButton = document.querySelector(".next-button");
const randomButton = document.querySelector(".random-button");


// Initial value


let initialValue = 0;

window.addEventListener("DOMContentLoaded", function() {
  aboutCities();
})

const aboutCities = () => {
  const asiaCities = cities[initialValue];
  image.src = asiaCities.img;
  cityName.textContent = asiaCities.city;
  cityDetails.textContent = asiaCities.details;
}


// Show next city
nexButton.addEventListener("click", () => {
  initialValue++;
  if(initialValue > cities.length - 1) {
    initialValue = 0;
  }
  aboutCities();
})


// Show previous city
prevButton.addEventListener("click", () => {
  initialValue--;
  if(initialValue < 0) {
    initialValue = cities.length - 1 ;
  }
  aboutCities();
})


// Get random ciy

randomButton.addEventListener("click", () => {
  initialValue = Math.floor(Math.random() * cities.length);
  console.log(initialValue)
  aboutCities();
})






