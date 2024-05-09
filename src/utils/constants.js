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

export const weatherCardImageLocation = "../src/assets/weathercard/";

export const weatherCardImages = [
  {
    condition: "Clear",
    isDay: "true",
    img_filename: "day-sunny.svg",
  },
  {
    condition: "Clouds",
    isDay: "true",
    img_filename: "day-cloudy.svg",
  },
  {
    condition: "Rain",
    isDay: "true",
    img_filename: "day-rain.svg",
  },
  {
    condition: "Thunderstorm",
    isDay: "true",
    img_filename: "day-storm.svg",
  },
  {
    condition: "Snow",
    isDay: "true",
    img_filename: "day-snow.svg",
  },
  {
    condition: "Fog",
    isDay: "true",
    img_filename: "day-fog.svg",
  },
  {
    condition: "Clear",
    isDay: "false",
    img_filename: "night-sunny.svg",
  },
  {
    condition: "Clouds",
    isDay: "false",
    img_filename: "night-cloudy.svg",
  },
  {
    condition: "Rain",
    isDay: "false",
    img_filename: "night-rain.svg",
  },
  {
    condition: "Thunderstorm",
    isDay: "false",
    img_filename: "night-storm.svg",
  },
  {
    condition: "Snow",
    isDay: "false",
    img_filename: "night-snow.svg",
  },
  {
    condition: "Fog",
    isDay: "false",
    img_filename: "night-fog.svg",
  },
]