# Openweathermap-wrapper
A wrapper for openweathermap api.Currently in initial stage.

## Installation

you can install this package using below npm command

```sh
npm install openweathermap-wrapper
```
or

```sh
yarn add openweathermap-wrapper
```

## Usage

```js

import { OpenWeatherMap } from 'openweathermap-wrapper';

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

## Contribution

We welcome contributions! If you'd like to contribute to openweathermap-wrapper, please follow our [Contribution Guidelines](https://github.com/SubramanyaKS/openweathermap-wrapper/blob/main/CONTRIBUTING.md).

## Author
[Subramanya KS](https://github.com/SubramanyaKS)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

