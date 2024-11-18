import { BASEURL } from "./constant";
import { ApiConfig, ApiError } from "./types";
import axios, { AxiosInstance } from 'axios';

export class OpenWeatherMap {
  private apikey: string;
  private axiosInstance: AxiosInstance;

  constructor({ apiKey, baseUrl = BASEURL }: ApiConfig) {
    if (!apiKey) {
      throw new Error("API key is required.");
    }
    this.apikey = apiKey;
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      params: {
        appid: this.apikey,
      },
    });
  }

  private async apiCall(url: string, params: Record<string, any> = {}) {
    try {
      const response = await this.axiosInstance.get(url, { params });
      return response.data;
    } catch (error: any) {
      const apiError: ApiError = {
        statusCode: error.response?.status || 500,
        message: error.response?.data?.message || "An error occurred.",
      };
      throw apiError;
    }
  }

  public fetchWeatherDataByCityName(cityName: string) {
    return this.apiCall(`/weather`, { q: cityName });
  }

  public fetchWeatherDataByCoordinates(latitude: string, longitude: string) {
    return this.apiCall(`/weather`, { lat: latitude, lon: longitude });
  }

  public fetchForecastDataByCityName(cityName: string) {
    return this.apiCall(`/forecast`, { q: cityName });
  }

  public fetchForecastDataByCoordinates(latitude: string, longitude: string) {
    return this.apiCall(`/forecast`, { lat: latitude, lon: longitude });
  }
}
