export const defaultClothingItems = [
    {
      _id: 0,
      name: "Cap",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
    },
    {
      _id: 1,
      name: "Hoodie",
      weather: "warm",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
    },
    {
      _id: 2,
      name: "Jacket",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
    },
    {
      _id: 3,
      name: "Sneakers",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
    },
    {
      _id: 4,
      name: "T-Shirt",
      weather: "hot",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
    },
    {
      _id: 5,
      name: "Coat",
      weather: "cold",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
    }
  ]

export const coordinates = {
    //latitude: "39.184158",
    //longitude: "-106.816238",
    latitude: "-41.286461",
    longitude: "174.776230",
    //latitude: "14.599512",
    //longitude: "120.984222",
  }

export const APIInfo = {
    APIKey: "efe74da150a7616e5a53f66fc7250276",
    APIBaseURL: "https://api.openweathermap.org/data/2.5/weather",
}

export const footer = {
  developer: "Krystle Ta",
  year: "2024",
}

export const weatherCardOptions = [
  {
    condition: "Clear",
    isDay: "true",
    url: new URL("../assets/weathercard/day/day-sunny.svg", import.meta.url).href,
  },
  {
    condition: "Clouds",
    isDay: "true",
    url: new URL("../assets/weathercard/day/day-cloudy.svg", import.meta.url).href,
  },
  {
    condition: "Rain",
    isDay: "true",
    url: new URL("../assets/weathercard/day/day-rain.svg", import.meta.url).href,
  },
  {
    condition: "Thunderstorm",
    isDay: "true",
    url: new URL("../assets/weathercard/day/day-storm.svg", import.meta.url).href,
  },
  {
    condition: "Snow",
    isDay: "true",
    url: new URL("../assets/weathercard/day/day-snow.svg", import.meta.url).href,
  },
  {
    condition: "Fog",
    isDay: "true",
    url: new URL("../assets/weathercard/day/day-fog.svg", import.meta.url).href,
  },
  {
    condition: "Clear",
    isDay: "false",
    url: new URL("../assets/weathercard/night/night-sunny.svg", import.meta.url).href,
  },
  {
    condition: "Clouds",
    isDay: "false",
    url: new URL("../assets/weathercard/night/night-cloudy.svg", import.meta.url).href,
  },
  {
    condition: "Rain",
    isDay: "false",
    url: new URL("../assets/weathercard/night/night-rain.svg", import.meta.url).href,
  },
  {
    condition: "Thunderstorm",
    isDay: "false",
    url: new URL("../assets/weathercard/night/night-storm.svg", import.meta.url).href,
  },
  {
    condition: "Snow",
    isDay: "false",
    url: new URL("../assets/weathercard/night/night-snow.svg", import.meta.url).href,
  },
  {
    condition: "Fog",
    isDay: "false",
    url: new URL("../assets/weathercard/night/night-fog.svg", import.meta.url).href,
  },
]

export const deafultWeatherCardOptions = {
  day: {
    url: new URL("../assets/weathercard/day/default.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/weathercard/night/default.svg", import.meta.url).href,
  },
}