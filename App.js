import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/home/Home";
import backgroundImage from "./assets/background.png";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords();
      fetchCityByCoords();
    }
  }, [coordinates]);

  async function fetchWeatherByCoords() {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coordinates);
    setWeather(weatherResponse);
  }

  async function fetchCityByCoords() {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coordinates);
    setCity(cityResponse);
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "48.85", lng: "2.35" });
    }
  }

  return (
    <ImageBackground
      imageStyle={s.img}
      style={s.img_background}
      source={backgroundImage}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded && weather && <Home weather={weather} city={city} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
