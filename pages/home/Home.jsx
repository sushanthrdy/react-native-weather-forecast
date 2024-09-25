import { Text, View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo-utils";

export default function Home({ weather, city }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );
  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View>
      <View style={s.searchbar_container}>
        <Txt>Search bar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>Advanced weather info</Txt>
      </View>
    </>
  );
}
