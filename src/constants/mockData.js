export const citiesList = [
  {
    id: 1,
    city: "Warszawa",
    temp: 22,
     hTemp: 25,
    lTemp: 18,
    weather: "Sunny",
    icon: "sunny", // to będzie nazwa obrazka lub ikonki
    wind: 12,
    windDirection: "NW",
    precipitation: {  // Zagnieżdżony obiekt dla porządku
        probability: 30, // %
        amount: 2.5,     // mm
        type: "rain"     // rodzaj
    },
    cloudCover: 30,
    forecast: [ // Tablica 5 elementów na kolejne dni
        { day: "Pon", temp: 24, icon: "cloudy" },
        { day: "Wt", temp: 22, icon: "rain" },
        // ... i tak do 5 dni
    ]
  },
  {
    id: 2,
    city: "Kraków",
    temp: 23,
    weather: "Rainy",
    hTemp: 25,
    lTemp: 18,
    icon: "windy",
    wind: 12,
    windDirection: "NW",
    precipitation: 30,
    cloudCover: 30,
  },
  {
    id: 3,
    city: "Neapol",
    temp: 29,
     hTemp: 31,
    lTemp: 18,
    weather: "Sunny",
    icon: "sunny",
    wind: 12,
    windDirection: "NW",
    precipitation: 30,
    cloudCover: 30,
    
  },
  {
    id: 4,
    city: "Bolonia",
    temp: 30,
     hTemp: 31,
    lTemp: 18,
    weather: "Sunny",
    icon: "very sunny",
       wind: 12,
    windDirection: "NW",
    precipitation: 30,
    cloudCover: 30,
  },
  {
    id: 5,
    city: "Malaga",
    temp: 32,
     hTemp: 33,
    lTemp: 18,
    weather: "Sunny",
    icon: "very sunny",   wind: 12,
    windDirection: "NW",
    precipitation: 30,
    cloudCover: 30,
  },
];