export const citiesList = [
  {
    id: 1,
    city: "Warszawa",
    country: "Polska",
    temp: 22,
    hTemp: 25,
    lTemp: 18,
    perceivedTemp: 22,
    weather: "Słonecznie",
    icon: "sunny",
    wind: 8,
    windDirection: "N",
    precipitation: {
        probability: 30,
        amount: 2.5,
        type: "deszczu"
    },
    cloudCover: 30,
    visibility: 7,
    forecast: [
        { name: "Pon", temp: 22 },
        { name: "Wt", temp: 24 },
        { name: "Śr", temp: 19 },
        { name: "Czw", temp: 23 },
        { name: "Pt", temp: 25 },
    ]
  },
  {
    id: 2,
    city: "Kraków",
    country: "Polska",
    temp: 18, // Nieco chłodniej
    hTemp: 20,
    lTemp: 14,
    perceivedTemp: 16,
    weather: "Dzeszczowo",
    icon: "rainy", // Zmienione na deszcz
    wind: 22,
    windDirection: "NE",
    precipitation: {
        probability: 80, // Duża szansa
        amount: 12.0,    // Dużo deszczu
        type: "deszczu"
    },
    cloudCover: 90, 
    visibility: 2,
    forecast: [
        { name: "Pon", temp: 18 },
        { name: "Wt", temp: 17 },
        { name: "Śr", temp: 15 },
        { name: "Czw", temp: 19 },
        { name: "Pt", temp: 21 },
    ]
  },
  {
    id: 3,
    city: "Neapol",
    country: "Włochy",
    temp: 29,
    hTemp: 31,
    lTemp: 22,
    perceivedTemp: 32,
    weather: "Słonecznie",
    icon: "sunny",
    wind: 7,
    windDirection: "SW",
    precipitation: {
        probability: 10, 
        amount: 0,
        type: "deszczu"
    },
    cloudCover: 10, 
    visibility: 9,
    forecast: [
        { name: "Pon", temp: 29 },
        { name: "Wt", temp: 30 },
        { name: "Śr", temp: 31 },
        { name: "Czw", temp: 30 },
        { name: "Pt", temp: 29 },
    ]
  },
  {
    id: 4,
    city: "Bolonia",
    country: "Włochy",
    temp: 30,
    hTemp: 33,
    lTemp: 20,
    perceivedTemp: 33,
    weather: "Słonecznie",
    icon: "very sunny",
    wind: 10,
    windDirection: "NW",
    precipitation: {
        probability: 5,
        amount: 0,
        type: "deszczu"
    },
    cloudCover: 5,
    visibility: 7,
    forecast: [
        { name: "Pon", temp: 30 },
        { name: "Wt", temp: 32 },
        { name: "Śr", temp: 34 },
        { name: "Czw", temp: 33 },
        { name: "Pt", temp: 31 },
    ]
  },
  {
    id: 5,
    city: "Malaga",
    country: "Hiszpania",
    temp: 32,
    hTemp: 35,
    lTemp: 24,
    perceivedTemp: 36,
    weather: "Żar",
    icon: "very sunny",
    wind: 15,
    windDirection: "S",
    precipitation: {
        probability: 0,
        amount: 0,
        type: "deszczu"
    },
    cloudCover: 0,
    visibility: 8,
    forecast: [
        { name: "Pon", temp: 32 },
        { name: "Wt", temp: 33 },
        { name: "Śr", temp: 35 },
        { name: "Czw", temp: 36 },
        { name: "Pt", temp: 34 },
    ]
  },
];