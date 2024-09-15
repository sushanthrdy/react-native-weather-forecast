import { Text, View } from "react-native";
import { s } from "./Home.style";

export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text>Basic weather info</Text>
      </View>
      <View style={s.searchbar_container}>
        <Text>Search bar</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text>Advanced weather info</Text>
      </View>
    </>
  );
}
