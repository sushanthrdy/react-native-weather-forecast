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

export default function App() {
  const [coordinates, setCoordinates] = useState();
  useEffect(() => {
    getUserCoordinates();
  }, []);

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

  console.log(coordinates);

  return (
    <ImageBackground
      imageStyle={s.img}
      style={s.img_background}
      source={backgroundImage}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
