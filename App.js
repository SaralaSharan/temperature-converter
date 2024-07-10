import { ImageBackground, SafeAreaView, Text, View } from "react-native-web";
import { s } from "./App.style";
import { SafeAreaProvider } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input/Input";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState("0");
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConvert
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
