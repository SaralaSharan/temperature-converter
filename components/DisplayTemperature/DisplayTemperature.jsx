import { Text } from "react-native-web";
import { s } from "./DisplayTemperature.style";

export function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={s.temperature}>
      {temperature} {unit}
    </Text>
  );
}
