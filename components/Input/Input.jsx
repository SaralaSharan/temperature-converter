import { Text, TextInput, View } from "react-native-web";
import { s } from "./Input.style";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={4}
        placeholder="Type your temperature"
        placeholderTextColor="gray"
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => {
          onChange(text);
        }}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
