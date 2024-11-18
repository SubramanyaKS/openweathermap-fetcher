# Openweathermap-fetcher
A fetcher for openweathermap api.Currently in initial stage.

## Prerequisite

To use this package API key of openweathermap is needed. To get this you need to 
1. Go to [openweathermap](https://openweathermap.org/) website.
2. Create an free account.
3. Login wto your account and get the API Key.

currently tested on free account openweather API.

## Installation

you can install this package using below npm command

```sh
npm install openweathermap-fetcher
```
or

```sh
yarn add openweathermap-fetcher
```

## Usage

```js

import { OpenWeatherMap } from 'openweathermap-fetcher';

const apiKey='your_api_key';

const openweathermap = new OpenWeatherMap({apiKey});

async function run() {
    try {
      const data = await openweathermap.fetchWeatherDataByCityName("Delhi");
      console.log("API Result:", data);
    } catch (error) {
      console.error("API Error:", error.message);
    }
  }
  
  run();

```

## Method

1. ```js fetchWeatherDataByCityName(cityName:string)```
The method will fetch the data by taking cityname as an argument and returns weather data.

2. ```js fetchWeatherDataByCoordinates(latitude:string,longitude:string)```
This method will fetch the data by taking longitude and latitude as an argument and returns weather data.

## Contribution

We welcome contributions! If you'd like to contribute to openweathermap-wrapper, please follow our [Contribution Guidelines](https://github.com/SubramanyaKS/openweathermap-fetcher/blob/main/CONTRIBUTING.md).

## Author
[Subramanya KS](https://github.com/SubramanyaKS)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

