import { Image, View } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../Txt/Txt";
import Clock from "../Clock/Clock";

export default function MeteoBasic({ temperature, interpretation, city }) {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
