import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

const IPHONE_15_PRO_RATIO = 0.0011737089201877935;
export default function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();
  return (
    <Text
      style={[
        s.txt,
        style,
        { fontSize: Math.round(fontSize * IPHONE_15_PRO_RATIO * height) },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
