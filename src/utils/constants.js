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
    isDay: true,
    url: new URL("../assets/weathercard/day/day-sunny.svg", import.meta.url).href,
  },
  {
    condition: "Clouds",
    isDay: true,
    url: new URL("../assets/weathercard/day/day-cloudy.svg", import.meta.url).href,
  },
  {
    condition: "Rain",
    isDay: true,
    url: new URL("../assets/weathercard/day/day-rain.svg", import.meta.url).href,
  },
  {
    condition: "Thunderstorm",
    isDay: true,
    url: new URL("../assets/weathercard/day/day-storm.svg", import.meta.url).href,
  },
  {
    condition: "Snow",
    isDay: true,
    url: new URL("../assets/weathercard/day/day-snow.svg", import.meta.url).href,
  },
  {
    condition: "Fog",
    isDay: true,
    url: new URL("../assets/weathercard/day/day-fog.svg", import.meta.url).href,
  },
  {
    condition: "Clear",
    isDay: false,
    url: new URL("../assets/weathercard/night/night-sunny.svg", import.meta.url).href,
  },
  {
    condition: "Clouds",
    isDay: false,
    url: new URL("../assets/weathercard/night/night-cloudy.svg", import.meta.url).href,
  },
  {
    condition: "Rain",
    isDay: false,
    url: new URL("../assets/weathercard/night/night-rain.svg", import.meta.url).href,
  },
  {
    condition: "Thunderstorm",
    isDay: false,
    url: new URL("../assets/weathercard/night/night-storm.svg", import.meta.url).href,
  },
  {
    condition: "Snow",
    isDay: false,
    url: new URL("../assets/weathercard/night/night-snow.svg", import.meta.url).href,
  },
  {
    condition: "Fog",
    isDay: false,
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